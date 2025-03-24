import express from "express";
import { EmployeeController } from "../controllers/employeeController";

const router = express.Router();
const employeeController= new EmployeeController()

router.get('/', employeeController.getAllEmployees )
router.get('/:id', employeeController.getEmployeeById)
router.post('/', employeeController.AddEmployee)
router.put('/:id', employeeController.updateEmployee)
router.delete('/:id',employeeController.deleteEmployee)

export {router as employeeRoutes};

