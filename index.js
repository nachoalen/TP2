import express from "express";
import connectionDb from "./connection/connectionDb.js";
import routes from "./Routes/routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/app", routes);

await connectionDb.sync({force:false})

app.listen(8080, () => {
    console.log(`🚀 Servidor abierto`);
  });