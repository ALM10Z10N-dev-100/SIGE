const connectDB = require('./db');
const mongoose = require('mongoose');

module.exports = async (req, res) => {
  await connectDB();

  const CalificacionPrim = mongoose.models.CalificacionPrim || mongoose.model(
    'CalificacionPrim',
    new mongoose.Schema({
      alumnoId: { type: String, required: true },
      bimestre: { type: String, required: true },
      materias: { type: mongoose.Schema.Types.Mixed, required: true },
      promedio: { type: Number, required: true },
      fecha: { type: Date, default: Date.now }
    }),
    'calificacionesPrim'
  );

  if (req.method === 'GET') {
    const registros = await CalificacionPrim.find().limit(600);
    return res.status(200).json(registros);
  }

  if (req.method === 'POST') {
    const { alumnoId, bimestre, materias, promedio } = req.body;

    if (!alumnoId || !bimestre || typeof materias !== 'object' || typeof promedio !== 'number') {
      return res.status(400).json({ mensaje: '⚠️ Datos incompletos o inválidos' });
    }

    const nueva = new CalificacionPrim({ alumnoId, bimestre, materias, promedio });
    await nueva.save();
    return res.status(201).json({ mensaje: '✅ Guardado con éxito', registro: nueva });
  }

  res.status(405).json({ mensaje: 'Método no permitido' });
};