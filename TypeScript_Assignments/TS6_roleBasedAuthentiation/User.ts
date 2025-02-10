
export interface IUser {
    id: number;
    name: string;
    role: Role;
}

export enum Role {
    Admin = 'Admin',
    Manager = 'Manager',
    Employee = 'Employee',
}