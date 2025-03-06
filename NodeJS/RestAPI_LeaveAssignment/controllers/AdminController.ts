import { Request, Response } from "express";
import { adminService } from "../services/AdminService";

class AdminController {
    async getLeaveReport(req: Request, res: Response) {
        const leaves = await adminService.getLeaveReport();
        res.json(leaves.recordset);
    }
}

export const adminController = new AdminController();
