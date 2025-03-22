import { Request, Response } from "express";
import { AuthService } from "../services/authService";

const authService = new AuthService();

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;
      await authService.registerUser(name, email, password, role);
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error});
    }
  }
  
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const data = await authService.loginUser(email, password);
      res.status(200).json({ message: "Login Successfull", ...data });
    } catch (error) {
      res.status(500).json({ error});
  }
}
}

export { AuthController };
