import { Request, Response } from "express";
import { productService } from "../Services/productService";

export class ProductController {

    async createProduct(req: Request, res: Response): Promise<void> {
        try {
            const productData = req.body;
            const product = await productService.createProduct(productData);
            res.json(product);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    async getProductById(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const product = await productService.getProductById(id);
            res.json(product);
        } catch (error) {
            res.status(500).json({ message:error });
        }
    }

    async updateProduct(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const productData = req.body;
            await productService.updateProduct(id, productData);
            res.json({ message: "Product updated successfully" });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }


    async deleteProduct(req: Request, res: Response): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            await productService.deleteProduct(id);
            res.json({ message: "Product deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }

    async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await productService.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message:error });
        }
    }
}


export const productController = new ProductController();