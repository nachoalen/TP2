import { Router } from "express";
import userRoutes from "./userRoutes.js";
import songRoutes from "./songRoutes.js";
import artistRoutes from "./artistRoutes.js";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/song", songRoutes);
routes.use("/artist", artistRoutes)

export default routes;