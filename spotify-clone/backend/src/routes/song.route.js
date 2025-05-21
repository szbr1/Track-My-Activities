import express from 'express'
import { protectedRoute } from '../middleware/protectedRoute.js'
import { adminProtection } from '../middleware/adminProtection.js'
import { featuredSongs, getAllSongs, getOneFunctionData, trending } from '../controllers/song.controller.js'

const route = express.Router()
route.get("/",protectedRoute, adminProtection, getAllSongs)
route.get("/featured", featuredSongs)
route.get("/made-for-you", getOneFunctionData)
route.get("/trending", trending)


export default route;