import { Request, Response } from "express";
import { leaveService } from "../services/LeaveService";

class LeaveController {
    async applyLeave(req: Request, res: Response) {
        try {
            await leaveService.applyLeave(req.body);
            res.status(201).json({ message: "Leave applied!" });
        } catch (err:any) {
            res.status(400).json({ error: "Error Occurred", details: err.message });
        }
    }
    
    async getLeaveHistory(req: Request, res: Response) {
        const employee_id = parseInt(req.params.employeeId);
        const leaves = await leaveService.getLeaveHistory(employee_id);
        console.log("Leave History: ",leaves.recordset)
        res.json(leaves.recordset);
    }
}

export const leaveController = new LeaveController();
