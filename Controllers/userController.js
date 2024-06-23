import User from "../Models/User.js";
import { generateToken, verifyToken } from "../utils/token.js";

class UserController {
  createUser = async (req, res) => {
    try {
      const { userName, age,  email, password } = req.body;
      const data = await User.create({ userName, age, email, password });
      res.status(201).send({
        success: true,
        message: `Usuario ${data.userName} creado exitosamente`,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  readAllUsers = async (req, res) => {
    try {
      const data = await User.findAll({
        attributes: ["userName", "age", "email", "isActive"],
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  readUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findAll({
        attributes: ["userName", "age", "email", "isActive"],
        where: { id },
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };
  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.destroy({
        where: { id },
      });
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };
  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { userName, age, email, isActive } = req.body;
      const data = await User.update(
        { userName, age, email, isActive },
        { where: { id } }
      );
      res.status(201).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const data = await User.findOne({ where: { email } });
      if (!data) throw new Error("No se pudo loggear por email");
      const validatePassword = await data.validatePassword(password);
      if (!validatePassword) throw new Error("No se pudo loggear por password");
      const payload = {
        id: data.id,
        name: data.name,
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.status(200).send({
        success: true,
        message: "usuario logueado con exito",
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  me = async (req, res) => {
    try {
     
      const { user } = req;
      console.log(`🚀 ~ UserController ~ me= ~ user:`, user)
      res.status(200).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

}
  export default UserController;