import {Router} from 'express';
import { getAllProducts, getProductById, postProduct, putProduct, deleteProduct } from '../controllers/products.controller.js';
import { body } from 'express-validator';

const router = Router()

//const rules = [
//    body('nombre').notEmpty().withMessage('El campo Nombre es obligatorio'),
//    body('precio').notEmpty().withMessage('El campo Precio es obligatorio'),
//    body('descripcion').notEmpty.isLength({min: 10}).withMessage('El campo descripcion debe tener al menos 10 caracteres')
//]

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products', postProduct);

router.put('/products/:id', putProduct);

router.delete('/products/:id', deleteProduct);

export default router;