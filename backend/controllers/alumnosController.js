const Alumno = require('../models/Alumno');

exports.obtenerAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (err) {
    res.status(500).json({ detalle: err.message });
  }
};