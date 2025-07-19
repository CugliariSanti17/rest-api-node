import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

const default_user = {
    id: 1,
    email: 'user@gmail.com',
    password: 'talentotech'
}

export const login = (req, res) =>{
    const result = validationResult(req);

    if (!result.isEmpty()){
        return res.status(422).json({errores: result.array()})
    }
    
    const { email, password } = req.body

    const user = {id: 1}

    if (email.toLowerCase() == default_user.email && password.toLowerCase() == default_user.password){
        const payload = { user };
        const expiration = { expiresIn: '1h' }

        const token = jwt.sign(payload, process.env.JWT_SECRET, expiration);

        res.json({token})
    }else{
        return res.sendStatus(401);
    }
}
