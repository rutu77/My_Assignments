import {IUser} from './User';
import { IReportService } from './services';
import {Role} from './User';
import { ReportService} from './services';

const admin: IUser = { id: 1, name: 'Rutuja', role: Role.Admin };
const manager: IUser = { id: 2, name: 'Sandhya', role: Role.Manager };
const employee: IUser = { id: 3, name: 'Prachi', role: Role.Employee };

const reportService: IReportService = new ReportService();

reportService.viewReports(admin); 
reportService.editReports(admin); 
reportService.deleteReports(admin); 
reportService.viewReports(manager); 
reportService.editReports(manager); 
reportService.deleteReports(manager); 

reportService.viewReports(employee); 
reportService.editReports(employee); 
reportService.deleteReports(employee); 

