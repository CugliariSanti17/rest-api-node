import {Router} from 'express';
import { getAllProducts, getProductById, postProduct, putProduct, deleteProduct } from '../controllers/products.controller.js';
import { body } from 'express-validator';

const router = Router()

const rules = [
    body('nombre').escape().notEmpty().withMessage('El nombre es obligatorio').bail().isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    body('precio').escape().notEmpty().withMessage('El precio es obligatorio').bail().isNumeric().withMessage('El precio debe ser un número').bail().isFloat({min: 0.00001}).withMessage('El precio debe ser positivo o mayor a 0'),
    body('descripcion').escape().notEmpty().withMessage('La descripcion es obligatorio').bail().isLength({min: 10}).withMessage('La descripcion debe tener al menos 10 caracteres'),
    body('stock').escape().notEmpty().withMessage('El stock es obligatorio').bail().isNumeric().withMessage('El stock debe ser un numero').bail().isFloat({min: 0.00001}).withMessage('El stock debe ser positivo o mayor a 0')
]

import { auth } from '../middlewares/auth.middleware.js';

router.get('/products', auth, getAllProducts);

router.get('/products/:id', auth, getProductById);

router.post('/products', auth, rules, postProduct);

router.put('/products/:id', auth, rules, putProduct);

router.delete('/products/:id', auth, deleteProduct);

export default router;