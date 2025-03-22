import { Request, Response } from 'express';
import { ProductService } from '../services/productService';

const productService = new ProductService();

export class ProductController {
    // async create(req: Request, res: Response) {
    //     const productData = req.body;
    //     try {
    //       const result = await productService.createProduct(productData);
    //       res.status(201).json(result);
    //     } catch (error) {
    //       res.status(500).json({ error });
    //     }
    //   }

    async filters(req: Request, res: Response) {
        const { category, priceRange, brand, ratings, sort } = req.body;
        try {
        const products = await productService.getFilteredProducts(category, priceRange, brand, ratings, sort);
        res.json(products);
        } catch (error) {
        res.status(500).json({ error});
        }
    }
}