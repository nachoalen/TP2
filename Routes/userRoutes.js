import { Router } from "express";
import UserController from "../Controllers/UserController.js";

const userController = new UserController();

const UserRoutes = Router();

UserRoutes.post("/", userController.createUser);
UserRoutes.get("/", userController.readAllUsers);
UserRoutes.get("/:id", userController.readUserById);
UserRoutes.delete("/:id", userController.deleteUser);
UserRoutes.put("/:id", userController.updateUser);

export default UserRoutes;