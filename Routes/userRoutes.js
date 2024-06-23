import { Router } from "express";
import UserController from "../Controllers/userController.js";
import { validateLogin } from "../middleware/validateLogin.js";

const userController = new UserController();

const UserRoutes = Router();

UserRoutes.post("/", userController.createUser);
UserRoutes.post("/login", userController.login);
UserRoutes.use(validateLogin);

UserRoutes.get("/me", userController.me)

UserRoutes.post("/", userController.createUser);
UserRoutes.get("/", userController.readAllUsers);
UserRoutes.get("/:id", userController.readUserById);
UserRoutes.delete("/:id", userController.deleteUser);
UserRoutes.put("/:id", userController.updateUser);

export default UserRoutes;