import { AppDataSource } from "../config/database";
import { OrderItem } from "../entities/orderItem";


export const orderItemRepository = AppDataSource.getRepository(OrderItem);
