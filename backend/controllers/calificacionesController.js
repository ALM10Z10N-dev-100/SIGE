const Calificacion = require('../models/Calificacion');

exports.guardarCalificacion = async (req, res) => {
  try {
    const nueva = new Calificacion(req.body);
    await nueva.save();
    res.status(201).json({ mensaje: '✅ Calificación guardada' });
  } catch (err) {
    res.status(500).json({ detalle: err.message });
  }
};

exports.obtenerCalificaciones = async (req, res) => {
  try {
    const datos = await Calificacion.find();
    res.json(datos);
  } catch (err) {
    res.status(500).json({ detalle: err.message });
  }
};