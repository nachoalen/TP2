import express from "express";
import connectionDb from "./connectionDb/connectionDb";

const app = express();

app.use(express.json());

await connectionDb.sync({force:false})

app.listen(8080, () => {
    console.log(`🚀 Servidor abierto`);
  });