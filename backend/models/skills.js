const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    proficiency: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
    lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Skill', skillSchema);
