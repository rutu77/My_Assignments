import { Brackets, DataSource } from "typeorm";
import { Profile } from "../entities/profile";
import { User } from "../entities/user";
import {  profileRepository } from "../repositories/profileRepo";
import { userRepository } from "../repositories/userRepo";
import { AppDataSource } from "../config/database";
import { profile } from "console";


export class UserService{
    async createUser(name:string,email:string, bio:string){
        // const profile= profileRepository.create({bio});
        // await profileRepository.save(profile)
        // const user= userRepository.create({name,email,profile});
        // return await userRepository.save(user)


        const profile = await profileRepository.createQueryBuilder("profile")
            .insert()
            .into("Profiletbl_11")
            .values({ bio })
            .execute()
    
        const user = await userRepository.createQueryBuilder("user")
            .insert()
            .into("Usertbl_11")
            .values({ name, email, profile :profile.identifiers[0].id})
            .execute()
    
        return  user;
    }

    
    async getUserById(userId: number){
        // return userRepository.findOne({ where: { id: userId }, relations: ["profile", "orders"] });
        return await userRepository.createQueryBuilder("user").leftJoinAndSelect("user.profile","profile")
        .leftJoinAndSelect("user.orders","orders")
        .where("user.id = :userId", { userId })
        .getOne()
    }

    async getAllUsers(){
            // return userRepository.find({ relations: ["profile", "orders"] });
            return await userRepository.createQueryBuilder("user").leftJoinAndSelect("user.profile","profile")
            .leftJoinAndSelect("user.orders","orders")
            .getMany()
    }

    async DemoWhereToWhere(){
        return await userRepository.createQueryBuilder("user")
        .where("user.name=:name",{name:"Rutu"})
        .andWhere(new Brackets(qb=>{
            qb.where("user.email = :email",{email:"rutu@gmail.com"})
            .orWhere('user.email=:email',{email:"rutu@yahoo.com"});
        }))
        .getOne()
    }

    async HandleTransaction(){
        await AppDataSource.transaction(async(manager)=>{
            const user= await manager.save(User,{name:"Rutuja"})
            await manager.save(Profile,{userId:user.id,bio:user.profile.bio})
        })
    }

}

