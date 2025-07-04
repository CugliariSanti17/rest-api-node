import {Router} from 'express';
import { getAllProducts, getProductById, postProduct, putProduct, deleteProduct } from '../controllers/products.controller.js';
import { body } from 'express-validator';

const router = Router()

const rules = [
    body('nombre').escape().notEmpty().withMessage('El nombre es obligatorio').bail().isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    body('precio').escape().notEmpty().withMessage('El precio es obligatorio').bail().isNumeric().withMessage('El precio debe ser un número').bail().isFloat({min: 0.00001}).withMessage('El precio debe ser positivo o mayor a 0'),
    body('descripcion').escape().notEmpty().withMessage('La descripcion es obligatorio').bail().isLength({min: 10}).withMessage('La descripcion debe tener al menos 10 caracteres')
]

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products', rules, postProduct);

router.put('/products/:id', rules, putProduct);

router.delete('/products/:id', deleteProduct);

export default router;