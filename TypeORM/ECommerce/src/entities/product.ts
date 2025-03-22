import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order";
import { OrderItem } from "./orderItem";



@Entity({name:"Producttbl_11"})
export class Product{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    price:number;

    @OneToMany(()=>OrderItem,(orderItem)=>orderItem.product)
    orderItems:OrderItem[];
}

