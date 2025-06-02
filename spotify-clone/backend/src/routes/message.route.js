import express from 'express'
import { getAllMessages } from '../controllers/messages.controller';
import { protectedRoute } from '../middleware/protectedRoute';

const route = express.Router()
route.post("/:id", protectedRoute ,getAllMessages)


export default route;