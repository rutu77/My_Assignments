
import { sql, poolPromise } from "../config/database";
import { Leave } from "../models/Leave";

class AdminRepository {

    async getLeaveReport() {
        const pool = await poolPromise;
        return pool.request().query("SELECT * FROM tbl_Leaves__2");
    }
}

export const adminRepo = new AdminRepository();