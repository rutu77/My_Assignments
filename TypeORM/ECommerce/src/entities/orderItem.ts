import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order";
import { Product } from "./product";

@Entity({name:"OrderItemtbl_11"})
export class OrderItem{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>Order,(order)=>order.orderItems)
    order:Order;

    @ManyToOne(()=>Product,(product)=>product.orderItems)
    product:Product;

    @Column()
    quantity:number;

    @Column("decimal")
    price:number;
}