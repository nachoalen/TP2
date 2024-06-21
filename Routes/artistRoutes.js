import { Router } from "express";
import ArtistController from "../Controllers/artistController.js";

const artistController = new ArtistController();

const artistRoutes = Router();

artistRoutes.post("/", artistController.createArtist);
artistRoutes.get("/", artistController.readAllArtists);


export default artistRoutes;