import { AppDataSource } from "../config/database";
import { Product } from "../entities/product";

export const productRepositoty= AppDataSource.getRepository(Product)
                 