import "reflect-metadata";
import {DataSource} from "typeorm"
import * as dotenv from "dotenv"
import {Product17} from "./Entity/product"

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mssql",
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    entities: [Product17],
    logging: true,
    synchronize: true,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
});