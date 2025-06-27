import {Router} from 'express';
import { getAllProducts, getProductById, postProduct, putProduct, deleteProduct } from '../controllers/products.controller.js';

const route = Router()

route.get('/products', getAllProducts)

route.get('/products/:id', getProductById)

route.post('/products', postProduct)

route.put('/products/:id', putProduct)

route.delete('/products/:id', deleteProduct)

export default route