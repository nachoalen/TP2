import { Router } from "express";
import SongController from "../Controllers/songController.js";

const songController = new SongController();

const songRoutes = Router();

songRoutes.post("/", songController.createSong);
songRoutes.get("/", songController.readAllSongs);
songRoutes.get("/:id", songController.readSongById);


export default songRoutes;