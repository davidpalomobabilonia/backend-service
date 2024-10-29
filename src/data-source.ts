import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";

export const Appdatasource = new DataSource({
    type: "sqlite",// tipos de base de datos 
    database:"database.sqlite",// nombre de bases de datos 
    synchronize: true,// soncronizacion activa
    logging: false,// sin inicio de sesion en la BD
    entities: [Product], // se agregan las entidades creadas 
    migrations: [],
    subscribers: []
});
