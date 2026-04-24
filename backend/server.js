require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/alumnos', require('./routes/alumnos'));
app.use('/api/calificaciones', require('./routes/calificaciones'));
app.use('/api/calificacionesPrim', require('./routes/calificacionesPrim.routes'));
app.use('/api/alumnos_Pri', require('./routes/alumnosPri.routes'));
app.use('/api/auth', require('./routes/auth.routes'));


app.listen(5000, () => console.log('🚀 Servidor corriendo en puerto 5000'));