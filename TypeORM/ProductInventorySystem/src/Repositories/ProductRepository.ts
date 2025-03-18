import { AppDataSource } from "../database";
import { Product17 } from "../Entity/product";
export const productRepository = AppDataSource.getRepository(Product17);
