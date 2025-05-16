import express from 'express'
import { signup } from '../controllers/auth.js';

const route = express.Router();

route.get('/log', signup)

export default route;