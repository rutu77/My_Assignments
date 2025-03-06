export class Leave {
  id: string;
  employee_id: string;
  start_date: Date;
  end_date: Date;
  leave_type: string;
  status: string;
  reason: string;

  constructor(id: string, employee_id: string, start_date: Date, end_date: Date, leave_type: string, status: string, reason: string) {
      this.id = id;
      this.employee_id = employee_id;
      this.start_date = start_date;
      this.end_date = end_date;
      this.leave_type = leave_type;
      this.status = status;
      this.reason = reason;
  }
}
