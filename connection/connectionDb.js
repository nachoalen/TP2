import { Sequelize } from "sequelize";

const connectionDb = new Sequelize("tpfinalalen", "root", "nachomiercoles", {
  host: "localhost",
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
