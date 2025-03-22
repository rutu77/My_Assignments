import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IResult } from "mssql";
import userRepo from "../repositories/userRepo"
import {User} from "../models/userModel";


const SECRET_KEY= "9ad95cef1a211f4518452ac40a8ca10dac6b694c84fd83e0db24f382bb7f64a0"

class AuthService{
    async registerUser(name:string,email:string,password:string,role:string){
        const hashedPassword = await bcrypt.hash(password,10)
        return await userRepo.createUser(name, email, hashedPassword, role);
    }

    async loginUser(email:string, password:string){
        const user: IResult<User>= await userRepo.getUserByEmail(email);
        if(!user) throw new Error("User not found");
        const isPasswordValid= await bcrypt.compare(
            password,
            user.recordset[0].password
        );

        if(!isPasswordValid) throw new Error("Invalid Credentials");
        const token = jwt.sign({email:user.recordset[0].email}, SECRET_KEY,{
            expiresIn:"1h",
        })
        return {user,token};
    }
        async getUserByEmail(email:string){
            return await userRepo.getUserByEmail(email);
        }
    }

export {AuthService}