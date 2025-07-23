import * as Model from '../models/products.model.js'
import {validationResult} from 'express-validator';

export const getAllProducts = async (req, res) => {
  const { category } = req.query

  const products = await Model.getAllProducts()

  if (category){
    const productsFiltered = products.filter((product) =>{
      return product.categoria.includes(category)
    });
    
    return res.status(200).json(productsFiltered)
  }

  res.json(products)
};

export const searchProductByName = async (req, res) =>{
  const { name } = req.query

  const products = await Model.getAllProducts()

  if (!name) {
  return res.status(400).json({ error: "Parámetro 'name' requerido" });
}

  const productsFiltered = products.filter((product) =>{
    return product.nombre.toLowerCase().includes(name.toLowerCase())
  });
  
  res.json(productsFiltered)
};

export const getProductById = async (req, res) => {
    const { id } = req.params

    const product = await Model.getProductById(id)

    if (!product) {
      return res.status(404).json({ error: 'Error al encontrar el producto.' })
    }

    res.json(product)
};

export const postProduct = async (req, res) => {
  const result = validationResult(req); 

  if (!result.isEmpty()){
    return res.status(422).json({errores: result.array()})
  };

  const { nombre, precio, descripcion, stock, categoria } = req.body;
    
  const newProduct = await Model.postProduct({nombre, precio, descripcion, stock, categoria});
   
  res.status(201).json(newProduct);
};

export const putProduct = async (req, res) => {
  const result = validationResult(req)

  if(!result.isEmpty()){
      return res.status(422).json({errores: result.array()})
  }

  const { nombre, precio, descripcion, stock, categoria } = req.body
  const productId = req.params.id

  const product = await Model.putProduct(productId, {nombre, precio, descripcion, stock, categoria})

  if(!product){
    return res.status(404).json({error: 'Error al modificar el producto'})
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