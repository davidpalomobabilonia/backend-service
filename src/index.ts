import  express, { Application } from "express";
import cors from "cors";
import { Appdatasource } from "./data-source";
import router from "./routers/productRoutes";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger";

const app: Application = express();
const PORT = process.env.PORT ?? 3000;

// middleware
app.use(cors());
app.use(express.json());

// rutas 
app.use("/api/", router);// rutas de productos 

// documentacion swagger 
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// inicializacion de la base de datos 
Appdatasource.initialize()
. then(()=> {
    app.listen(()=> {
        console.log(`servidor corriendo en http://localhost:${PORT}\n`);
        console.log(`Endpoints:`);
        console.log(`API Products http://localhost: ${PORT}/api/products\n`);
        console.log(`Documentacion:`);
        console.log(`swagger en http://localhost:${PORT}/api-doc`);
    });
})
.catch((error)=> console.log(error ));