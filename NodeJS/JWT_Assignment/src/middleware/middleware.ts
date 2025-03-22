import { NextFunction, Request, Response, RequestHandler } from "express";
import jwt, {JwtPayload} from "jsonwebtoken";
import { AuthRequest } from "../types/authRequest";
import { AuthService } from "../services/authService";

const secretKey= "9ad95cef1a211f4518452ac40a8ca10dac6b694c84fd83e0db24f382bb7f64a0"

const authService= new AuthService();

interface Decoded{
    email:string;
    iat:number;
    exp:number;
}

export const authenticateUser:RequestHandler= async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    if(
        !req.header("Authorization")||
        !req.header("Authorization")?.startsWith("Bearer")
    ){
        res.status(401).json({error:"Access denied. No token provided."})
        return;
    }

    const token = req.header("Authorization")?.split(" ")[1];
    try{
        const decoded= jwt.verify(token!, secretKey) as JwtPayload & Decoded;

        const freshUser= await authService.getUserByEmail(decoded.email);
        console.log(freshUser);

        (req as unknown as AuthRequest).user= freshUser;

        next();
    }catch(error){
        res.status(401).json({error:"Invalid token."});
    }
};
    
export const authorizeRole= (requiredRoles:string[]): RequestHandler=>{
    return (req, res, next)=>{
        const user= (req as unknown as AuthRequest).user;
        console.log(user);

        if(!user || !requiredRoles.includes(user.recordset[0].role)){
            res.status(403)
            .json({error:'Access denied. Insufficient permissions.'})
            return;
        }
        next();
    };
}

