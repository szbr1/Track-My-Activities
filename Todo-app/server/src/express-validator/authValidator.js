import { check } from "express-validator";

export const signUpValidator=  ()=>{
    return [
        check('username').trim().isAlpha().withMessage(`you can't add this❌123 & !@##$@$`),
        check('email').trim().notEmpty().isEmail().withMessage('Please add correct email'),
        check('password').trim().isStrongPassword().withMessage('type strong password')
    ]
}

export const SigninValidator = ()=>{
    return [
        check('email').exists().isEmail().withMessage("Please enter correct Email."),
        check('password').trim().isStrongPassword().withMessage("at least add one special character and number")
    ]
}