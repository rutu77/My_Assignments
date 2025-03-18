import { Router } from "express";
import { productController } from "../Controllers/productController";

const router = Router();

router.post("/products", (req, res) => productController.createProduct(req, res));
router.get("/products/:id", (req, res) => productController.getProductById(req, res));
router.put("/products/:id", (req, res) => productController.updateProduct(req, res));
router.delete("/products/:id", (req, res) => productController.deleteProduct(req, res));
router.get("/products", (req, res) => productController.getAllProducts(req, res));

export default router;
