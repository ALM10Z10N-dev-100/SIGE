const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  edad: Number,
  genero: String,
  grupo: String
});

module.exports = mongoose.model('Alumno', alumnoSchema);