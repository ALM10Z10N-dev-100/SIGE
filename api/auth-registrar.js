const connectDB = require('./db');
const { registrar } = require('../controllers/auth.controller');

module.exports = async (req, res) => {
  await connectDB();
  if (req.method === 'POST') return registrar(req, res);
  res.status(405).json({ mensaje: 'Método no permitido' });
};