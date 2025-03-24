import express from 'express';
const fs= require("fs").promises
import { employeeRoutes } from './routes/employeeRoutes';


const app = express();
const PORT = 3000;

const JsonFile ='./src/employee.json';


app.use(express.json());

//reads the employee.json file
export const readEmployees = async () :Promise<any[]>=> {
        const data = await fs.readFile(JsonFile, 'utf-8');
        return JSON.parse(data);
}

//writes to the employee.json file
export const writeEmployees = async (data: any[]) => {
    await fs.writeFile(JsonFile, JSON.stringify(data));
};

app.use('/employees', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

