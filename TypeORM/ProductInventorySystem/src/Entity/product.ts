import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";

@Entity()
export class Product17 {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 256 })
    uname!: string;

    @Column({ type: 'varchar', length: 256 })
    category!: string;

    @Column({ type: 'int' })
    price!: number;

    @Column({ type: 'int' })
    stock!: number;
}