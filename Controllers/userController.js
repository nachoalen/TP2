import User from "../Models/User.js";

class UserController {
  createUser = async (req, res) => {
    try {
      const { userName, age,  mail, password } = req.body;
      const data = await User.create({ userName, age, mail, password });
      res.status(201).send({
        success: true,
        message: `Usuario ${data.userName} creado exitosamente`,
      });
    } catch (error) {
      res.status(400).send({ succces: false, message: error.message });
    }
  };

  readAllUser = async (req, res) => {
    try {
      const data = await User.findAll({
        attributes: ["userName", "age", "mail", "active"],
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
        attributes: ["userName", "age", "email", "active"],
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
      const { userName, age, email, active } = req.body;
      const data = await User.update(
        { userName, age, email, active },
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
}
  export default UserController;