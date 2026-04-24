const mongoose = require('mongoose');

const evaluacionSchema = new mongoose.Schema({
  bimestre: String,
  Socioemocional: String,
  Lenguaje: String,
  PensamientoMatematico: String,
  Motricidad: String
});

const calificacionSchema = new mongoose.Schema({
  alumnoId: String,
  evaluacion: evaluacionSchema,
  nivelResumen: String
});

module.exports = mongoose.model('Calificacion', calificacionSchema);