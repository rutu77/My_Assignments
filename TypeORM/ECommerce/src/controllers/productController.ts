import { Request, Response } from 'express';
import { ProductService } from '../services/productService';
import { Product } from '../entities/product';

const productService = new ProductService();

export class ProductController {

    async createProduct(req: Request, res: Response): Promise<void> {
        const { name, price } = req.body;
        const product = await productService.createProduct(name, price);
        res.json(product);
    }

    async getProductById(req: Request, res: Response): Promise<void> {
        const product = await productService.getProductById(Number(req.params.id));
        res.json(product);
    }

    async getAllProducts(req: Request, res: Response): Promise<void> {
        const products = await productService.getAllProducts();
        res.json(products);
    }

    async getProductTotal(req: Request, res: Response): Promise<void> {
        const total = await productService.getProductTotal(Number(req.params.id));
        res.json(total);
    }

}