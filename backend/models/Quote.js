const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, required: true },
    customerType: { type: String, required: true },
    message: { type: String },
    status: { type: String, default: 'new' }, // new, contacted, closed
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quote', quoteSchema);
