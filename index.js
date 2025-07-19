import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

//Configuración Básica

app.use(express.json());
app.use(cors());

//Rutas

app.get('/', (req, res) =>{
  res.send('Bienvenido a la API REST')
});

import productsRouter from './src/routes/products.routes.js';
app.use('/api', productsRouter);

import authRouter from './src/routes/auth.routes.js'
app.use('/api', authRouter);

//Middleware para manejo de errores
app.use('/', (req, res) =>{
  res.status(404).json({error: `Recurso no encontrado`})
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>{
  console.log(`http://localhost:${PORT}`)
});