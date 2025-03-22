import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:"Producttbl_1147"})
export class Product{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    category: string

    @Column()
    rating:string

    @Column()
    brand:string

    @Column()
    price: number

    @CreateDateColumn()
    createdAt!:Date

    @Column()
    sales:string
}