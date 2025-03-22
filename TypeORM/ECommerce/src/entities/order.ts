import {Entity, OneToMany, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "./user";
import { Product } from "./product";
import { OrderItem } from "./orderItem";

@Entity({name:"Ordertbl_11"})
export class Order{
    @PrimaryGeneratedColumn()
    id:number

    @OneToMany(()=>OrderItem,(orderItem)=>orderItem.order, {cascade:true})
    orderItems:OrderItem[];

    @ManyToOne(()=>User,(user)=>user.orders)
    user:User;
}