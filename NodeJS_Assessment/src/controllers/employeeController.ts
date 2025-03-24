import { Request, Response } from 'express';
import { EmployeeService } from '../services/employeeService';
import { Employee } from '../models/employee';

const employeeService = new EmployeeService();

export class EmployeeController {
    async getAllEmployees(req: Request, res: Response) {
        const employees = await employeeService.getAllEmployees();
        res.json(employees);
    }

    async getEmployeeById(req: Request, res: Response) {
        const result = await employeeService.getEmployeeById(Number(req.params.id));
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    }

    async AddEmployee(req: Request, res: Response) {
        const { name,position,salary } =req.body;
        const allemployees =await employeeService.getAllEmployees();
        let id: number;
        if (allemployees.length>0) {
            id =allemployees[allemployees.length-1].id+1;
        } else {
            id =1;
        }
        const newEmployee =new Employee(id, name, position, salary);
        await employeeService.addEmployee(newEmployee);
        res.status(201).json(newEmployee);
    }

    async updateEmployee(req: Request, res: Response) {
        const { name, position, salary } = req.body;
        const id = Number(req.params.id);
        const updatedEmployee = new Employee(id, name, position, salary);
        const result = await employeeService.updateEmployee(id, updatedEmployee);
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    }

    async deleteEmployee(req: Request, res: Response) {
        const result = await employeeService.deleteEmployee(Number(req.params.id));
        if (result) {
            res.status(200).json({message:"Employee deleted successfully!"});
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    }
}