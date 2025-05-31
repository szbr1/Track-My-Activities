import express from 'express'
import { albumById, getAllAlbum } from '../controllers/album.controller.js';

const route = express.Router()
route.get("/" , getAllAlbum )
route.get("/:id",albumById)


export default route;