const connectDB = require('./db');
const { login } = require('../controllers/auth.controller');

module.exports = async (req, res) => {
  await connectDB();
  if (req.method === 'POST') return login(req, res);
  res.status(405).json({ mensaje: 'Método no permitido' });
};