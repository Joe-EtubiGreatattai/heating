require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');

// Log to file for verification
function logToFile(msg) {
  const timestamp = new Date().toLocaleString();
  const logMsg = typeof msg === 'object' ? JSON.stringify(msg, null, 2) : msg;
  fs.appendFileSync('server_log.txt', `\n[${timestamp}] ${logMsg}\n`);
  console.log(msg);
}

const Quote = require('./models/Quote');
const Booking = require('./models/Booking');
const Settings = require('./models/Settings');
const User = require('./models/User');
const auth = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Middleware
app.use(cors());
app.use(express.json());

// Request Logger
app.use((req, res, next) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`\n[${timestamp}] 📥 INCOMING REQUEST:`);
  console.log(`   METHOD: ${req.method}`);
  console.log(`   URL:    ${req.url}`);
  if (Object.keys(req.query).length > 0) {
    console.log(`   QUERY:  `, req.query);
  }
  if (req.body && Object.keys(req.body).length > 0) {
    const safeBody = { ...req.body };
    if (safeBody.password) safeBody.password = '********';
    console.log(`   BODY:   `, safeBody);
  }
  console.log(`-----------------------------------\n`);
  next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/heating')
  .then(async () => {
    console.log('Connected to MongoDB');
    // Create initial admin if none exists
    const adminExists = await User.findOne({ email: 'admin@example.com' });
    if (!adminExists) {
      const admin = new User({ email: 'admin@example.com', password: 'password123' });
      await admin.save();
      console.log('Initial admin created: admin@example.com / password123');
    }
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Helper: Send Status Email
async function sendStatusEmail(to, name, date, timeSlot, status, note) {
  const attemptId = Math.random().toString(36).substring(7).toUpperCase();
  logToFile(`\n==================================================`);
  logToFile(`📧 [EMAIL ATTEMPT ${attemptId}]`);
  logToFile(`Recipient: ${to}`);
  logToFile(`Status: ${status}`);
  logToFile(`Booking: ${date} at ${timeSlot}`);
  logToFile(`Admin Note: ${note || 'None'}`);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: `Booking ${status.toUpperCase()}: Direct Heating`,
    html: `
      <h2>Hello ${name},</h2>
      <p>Your booking for <strong>${date}</strong> at <strong>${timeSlot}</strong> has been <strong>${status}</strong>.</p>
      ${note ? `<p><strong>Note from Admin:</strong> ${note}</p>` : ''}
      <p>Thank you for choosing Direct Heating!</p>
    `
  };

  try {
    logToFile(`[EMAIL ${attemptId}] Sending via ${process.env.EMAIL_SERVICE || 'gmail'}...`);
    const info = await transporter.sendMail(mailOptions);
    logToFile(`✅ [EMAIL ${attemptId}] SUCCESS: ${info.response}`);
  } catch (error) {
    logToFile(`❌ [EMAIL ${attemptId}] ERROR: ${error.message}`);
  }
  logToFile(`==================================================\n`);
}

// Auth Routes
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, email: user.email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Public Routes: Submit Data
app.post('/api/quotes', async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    await newQuote.save();
    res.status(201).json({ message: 'Quote submitted successfully', data: newQuote });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/settings', async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = new Settings();
      await settings.save();
    }
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/bookings', async (req, res) => {
    try {
        const { date } = req.query;
        const filter = date ? { date } : {};
        const bookings = await Booking.find(filter);
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/bookings', async (req, res) => {
    try {
        const { fullName, email, date, timeSlot, note } = req.body;
        // Check if slot already exists
        const existing = await Booking.findOne({ date, timeSlot, status: { $ne: 'rejected' } });
        if (existing) {
            return res.status(400).json({ error: 'This time slot is already booked' });
        }
        const newBooking = new Booking({ fullName, email, date, timeSlot, note });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Protected Routes: Admin Operations
app.get('/api/admin/quotes', auth, async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/admin/bookings', auth, async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/admin/bookings/:id', auth, async (req, res) => {
    try {
        const { status, adminNote } = req.body;
        const booking = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!booking) return res.status(404).json({ error: 'Booking not found' });

        logToFile(`Booking updated to ${status} for ${booking.fullName}`);

        // Send Email
        await sendStatusEmail(booking.email, booking.fullName, booking.date, booking.timeSlot, status, adminNote);

        res.json(booking);
    } catch (error) {
        logToFile(`Error updating booking: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/admin/settings', auth, async (req, res) => {
  try {
    const settings = await Settings.findOneAndUpdate({}, req.body, { upsert: true, new: true });
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
    const bootId = Math.random().toString(36).substring(7).toUpperCase();
    const os = require('os');
    const interfaces = os.networkInterfaces();
    let localIp = 'localhost';
    
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name]) {
        if (iface.family === 'IPv4' && !iface.internal) {
          localIp = iface.address;
          break;
        }
      }
    }

    console.log(`\n**************************************************`);
    console.log(`🚀 BACKEND STARTED [ID: ${bootId}]`);
    console.log(`⏰ Time: ${new Date().toLocaleString()}`);
    console.log(`🔗 Local Interface: http://localhost:${PORT}`);
    console.log(`🌐 Network Access:  http://${localIp}:${PORT}`);
    console.log(`--------------------------------------------------`);
    console.log(`🌍 ENV DATA:`);
    console.log(`   - PORT: ${process.env.PORT}`);
    console.log(`   - DB: ${process.env.MONGODB_URI ? 'Connected (String present)' : 'MISSING'}`);
    console.log(`   - EMAIL_USER: ${process.env.EMAIL_USER}`);
    console.log(`   - EMAIL_PASS: ${process.env.EMAIL_PASS ? (process.env.EMAIL_PASS[0] + '****' + process.env.EMAIL_PASS.slice(-1)) : 'MISSING'}`);
    console.log(`   - JWT_SECRET: ${process.env.JWT_SECRET ? 'Present' : 'Default used'}`);
    console.log(`**************************************************\n`);
});
