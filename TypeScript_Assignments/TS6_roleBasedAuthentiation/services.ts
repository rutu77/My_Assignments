import {IUser} from './User';
import {Authorize} from './decorators';

export interface IReportService {
    viewReports(user: IUser): void;
    editReports(user: IUser): void;
    deleteReports(user: IUser): void;
}

export class ReportService implements IReportService {
    @Authorize('viewReports')
    viewReports(user: IUser) {
        console.log(`${user.name} is viewing reports.`);
    }

    @Authorize('editReports')
    editReports(user: IUser) {
        console.log(`${user.name} is editing reports.`);
    }

    @Authorize('deleteReports')
    deleteReports(user: IUser) {
        console.log(`${user.name} is deleting reports.`);
    }
}