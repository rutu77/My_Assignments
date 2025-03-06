import { sql, poolPromise } from "../config/database";
import { Leave } from "../models/Leave";

class ManagerRepository {
    async getPendingLeaves(){
        const pool = await  poolPromise;
        return pool.request().query("SELECT * FROM tbl_Leaves__2 WHERE status='Pending'" );
    }
    
    async updateLeaveStatus(leaveid: number, status: string) {
        const pool = await poolPromise;
        return pool
            .request()
            .input("leaveId", sql.Int, leaveid)
            .input("status", sql.VarChar, status)
            .query("UPDATE tbl_Leaves__2 SET status=@status WHERE id=@leaveId");
    }
}

export const managerRepo = new ManagerRepository();