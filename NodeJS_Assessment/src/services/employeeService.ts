import { readEmployees, writeEmployees } from '../app';
import { Employee } from '../models/employee';

export class EmployeeService {
    //get all employees details
    async getAllEmployees() {
        return readEmployees();
    }

    //get a employee by id
    async getEmployeeById(id: number){
        const employees =await readEmployees();
        return employees.find(emp => emp.id === id);
    }

    //add a employee
    async addEmployee(employee: Employee){
        const employees =await readEmployees();
        employees.push(employee);
        await writeEmployees(employees);
    }

    //update a employee by id
    async updateEmployee(id: number, updatedEmployee: Employee){
        const employees =await readEmployees();
        const index =employees.findIndex(e => e.id === id);
        if (index!=-1) {
            employees[index]=updatedEmployee;
            await writeEmployees(employees);
            return employees[index];
        }
        return null;
    }

    //delete a employee by id
    async deleteEmployee(id: number) {
        const employees =await readEmployees();
        const index =employees.findIndex(e => e.id === id);
        if (index!=-1) {
            const deletedEmployee = employees.splice(index, 1);
            await writeEmployees(employees);
            return deletedEmployee[0];
        }
        return null;
    }
}