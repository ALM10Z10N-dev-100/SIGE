if (!token) return res.status(401).json({ mensaje: '🔒 No se proporcionó token. Acceso denegado.' });

try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.usuarioId = decoded.id;
  next();
} catch (error) {
  res.status(403).json({ mensaje: '⛔ Token inválido o expirado. Por favor inicia sesión nuevamente.' });
}

