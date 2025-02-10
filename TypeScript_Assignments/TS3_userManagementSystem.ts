//EEnum for User Roles
enum userRoles {
    Admin = "Admin",
    Manager = "Manager",
    Employee = "Employee"
}

//Interface with user properties
interface User {
    id:number;
    name:string;
    email:string;
    role:Role;
    phoneNumber?:number;
}

//Union type to allow roles to accept custom role string
type Role = userRoles | string;

//User array
let users:User[]=[];

function createUser(user:User):User {
    users.push(user);
    return user; // Return a user object
}

//Function to filter users by role
function getUserByRole(role:Role): User[] {
    return users.filter(user=>user.role===role);
}

//Creating users
const user1:User={id:101, name:"Rutuja", email:"rutu@gmail.com", role:"Admin", phoneNumber:123456789};
createUser(user1);
const user2:User={id:202,name:"Prachi",email:"prachi@gmail.com",role:userRoles.Manager}
createUser(user2);

const admin=getUserByRole(userRoles.Admin);
console.log(admin);
const manager=getUserByRole("Manager");
console.log(manager);
