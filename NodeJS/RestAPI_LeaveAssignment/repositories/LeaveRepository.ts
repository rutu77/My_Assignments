
import { sql, poolPromise } from "../config/database";
import { Leave } from "../models/Leave";

class LeaveRepository {
    async createLeave(leave: Leave): Promise<void> {
        const pool = await poolPromise;
        await pool.request()
            .input("employee_id", sql.Int, leave.employee_id)
            .input("start_date", sql.Date, leave.start_date)
            .input("end_date", sql.Date, leave.end_date)
            .input("leave_type", sql.VarChar, leave.leave_type)
            .input("reason", sql.Text, leave.reason)
            .query("INSERT INTO tbl_Leaves__2(employee_id, start_date, end_date, leave_type, reason) VALUES (@employee_id, @start_date, @end_date, @leave_type, @reason)");
    }

    async getLeaveHistory(employee_id: number) {
        const pool = await poolPromise;
        return pool.request()
            .input("employee_id", sql.Int, employee_id)
            .query("SELECT * FROM tbl_Leaves__2 WHERE employee_id=@employee_id");
    }
}

export const leaveRepo = new LeaveRepository();