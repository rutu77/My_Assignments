import { ProductController } from "../controllers/productController";
import express from "express"

const router= express.Router();
const productController= new ProductController()

router.post('/create', (req, res) => productController.createProduct(req, res));
router.get('/:id', (req, res) => productController.getProductById(req, res));
router.get('/getall/all', (req, res) => productController.getAllProducts(req, res));
router.get('/total/:id', (req, res) => productController.getProductTotal(req, res));



export {router as productRoutes}