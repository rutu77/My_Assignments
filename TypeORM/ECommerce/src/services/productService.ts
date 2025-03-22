import { Brackets } from "typeorm";
import { Product } from "../entities/product";
import { productRepositoty } from "../repositories/productRepo";

export class ProductService {
    async createProduct(name:string,price:number):Promise<Product>{
        const product = productRepositoty.create({ name,price });
        return await productRepositoty.save(product);
    }

    async getProductById(productId:number){
        // return productRepositoty.findOne({ where:{id:productId}, relations:["orderItems"]});
        return await productRepositoty.createQueryBuilder("product").leftJoinAndSelect("product.orderItems","orderItems")
        .where("product.id=:productId",{productId})
        .getOne()
    }

    async getAllProducts():Promise<Product[]> {
        // return productRepositoty.find({ relations:["orderItems"]});
        return await productRepositoty.createQueryBuilder("product").leftJoinAndSelect("product.orderItems","orderItems")
        .getMany()
    }

    async getProductTotal(id:number){
        const total = await productRepositoty.createQueryBuilder("product")
        .select("SUM(product.price)", "total")
        .where(qb => {
            const subQuery = qb.subQuery()
                .select("orderItems.id")
                .from("OrderItemtbl_11", "orderItems")
                .where("orderItems.id = :id", { id })
                .getQuery();
            return `product.id IN (${subQuery})`;
        })
        .getRawOne();

        console.log(total.total)
        return total ? total.total : 0;
    }
}