import { Order } from "../entities/order";
import {orderRepository } from "../repositories/orderRepo";
import { userRepository } from "../repositories/userRepo";



export class OrderService {

    async createOrder(userId: number, orderItems: any[]){
        const user=await userRepository.findOne({ where: { id: userId } });
        if (!user) throw new Error("User not found");
        const order = orderRepository.create({ user,orderItems });
        return await orderRepository.save(order);
    }

    async getOrderById(orderId: number) {
        // return orderRepository.findOne({ where:{ id:orderId }, relations: ["user","orderItems"] });
        return await orderRepository.createQueryBuilder("order").leftJoinAndSelect("order.user", "user")
        .leftJoinAndSelect("order.orderItems", "orderItems")
        .where("order.id = :orderId", { orderId })
        .getOne();
    }

    async getAllOrders(){
        // return orderRepository.find({relations: ["user","orderItems"] });
        return await orderRepository.createQueryBuilder("order").leftJoinAndSelect("order.user","user")
        .leftJoinAndSelect("order.orderItems","orderItems")
        .getMany()
    }



}



