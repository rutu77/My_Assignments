import {UserService} from "../services/userService"
import {Router,Request,Response} from "express"

const userService= new UserService()
export class UserController{
    createUser= async(req:Request,res:Response)=>{
        const {name,email,bio}= req.body;
        const user= await userService.createUser(name,email,bio)
        res.status(201).json(user)
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        const user = await userService.getUserById(Number(req.params.id));
        res.status(201).json(user);
    }

    async getAllUsers(req: Request, res: Response): Promise<void> {
        const users = await userService.getAllUsers();
        res.status(201).json(users);
    }

    async DemoWhereToWhere(req: Request, res: Response): Promise<void> {
        await userService.DemoWhereToWhere();
        res.status(201).json("Where Wokrs!");
    }

}