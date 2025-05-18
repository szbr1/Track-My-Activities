import express from 'express'
import { signup, signin, signout, updateProfile, authCheck } from '../controllers/auth.js';
import authMiddleware from '../middleware/middleware.js';

const route = express.Router();

route.post('/signup', signup)
route.post('/signin', signin)
route.post('/signout', signout)
route.post('/profile',authMiddleware, updateProfile)
route.post('/authCheck',authMiddleware, authCheck)

export default route;