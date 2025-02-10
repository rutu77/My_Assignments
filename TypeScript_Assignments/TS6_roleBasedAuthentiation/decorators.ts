import {IUser} from './User';
import {RolePermissions} from './permission';

export function Authorize(action: string) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const user: IUser = args[0];  

            if (RolePermissions[user.role].includes(action)) {
                console.log(
                    `Access granted: ${user.name} (${user.role}) can perform ${action}`
                );
                return originalMethod.apply(this, args);
            } else {
                console.error(
                    `Access denied: ${user.name} (${user.role}) is not allowed to perform ${action}`
                );
            }
        };
    };
}