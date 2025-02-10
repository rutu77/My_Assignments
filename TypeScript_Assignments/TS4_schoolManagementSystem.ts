//Base class person
class Person{
    public name:string;
    public age:number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }

    // Introduce method
    introduce(): void{
        console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
    }
}

//Derived class student
class Student extends Person{
    readonly studentId:number;
    public grade:string;
    static totalStudents: number = 0;

    constructor(name:string,age:number,studentId:number,grade:string) {
        super(name,age);
        this.studentId = studentId;
        this.grade = grade;
        Student.totalStudents++;
    }

    // Overridden introduce method
    introduce(): void{
        console.log(`Hi, I am ${this.name}, a student in grade ${this.grade}.`);
    }

    //static method to get total count of students created
    static getTotalStudents(): number{
        return Student.totalStudents;
    }
}

//Derived class teacher
class Teacher extends Person{
    readonly teacherId: number;
    public subject?: string;
    static totalTeachers: number = 0;

    constructor(name: string, age: number, teacherId: number, subject?: string) {
        super(name, age);
        this.teacherId = teacherId;
        this.subject = subject;
        Teacher.totalTeachers++;
    }

    // Overridden introduce method
    introduce(): void {
        console.log(`Hi, I am ${this.name}, and I teach ${this.subject}.`);
    }

    //static method to get total count of teachers created
    static getTotalTeachers():number{
        return Teacher.totalTeachers;
    }
}

//abstract class for staff
abstract class Staff{
    public department:string;

    constructor(department:string){
        this.department = department;
    }

    abstract workDetails():string;
}

//subclass clerk of class staff
class Clerk extends Staff{
    public responsibility:string;
    private salary:number;

    constructor(department:string,responsibility:string,salary:number){
        super(department);
        this.responsibility=responsibility;
        this.salary=salary;
    }

    workDetails():string{
        return this.responsibility;
    }
}

const student=new Student("Rutuja",20,101,"A");
const student1=new Student("Ashwini",21,102,"B");
const student2=new Student("Prachi",21,103,"C");
const teacher=new Teacher("Miss. Sandhya",28,201,"Computer Science");
const teacher1=new Teacher("Miss.Aishwarya",30,202);
const clerk= new Clerk("Administration","Managing attendance records",20000)

student.introduce();
student1.introduce();
student2.introduce();
teacher.introduce();
teacher1.introduce();

console.log(`Total No. of students: ${Student.getTotalStudents()}`);
console.log(`Total No. of teachers: ${Teacher.getTotalTeachers()}`);

console.log(clerk.workDetails());
