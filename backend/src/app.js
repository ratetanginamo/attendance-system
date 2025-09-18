const app = require('./config/server');
const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);

module.exports = app;
