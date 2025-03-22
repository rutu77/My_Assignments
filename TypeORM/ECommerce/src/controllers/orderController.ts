import { Request, Response } from 'express';
import { OrderService } from '../services/orderService'; 
import { Order } from '../entities/order';

const orderService = new OrderService();

export class OrderController {

    async createOrder(req: Request, res: Response): Promise<void> {
        const { userId, orderItems } = req.body;
        const order = await orderService.createOrder(userId, orderItems);
        res.json(order);
    }

    async getOrderById(req: Request, res: Response): Promise<void> {
        const order = await orderService.getOrderById(Number( req.params.id));
        res.json(order);
    }

    async getAllOrders(req: Request, res: Response): Promise<void> {
        const orders = await orderService.getAllOrders();
        res.json(orders);
    }
}