import * as Model from '../models/products.model.js'
import {validationResult} from 'express-validator';

/*const products = [
  {
    id: 1,
    nombre: "Camiseta básica",
    precio: 4500,
    descripcion: "Camiseta de algodón 100% con corte clásico, disponible en varios colores.",
    categoria: ["ropa", "básicos"]
  },
  {
    id: 2,
    nombre: "Auriculares inalámbricos",
    precio: 15900,
    descripcion: "Auriculares con bluetooth 5.0 y hasta 8 horas de reproducción.",
    categoria: ["tecnología", "audio"]
  },
  {
    id: 3,
    nombre: "Mochila urbana",
    precio: 9800,
    descripcion: "Mochila resistente al agua con compartimento para notebook de 15 pulgadas.",
    categoria: ["accesorios", "urbanas"]
  },
  {
    id: 4,
    nombre: "Lámpara LED de escritorio",
    precio: 6200,
    descripcion: "Lámpara con brazo flexible, luz regulable y puerto USB para cargar dispositivos.",
    categoria: ["iluminación", "escritorio"]
  },
  {
    id: 5,
    nombre: "Mouse gamer RGB",
    precio: 8400,
    descripcion: "Mouse ergonómico con iluminación RGB y hasta 7200 DPI ajustables.",
    categoria: ["gaming", "tecnología"]
  },
  {
    id: 6,
    nombre: "Termo acero inoxidable 1L",
    precio: 7900,
    descripcion: "Termo de alta duración que mantiene la temperatura por hasta 12 horas.",
    categoria: ["hogar", "outdoor"]
  },
  {
    id: 7,
    nombre: "Teclado mecánico retroiluminado",
    precio: 18500,
    descripcion: "Teclado con switches blue, iluminación RGB y estructura metálica.",
    categoria: ["gaming", "tecnología"]
  },
  {
    id: 8,
    nombre: "Smartwatch deportivo",
    precio: 23000,
    descripcion: "Reloj inteligente con medición de ritmo cardíaco, pasos y resistencia al agua.",
    categoria: ["wearables", "deporte"]
  },
  {
    id: 9,
    nombre: "Parlante portátil bluetooth",
    precio: 11200,
    descripcion: "Parlante compacto con sonido estéreo, batería de 10 horas y entrada auxiliar.",
    categoria: ["audio", "portátiles"]
  },
  {
    id: 10,
    nombre: "Cargador rápido USB-C",
    precio: 3700,
    descripcion: "Cargador compatible con carga rápida 18W para dispositivos Android y iOS.",
    categoria: ["tecnología", "accesorios"]
  }
];*/

export const getAllProducts = async (req, res) => {
  const products = await Model.getAllProducts()
  res.json(products)
};

export const getProductById = async (req, res) => {
    const { id } = req.params

    const product = await Model.getProductById(id)

    if (!product) {
        res.status(404).json({ error: 'Error al encontrar el producto.' })
    }

    res.json(product)
};

export const postProduct = async (req, res) => {
  const result = validationResult(req); 

  if (!result.isEmpty()){
    return res.status(422).json({errores: result.array()})
  };

  const { nombre, precio, descripcion, stock } = req.body;
    
  const newProduct = await Model.postProduct({nombre, precio, descripcion, stock});
   
  res.status(201).json(newProduct);
};

export const putProduct = async (req, res) => {
  const result = validationResult(req)

  if(!result.isEmpty()){
      return res.status(422).json({errores: result.array()})
  }

  const { nombre, precio, descripcion, stock } = req.body
  const productId = req.params.id

  const product = await Model.putProduct(productId, {nombre, precio, descripcion, stock})

  if(!product){
    res.status(404).json({error: 'Error al modificar el producto'})
  }
    
  res.json(product)
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.id

  const deletedProduct = await Model.deleteProduct(productId)

  if (!deletedProduct) {
    return res.status(404).json({ error: 'El producto no fue encontrado' })
  }

  res.status(200).json(deletedProduct)
};