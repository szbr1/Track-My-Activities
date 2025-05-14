import { check } from "express-validator";
export const authValidator=  ()=>{
    return [
        check('username').trim().isAlpha().withMessage(`you can't add this❌123 & !@##$@$`),
        check('email').trim().notEmpty().isEmail().withMessage('Please add correct email'),
        check('password').trim().isStrongPassword().withMessage('type strong password')
    ]
}
