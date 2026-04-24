const connectDB = require('./db');
const { obtenerAlumnos } = require('../controllers/alumnosController');

module.exports = async (req, res) => {
  await connectDB();

  if (req.method === 'GET') {
    return obtenerAlumnos(req, res);
  }

  res.status(405).json({ mensaje: 'Método no permitido' });
};