import { productRepository } from "../Repositories/ProductRepository";
import { Product17 } from "../Entity/product";

export class ProductService {
    async createProduct(productData: Partial<Product17>): Promise<Product17> {
        const product = productRepository.create(productData);
        return await productRepository.save(product);
    }

    async getProductById(id: number): Promise<Product17 | null> {
        return await productRepository.findOneBy({ id });
    }

    async updateProduct(id: number, productdata: Partial<Product17>): Promise<void> {
        await productRepository.update(id, productdata);
    }


    async deleteProduct(id: number): Promise<void> {
        await productRepository.delete(id);
    }

    async getAllProducts(): Promise<Product17[]> {
        return await productRepository.find();
    }
}

export const productService = new ProductService();