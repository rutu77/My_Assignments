enum employeeRoles {
    Manager = "Manager",
    Developer = "Developer",
    Designer = "Designer",
    Tester = "Tester",
    HR = "HR"
}

interface Employee {
    id: number;
    name: string;
    role: employeeRoles;
    salary: number;
    isActive: boolean;
}

class EmployeeSystem {
    private employees: Employee[] = [];

    addEmployee(employee: Employee): void {
        if (this.employees.some(e => e.id === employee.id)) {
            console.log(`Employee ${employee.id} already exists.`);
        } else {
            this.employees.push(employee);
            console.log(`Employee ${employee.id} is added successfully.`);
        }
    }

    listAllEmployees(): Employee[] {
        return this.employees;
    }

    filterEmployeeByRole(role: employeeRoles): void {
        const result = this.employees.filter(employee => employee.role === role);
        if (result.length) {
            console.log(`Employees in role ${role}:`);
            result.forEach(employee => console.log(`ID: ${employee.id}, Name: ${employee.name}, Salary: ${employee.salary}`));
        } else {
            console.log(`No employees found in role ${role}.`);
        }
    }

    filterEmployeeByStatus(isActive: boolean): void {
        const result = this.employees.filter(employee => employee.isActive === isActive);
        if (result.length) {
            console.log(`Employees who are ${isActive ? "Active" : "Inactive"}:`);
            result.forEach(employee => console.log(`ID: ${employee.id}, Name: ${employee.name}, Salary: ${employee.salary}`));
        } else {
            console.log(`No employees found who are ${isActive ? "Active" : "Inactive"}.`);
        }
    }

    updateEmployeeStatus(id: number, isActive: boolean): void {
        const employee = this.employees.find(employee => employee.id === id);
        if (employee) {
            employee.isActive = isActive;
            console.log(`Employee ${id} status updated to ${isActive ? "Active" : "Inactive"}.`);
        } else {
            console.log("Employee not found.");
        }
    }

    calculateTotalSalary(): number {
        let totalSalary = 0;
        this.employees.forEach(employee => {
            if (employee.isActive) {
                totalSalary += employee.salary;
            }
        });
        console.log(`Total salary of active employees: ${totalSalary}`);
        return totalSalary;
    }    
}

const empsystem = new EmployeeSystem();
empsystem.addEmployee({ id: 1, name: "Rutuja", role: employeeRoles.Developer, salary: 50000, isActive: true });
empsystem.addEmployee({ id: 2, name: "Sanika", role: employeeRoles.Manager, salary: 60000, isActive: false });
empsystem.addEmployee({ id: 3, name: "Shreya", role: employeeRoles.Designer, salary: 70000, isActive: true });

console.log(empsystem.listAllEmployees());

empsystem.filterEmployeeByRole(employeeRoles.Developer);
empsystem.filterEmployeeByStatus(true);

empsystem.updateEmployeeStatus(1,false);
empsystem.calculateTotalSalary();
