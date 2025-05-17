import express from 'express'
import authMiddleware from '../middleware/middleware.js'
import {send, chat, Sidebar } from '../controllers/message.js'

const route = express.Router()

route.post('/users', authMiddleware, Sidebar)
route.post('/:id', authMiddleware, chat)
route.post("/send/:id",authMiddleware,send)

export default route