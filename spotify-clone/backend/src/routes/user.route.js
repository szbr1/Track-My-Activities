import express from 'express'
import { allUsers } from '../controllers/users.controller.js';
import { protectedRoute } from '../middleware/protectedRoute.js';

const route = express.Router()

route.get('/', allUsers)


export default route;