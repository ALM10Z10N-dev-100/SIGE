app.post('/api/calificacionesPrim', (req, res) => {
  const { alumnoId, bimestre, materias, promedio } = req.body;

  if (!alumnoId || !bimestre || !materias || typeof promedio !== 'number') {
    return res.status(400).json({ mensaje: 'Datos incompletos o inválidos' });
  }

  const registro = {
    alumnoId,
    tipo: 'Primaria',
    bimestre,
    materias,
    promedio,
    fecha: new Date().toISOString()
  };

  console.log('✅ Registro recibido:', registro);

  res.status(201).json({ mensaje: 'Calificaciones guardadas con éxito', registro });
});
