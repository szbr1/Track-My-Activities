import express from "express";
import { adminProtection } from "../middleware/adminProtection.js";
import { protectedRoute } from "../middleware/protectedRoute.js";
import {
  delteSong,
  song,
  album,
  delAlbum,
} from "../controllers/admin.controller.js";


const route = express.Router();
// route.use(protectedRoute, adminProtection);

route.post("/songs", song);
route.delete("/songs/:id", delteSong);

route.post("/album", album);
route.delete("/album/:id", delAlbum);

export default route;
