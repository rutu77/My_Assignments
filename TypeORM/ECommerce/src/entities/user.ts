import { Column, Entity, JoinColumn, OneToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";
import { Order } from "./order";

@Entity({name:"Usertbl_11"})
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    email:string

    @OneToOne(()=>Profile,(profile)=>profile.user)
    @JoinColumn({name:"profilefield"})
    profile:Profile

    @OneToMany(()=>Order,(order)=>order.user)
    orders:Order[]
}


