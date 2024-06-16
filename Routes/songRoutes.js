import { Router } from "express";
import SongController from "../Controllers/SongController.js";

const songController = new SongController();

const songRoutes = Router();

songRoutes.post("/", songController.createSong);
songRoutes.get("/", songController.readAllSongs);


export default songRoutes;