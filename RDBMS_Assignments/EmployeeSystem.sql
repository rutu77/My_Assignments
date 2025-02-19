USE JIBE_Main_Training;

CREATE TABLE Emp_1(
    empId INT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(30) UNIQUE,
    department VARCHAR(40),
    salary DECIMAL(10, 2),
    JoiningDate DATE
);

SELECT * FROM Emp_1

INSERT INTO Emp_1(empId, name, email, department, salary, JoiningDate) VALUES
(1, 'Rutuja', 'rutu@gmail.com','IT',70000,'2021-01-10'),
(2, 'Sandhya', 'sandhya@gmail.com','HR',60000,'2020-01-17'),
(3,'Ashwini','ashwini@gmail.com','Finance',65000,'2019-02-18'),
(4,'Abid','abid@gmail.com','Marketing',64000,'2023-04-11'),
(5,'Prachi','prachi@gmail.com','Development',70000,'2024-01-06');

SELECT * FROM Emp_1

ALTER TABLE Emp_1
ADD phone_number VARCHAR(20);

DROP TABLE Emp_1