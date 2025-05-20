import express from 'express'
import { authUserCallback } from '../controllers/users.js';

const route = express.Router()
route.post("/callback" ,authUserCallback )


export default route;