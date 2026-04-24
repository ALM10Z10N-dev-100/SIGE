const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  apellidoPaterno: { type: String, required: true },
  apellidoMaterno: { type: String, required: true },
  telefono: { type: String, required: true, unique: true },
  rol: { type: String, enum: ['alumno', 'maestro'], required: true },
  confirmado: { type: Boolean, default: true }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
