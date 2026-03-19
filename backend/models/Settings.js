const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    openingTime: { type: String, default: '08:00' },
    closingTime: { type: String, default: '18:00' },
    slotDuration: { type: Number, default: 60 }, // minutes
    workingDays: { type: [Number], default: [1, 2, 3, 4, 5, 6, 7] } // 1-7 (Mon-Sun)
});

module.exports = mongoose.model('Settings', settingsSchema);
