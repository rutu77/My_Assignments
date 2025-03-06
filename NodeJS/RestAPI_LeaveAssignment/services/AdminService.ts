
import { Leave } from "../models/Leave";
import { adminRepo } from "../repositories/AdminRepository";
import { managerRepo } from "../repositories/ManagerRepository";

class AdminService {

    async getLeaveReport() {
        return await adminRepo.getLeaveReport();
    }
}

export const adminService = new AdminService();