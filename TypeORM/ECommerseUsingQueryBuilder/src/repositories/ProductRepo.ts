import { AppDataSource } from "../config/database";
import { Product } from "../models/product";

export const productRepository= AppDataSource.getRepository(Product)

// import { getRepository } from "typeorm";
// import { Product } from "../models/product";
// import { AppDataSource } from "../config/database";

// enum sortBy{
//     ASC="ASC",
//     DESC="DESC"
// }

// export class CategoryRepository{
//     async createCategory(category:Partial<Category>){
//         return await AppDataSource.getRepository(Category)
//         .createQueryBuilder("category")
//         .insert()
//         .values(category)
//         .execute()
//     }

//     async SortByPrice(SortByPrice:sortBy){
//         return await AppDataSource.getRepository(Category)
//         .createQueryBuilder("category")
//         .orderBy("category.price", SortByPrice)
//         .getMany();
//     }
// }