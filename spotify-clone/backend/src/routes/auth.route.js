import express from 'express'
import { authUser } from '../controllers/auth.controller.js'

const route = express.Router()

route.post('/callback', authUser)

export default route