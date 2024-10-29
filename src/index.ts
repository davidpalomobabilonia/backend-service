import  express, { Application } from "express";
import cors from "cors";
import { Appdatasource } from "./data-source";
import suaggerUi from "swagger-ui-express";

const app: Application = express();
const PORT = process.env.PORT ?? 3000;

// middleware
app.use(cors());
app.use(express.json());

// rutas 