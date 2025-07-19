import { Router } from "express";
import { body } from 'express-validator';

const router = Router();

const rules = [
    body('email').escape().notEmpty().withMessage('El email es obligatorio.').bail().isEmail().withMessage('El campo email no es un email registrado'),
    body('password').escape().notEmpty().withMessage('La contraseña es obligatoria')
]

import { login } from "../controllers/auth.controller.js";

router.post('/login', rules, login);

export default router;