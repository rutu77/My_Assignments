import { leaveRepo } from "../repositories/LeaveRepository";
import { Leave } from "../models/Leave";

class LeaveService {
    async applyLeave(leaveData: Leave) {
        if (!leaveData.start_date || !leaveData.end_date || !leaveData.leave_type) {
            throw new Error("All fields are required");
        }
        await leaveRepo.createLeave(leaveData);
    }

    async getLeaveHistory(employeeId: number) {
        return await leaveRepo.getLeaveHistory(employeeId);
    }

}

export const leaveService = new LeaveService();


