var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Base class person
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Introduce method
    Person.prototype.introduce = function () {
        console.log("Hi, I am ".concat(this.name, ", and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
//Derived class student
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId, grade) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        _this.grade = grade;
        Student.totalStudents++;
        return _this;
    }
    // Overridden introduce method
    Student.prototype.introduce = function () {
        console.log("Hi, I am ".concat(this.name, ", a student in grade ").concat(this.grade, "."));
    };
    //static method to get total count of students created
    Student.getTotalStudents = function () {
        return Student.totalStudents;
    };
    Student.totalStudents = 0;
    return Student;
}(Person));
//Derived class teacher
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, teacherId, subject) {
        var _this = _super.call(this, name, age) || this;
        _this.teacherId = teacherId;
        _this.subject = subject;
        Teacher.totalTeachers++;
        return _this;
    }
    // Overridden introduce method
    Teacher.prototype.introduce = function () {
        console.log("Hi, I am ".concat(this.name, ", and I teach ").concat(this.subject, "."));
    };
    //static method to get total count of teachers created
    Teacher.getTotalTeachers = function () {
        return Teacher.totalTeachers;
    };
    Teacher.totalTeachers = 0;
    return Teacher;
}(Person));
//abstract class for staff
var Staff = /** @class */ (function () {
    function Staff(department) {
        this.department = department;
    }
    return Staff;
}());
//subclass clerk of class staff
var Clerk = /** @class */ (function (_super) {
    __extends(Clerk, _super);
    function Clerk(department, responsibility, salary) {
        var _this = _super.call(this, department) || this;
        _this.responsibility = responsibility;
        _this.salary = salary;
        return _this;
    }
    Clerk.prototype.workDetails = function () {
        return this.responsibility;
    };
    return Clerk;
}(Staff));
var student = new Student("Rutuja", 20, 101, "A");
var student1 = new Student("Ashwini", 21, 102, "B");
var student2 = new Student("Prachi", 21, 103, "C");
var teacher = new Teacher("Miss. Sandhya", 28, 201, "Computer Science");
var teacher1 = new Teacher("Miss.Aishwarya", 30, 202);
var clerk = new Clerk("Administration", "Managing attendance records", 20000);
student.introduce();
student1.introduce();
student2.introduce();
teacher.introduce();
teacher1.introduce();
console.log("Total No. of students: ".concat(Student.getTotalStudents()));
console.log("Total No. of teachers: ".concat(Teacher.getTotalTeachers()));
console.log(clerk.workDetails());
