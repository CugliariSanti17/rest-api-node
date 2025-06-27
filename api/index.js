import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.routes.js';

const app = express();

//Configuración Básica
app.use(express.json());
app.use(cors());


//Rutas
app.get('/', (req, res) =>{
  res.send('Bienvenido a la API REST')
});

app.use('/api', productsRouter);

//Middleware para manejo de errores
app.use('/', (req, res) =>{
  res.status(404).json({error: `Recurso no encontrado`})
});


const PORT = 3000;

app.listen(PORT, () =>{
  console.log(`http://localhost:${PORT}`)
});