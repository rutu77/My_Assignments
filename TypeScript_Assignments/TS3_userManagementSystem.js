//EEnum for User Roles
var userRoles;
(function (userRoles) {
    userRoles["Admin"] = "Admin";
    userRoles["Manager"] = "Manager";
    userRoles["Employee"] = "Employee";
})(userRoles || (userRoles = {}));
//User array
var users = [];
function createUser(user) {
    users.push(user);
    return user; // Return a user object
}
//Function to filter users by role
function getUserByRole(role) {
    return users.filter(function (user) { return user.role === role; });
}
//Creating users
var user1 = { id: 101, name: "Rutuja", email: "rutu@gmail.com", role: "Admin", phoneNumber: 123456789 };
createUser(user1);
var user2 = { id: 202, name: "Sandhya", email: "sandhya@gmail.com", role: userRoles.Manager };
createUser(user2);
var admin = getUserByRole(userRoles.Admin);
console.log(admin);
var manager = getUserByRole("Manager");
console.log(manager);
