import express from "express";
import connectionDb from "./connection/connectionDb.js";
import routes from "./Routes/routes.js";
import cookieParser from "cookie-parser";
import { SERVER_PORT } from "./config/config.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/app", routes);

await connectionDb.sync({force:false})

app.listen(SERVER_PORT, () => {
    console.log(`🚀 Servidor abierto`);
  });