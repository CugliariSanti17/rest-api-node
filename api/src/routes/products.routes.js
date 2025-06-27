import {Router} from 'express';
import { getAllProducts, getProductById, postProduct, putProduct, deleteProduct } from '../controllers/products.controller.js';

const router = Router()

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products', postProduct);

router.put('/products/:id', putProduct);

router.delete('/products/:id', deleteProduct);

export default router;