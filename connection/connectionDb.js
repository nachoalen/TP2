import { Sequelize } from "sequelize";
import {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
} from "../config/config.js";

const connectionDb = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  port: 3306,
});

try {
  await connectionDb.authenticate();
  console.log('Conexión a la base de datos realizada con éxito.');
} catch (error) {
  console.error('Error al intentar conectar a la base de datos.:', error);
}
export default connectionDb;
