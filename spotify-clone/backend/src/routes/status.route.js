import express from 'express'
import { AllStatuses } from '../controllers/status.controller.js'
import { protectedRoute } from '../middleware/protectedRoute.js'
import { adminProtection } from '../middleware/adminProtection.js'

const route = express.Router()

route.get('/', protectedRoute, adminProtection,AllStatuses)

export default route