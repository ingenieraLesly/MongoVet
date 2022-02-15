import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import routes from "routes";
import db from "./db/db.js";
import petRoutes from "./routes/petRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/pet", petRoutes);


app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: ", process.env.PORT)
);

db.dbConnection(); //habiendo importado el modulo db que tiene además exportada la función dbConnection, establecemos la conexión y regresará los mensajes del estado de conexión como los indicamos dentro de la función dbConnection en el módulo db.js