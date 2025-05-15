import express from 'express'
import { authLogin, authRegister } from '../Controllers/auth.routes.js';
import { SigninValidator, signUpValidator } from '../express-validator/authValidator.js';
import { todoValidator } from '../express-validator/todoValidator.js';
import { getTodo, todo } from '../Controllers/todo.routes.js';
import middleware from '../middleware/middleware.js';
import { updateTask } from '../Controllers/updateIncomplet.js';
import { deleteTodo } from '../Controllers/deleteTodo.js';

const route = express.Router()

route.post('/register',signUpValidator(), authRegister)
route.post('/login',SigninValidator(),authLogin )

//todos 
route.post('/todos',todoValidator(),middleware,todo)
route.get('/fetchtodos',middleware,getTodo)
route.post('/updatetask',middleware,updateTask)
route.post('/deletetodo' , middleware, deleteTodo)


export default route;