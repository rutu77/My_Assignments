import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity({name:"Profiletbl_11"})
export class Profile{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    bio:string

    @OneToOne(()=>User,(user)=>user.profile)
    user:User
}