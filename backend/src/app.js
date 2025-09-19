// backend/src/app.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
// add admin routes
const adminRoutes = require('./routes/adminRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// existing routes
app.use('/api/auth', authRoutes);

// new admin route
app.use('/api/admin', adminRoutes);

module.exports = app;
