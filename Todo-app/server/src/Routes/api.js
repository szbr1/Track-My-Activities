import express from 'express'
import { authRegister } from '../Controllers/auth.routes.js';
import { authValidator } from '../express-validator/authValidator.js';

const route = express.Router()

route.post('/register',authValidator(), authRegister)

export default route;