import { AppDataSource } from "../config/database";
import { Order } from "../entities/order";

export const orderRepository= AppDataSource.getRepository(Order)

