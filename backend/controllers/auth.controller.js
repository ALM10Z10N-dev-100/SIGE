const Usuario = require('../models/Usuario');

exports.registrar = async (req, res) => {
  const { uid, telefono, nombre, apellidoPaterno, apellidoMaterno, rol } = req.body;

  try {
    const existe = await Usuario.findOne({ telefono });
    if (existe) return res.status(400).json({ mensaje: '📱 Teléfono ya registrado' });

    const nuevoUsuario = new Usuario({
      uid,
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      telefono,
      rol,
      confirmado: true
    });

    await nuevoUsuario.save();

    res.status(201).json({
      nombre: nuevoUsuario.nombre,
      rol: nuevoUsuario.rol,
      mensaje: `🎉 Usuario ${nuevoUsuario.nombre} registrado correctamente`
    });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
};

exports.login = async (req, res) => {
  const { telefono } = req.body;

  try {
    const usuario = await Usuario.findOne({ telefono });
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json({
      nombre: usuario.nombre,
      rol: usuario.rol,
      mensaje: `👋 ¡Bienvenido de nuevo, ${usuario.nombre}!`
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
};
