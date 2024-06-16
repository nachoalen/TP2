import { Router } from "express";
import userRoutes from "./userRoutes.js";
import songRoutes from "./songRoutes.js";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/song", songRoutes);

export default routes;