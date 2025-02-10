var employeeRoles;
(function (employeeRoles) {
    employeeRoles["Manager"] = "Manager";
    employeeRoles["Developer"] = "Developer";
    employeeRoles["Designer"] = "Designer";
    employeeRoles["Tester"] = "Tester";
    employeeRoles["HR"] = "HR";
})(employeeRoles || (employeeRoles = {}));
var EmployeeSystem = /** @class */ (function () {
    function EmployeeSystem() {
        this.employees = [];
    }
    EmployeeSystem.prototype.addEmployee = function (employee) {
        if (this.employees.some(function (e) { return e.id === employee.id; })) {
            console.log("Employee ".concat(employee.id, " already exists."));
        }
        else {
            this.employees.push(employee);
            console.log("Employee ".concat(employee.id, " is added successfully."));
        }
    };
    EmployeeSystem.prototype.listAllEmployees = function () {
        return this.employees;
    };
    EmployeeSystem.prototype.filterEmployeeByRole = function (role) {
        var result = this.employees.filter(function (employee) { return employee.role === role; });
        if (result.length) {
            console.log("Employees in role ".concat(role, ":"));
            result.forEach(function (employee) { return console.log("ID: ".concat(employee.id, ", Name: ").concat(employee.name, ", Salary: ").concat(employee.salary)); });
        }
        else {
            console.log("No employees found in role ".concat(role, "."));
        }
    };
    EmployeeSystem.prototype.filterEmployeeByStatus = function (isActive) {
        var result = this.employees.filter(function (employee) { return employee.isActive === isActive; });
        if (result.length) {
            console.log("Employees who are ".concat(isActive ? "Active" : "Inactive", ":"));
            result.forEach(function (employee) { return console.log("ID: ".concat(employee.id, ", Name: ").concat(employee.name, ", Salary: ").concat(employee.salary)); });
        }
        else {
            console.log("No employees found who are ".concat(isActive ? "Active" : "Inactive", "."));
        }
    };
    EmployeeSystem.prototype.updateEmployeeStatus = function (id, isActive) {
        var employee = this.employees.find(function (employee) { return employee.id === id; });
        if (employee) {
            employee.isActive = isActive;
            console.log("Employee ".concat(id, " status updated to ").concat(isActive ? "Active" : "Inactive", "."));
        }
        else {
            console.log("Employee not found.");
        }
    };
    EmployeeSystem.prototype.calculateTotalSalary = function () {
        var totalSalary = 0;
        this.employees.forEach(function (employee) {
            if (employee.isActive) {
                totalSalary += employee.salary;
            }
        });
        console.log("Total salary of active employees: ".concat(totalSalary));
        return totalSalary;
    };
    return EmployeeSystem;
}());
var empsystem = new EmployeeSystem();
empsystem.addEmployee({ id: 1, name: "Rutuja", role: employeeRoles.Developer, salary: 50000, isActive: true });
empsystem.addEmployee({ id: 2, name: "Sanika", role: employeeRoles.Manager, salary: 60000, isActive: false });
empsystem.addEmployee({ id: 3, name: "Shreya", role: employeeRoles.Designer, salary: 70000, isActive: true });
console.log(empsystem.listAllEmployees());
empsystem.filterEmployeeByRole(employeeRoles.Developer);
empsystem.filterEmployeeByStatus(true);
empsystem.updateEmployeeStatus(1, false);
empsystem.calculateTotalSalary();
