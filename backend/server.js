const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const cron = require('node-cron');
const { githubSyncCore } = require('./controllers/projectController');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected ✅'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);

// Base Route
app.get('/', (req, res) => {
    res.send('Self-Evolving Portfolio Backend Running ✅');
});

// ✅ Immediate GitHub Sync on Server Start
(async () => {
    console.log('🚀 Initial GitHub sync on server start...');
    await githubSyncCore(); // ✅ Correct pure function
    console.log('✅ Initial GitHub sync completed');
})();

// ✅ Scheduled GitHub Auto-Sync (Every 6 Hours)
cron.schedule('0 */6 * * *', async () => {
    console.log('🔄 Running scheduled GitHub sync...');
    await githubSyncCore(); // ✅ Correct pure function
    console.log('✅ GitHub sync completed via cron');
});

// Server Start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
