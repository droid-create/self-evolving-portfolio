const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    repoLink: { type: String, required: true },
    deployedLink: { type: String },
    techStack: { type: [String] }, // Array of technologies
    lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);
