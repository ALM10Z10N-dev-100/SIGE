const connectDB = require('./db');
const { guardarCalificacion, obtenerCalificaciones } = require('../controllers/calificacionesController');

module.exports = async (req, res) => {
  await connectDB();

  if (req.method === 'GET') {
    return obtenerCalificaciones(req, res);
  }

  if (req.method === 'POST') {
    return guardarCalificacion(req, res);
  }

  res.status(405).json({ mensaje: 'Método no permitido' });
};