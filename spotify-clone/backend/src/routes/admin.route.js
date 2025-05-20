import express from 'express'
import { adminProtection } from '../middleware/adminProtection.js';
import { protectedRoute } from '../middleware/protectedRoute.js';
import { delteSong, song } from '../controllers/admin.controller.js';
import Song from '../models/song.model.js';
import Album from '../models/album.model.js';

const route = express.Router()

route.post("/songs",protectedRoute, adminProtection, song)
route.delete("/songs/:id",protectedRoute,adminProtection,delteSong)


export default route;