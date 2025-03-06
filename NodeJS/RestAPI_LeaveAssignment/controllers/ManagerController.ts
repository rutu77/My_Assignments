import { Request, Response } from "express";
import { managerService } from "../services/ManagerService";

class ManagerController {
    async abc(req: Request, res:Response){
        console.log("jjjj")
        const leaves = await managerService.getPendingLeaves();
        // res.json({ data: leaves });
        res.json(leaves.recordset);
    }

    async approveLeave(req: Request, res: Response) {
        await managerService.approveLeave(parseInt(req.params.leaveid));
        res.json({ message: "Leave approved" });
    }

    async rejectLeave(req: Request, res: Response) {
        await managerService.rejectLeave(parseInt(req.params.leaveid));
        res.json({ message: "Leave rejected" });
    }
}


export const managerController = new ManagerController();
