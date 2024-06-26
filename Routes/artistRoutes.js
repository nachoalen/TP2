import { Router } from "express";
import ArtistController from "../Controllers/artistController.js";

const artistController = new ArtistController();

const artistRoutes = Router();

artistRoutes.post("/", artistController.createArtist);
artistRoutes.get("/", artistController.readAllArtists);
artistRoutes.get("/:id", artistController.readArtistById);
artistRoutes.delete("/:id", artistController.deleteArtist);
artistRoutes.put("/:id", artistController.updateArtist);


export default artistRoutes;