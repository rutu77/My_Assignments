import { OrderController } from "../controllers/orderController";
import express from "express"

const router= express.Router();
const orderController= new OrderController()

router.post('/create', (req, res) => orderController.createOrder(req, res));
router.get('/:id', (req, res) => orderController.getOrderById(req, res));
router.get('/getall/all', (req, res) => orderController.getAllOrders(req, res));


export {router as orderRoutes}