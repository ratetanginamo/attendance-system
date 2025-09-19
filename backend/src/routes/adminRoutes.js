// backend/src/routes/adminRoutes.js
const express = require('express');
const { protect, isAdmin } = require('../middleware/auth');
const router = express.Router();

// Example admin-only route
router.get('/dashboard', protect, isAdmin, async (req, res) => {
  // fetch whatever data admin needs
  res.json({ message: 'Welcome to the admin dashboard' });
});

module.exports = router;
