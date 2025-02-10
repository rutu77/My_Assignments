var Roles;
(function (Roles) {
    Roles["Manager"] = "Manager";
    Roles["Developer"] = "Developer";
    Roles["Intern"] = "Intern";
})(Roles || (Roles = {}));
var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Inactive"] = "Inactive";
})(Status || (Status = {}));
var employees = [];
var activityLog = [];
function addEmployee(employee) {
    employees.push(employee);
}
function updateEmployee(id, updates) {
    var employee = employees.find(function (emp) { return emp.id === id; });
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
function generateEmployeeSummaries() {
    return employees.map(function (e) { return ({ name: e.name, role: e.role, status: e.status }); });
}
function groupEmployeesByRole() {
    var _a;
    var emp = (_a = {},
        _a[Roles.Manager] = [],
        _a[Roles.Developer] = [],
        _a[Roles.Intern] = [],
        _a);
    employees.forEach(function (employee) {
        emp[employee.role].push(employee);
    });
    return emp;
}
function logActivity(employeeId, activity) {
    var employee = employees.find(function (e) { return e.id === employeeId; });
    if (!employee) {
        console.log("Employee not found");
    }
    else {
        if (employee.status === Status.Inactive) {
            console.log("Employee is inactive");
        }
        else if (activity === "approve reports" && employee.role !== Roles.Manager) {
            console.log("Only managers can approve the reports");
        }
        else {
            activityLog.push({ employeeId: employee.id, activity: activity, timestamp: new Date() });
        }
    }
}
addEmployee({ id: 1, name: "Rutuja", role: Roles.Manager, status: Status.Active });
addEmployee({ id: 2, name: "Sandhya", role: Roles.Developer, status: Status.Active });
addEmployee({ id: 3, name: "Bandya", role: Roles.Intern, status: Status.Inactive });
updateEmployee(3, { status: Status.Active });
var summaries = generateEmployeeSummaries();
console.log("Employee Summaries:", summaries);
var groupedEmployees = groupEmployeesByRole();
console.log("Grouped Employees by Role:", groupedEmployees);
logActivity(1, "approve reports");
logActivity(2, "approve reports");
console.log("Activity Log:", activityLog);
