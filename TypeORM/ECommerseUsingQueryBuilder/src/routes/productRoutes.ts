import { Router } from 'express';
import { ProductController } from '../controllers/productController';

const router = Router();
const productController = new ProductController();

// router.post('/create',(req,res)=>productController.create(req,res))
router.post('/products', (req, res) => productController.filters(req, res));

export {router as productRoutes};