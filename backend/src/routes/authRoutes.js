const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/authController');

/**
 * POST /api/auth
 * Body must include:
 *  { type: 'login' | 'register', ...otherFields }
 */
router.post('/', (req, res) => {
  const { type } = req.body;
  if (type === 'login') return loginUser(req, res);
  if (type === 'register') return registerUser(req, res);
  return res.status(400).json({ msg: 'Invalid type. Use login or register.' });
});

module.exports = router;
