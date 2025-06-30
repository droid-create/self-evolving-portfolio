const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To handle JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected ✅'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Route Registration
const projectRoutes = require('./routes/projectRoutes');
app.use('/api/projects', projectRoutes);

// Base Route
app.get('/', (req, res) => {
    res.send('Self-Evolving Portfolio Backend Running ✅');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
