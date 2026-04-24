const connectDB = require('./db');
const mongoose = require('mongoose');

module.exports = async (req, res) => {
  await connectDB();

  const AlumnoPri = mongoose.models.AlumnoPri || mongoose.model(
    'AlumnoPri',
    new mongoose.Schema({}, { strict: false }),
    'alumnos_Pri' // ← nombre exacto de la colección
  );

  if (req.method === 'GET') {
    try {
      const alumnos = await AlumnoPri.find().limit(600);
      return res.status(200).json(alumnos);
    } catch (error) {
      return res.status(500).json({ mensaje: '❌ Error al obtener alumnos', error });
    }
  }

  res.status(405).json({ mensaje: 'Método no permitido' });
};