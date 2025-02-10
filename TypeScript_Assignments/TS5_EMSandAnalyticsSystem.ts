enum Roles {
    Manager = "Manager",
    Developer = "Developer",
    Intern = "Intern"
}

enum Status {
    Active = "Active",
    Inactive = "Inactive"
}

interface Employee {
    id: number;
    name: string;
    role: Roles;
    status: Status;
}

interface Activity {
    employeeId: number;
    activity: string;
    timestamp: Date;
}

let employees: Employee[] = [];
let activityLog: Activity[] = [];

function addEmployee(employee: Employee): void {
    employees.push(employee);
}

function updateEmployee(id: number, updates: Partial<Employee>): void {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        if (updates.name) {
            employee.name = updates.name;
        }
        if (updates.role) {
            employee.role = updates.role;
        }
        if (updates.status) {
            employee.status = updates.status;
        }
    }
}

function generateEmployeeSummaries(): Array<{ name: string; role: Roles; status: Status }> {
    return employees.map(e => ({ name: e.name, role: e.role, status: e.status }));
}

function groupEmployeesByRole(): Record<Roles, Employee[]> {
    const emp: Record<Roles, Employee[]> = {
        [Roles.Manager]: [],
        [Roles.Developer]: [],
        [Roles.Intern]: []
    };
    
    employees.forEach((employee) => {
        emp[employee.role].push(employee);
    });
    
    return emp;
}

function logActivity(employeeId: number, activity: string): void {
    const employee = employees.find(e => e.id === employeeId);
    if (!employee) {
        console.log("Employee not found");
    } else {
        if (employee.status === Status.Inactive) {
            console.log("Employee is inactive");
        } else if (activity === "approve reports" && employee.role !== Roles.Manager) {
            console.log("Only managers can approve the reports");
        } else {
            activityLog.push({ employeeId: employee.id, activity: activity, timestamp: new Date() });
        }
    }
}

addEmployee({ id: 1, name: "Rutuja", role: Roles.Manager, status: Status.Active });
addEmployee({ id: 2, name: "Sandhya", role: Roles.Developer, status: Status.Active });
addEmployee({ id: 3, name: "Bandya", role: Roles.Intern, status: Status.Inactive });

updateEmployee(3, { status: Status.Active });

const summaries = generateEmployeeSummaries();
console.log("Employee Summaries:", summaries);

const groupedEmployees = groupEmployeesByRole();
console.log("Grouped Employees by Role:", groupedEmployees);

logActivity(1, "approve reports");
logActivity(2, "approve reports");
console.log("Activity Log:", activityLog);
