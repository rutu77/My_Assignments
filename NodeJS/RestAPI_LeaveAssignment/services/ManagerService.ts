import {managerRepo} from "../repositories/ManagerRepository"
import { Leave } from "../models/Leave";

class ManagerService {
    async getPendingLeaves() {
        return await managerRepo.getPendingLeaves();
    }

    async approveLeave(leaveId: number) {
        return await managerRepo.updateLeaveStatus(leaveId, "Approved");
    }

    async rejectLeave(leaveId: number) {
        return await managerRepo.updateLeaveStatus(leaveId, "Rejected");
    }
}

export const managerService = new ManagerService();


