import { verifyToken } from "../utils/token.js";

export const validateLogin = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error("Log in requerido.");
    const { payload } = verifyToken(token);
    req.user = payload;
    next()
  } catch (error) {
    res.status(400).send({ succces: false, message: error.message });
  }
};