import { Role } from './User';

export const RolePermissions: { [key in Role]: string[] } = {
    [Role.Admin]: ['viewReports', 'editReports', 'deleteReports'],
    [Role.Manager]: ['viewReports', 'editReports'],
    [Role.Employee]: ['viewReports'],
};
