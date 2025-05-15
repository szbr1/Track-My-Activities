import { check } from "express-validator";

export const todoValidator = ()=>{
    return [
        check('desc').exists().trim().notEmpty().withMessage('Please fill the description first')
    ]
}