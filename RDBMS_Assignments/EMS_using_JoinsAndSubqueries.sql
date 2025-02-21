CREATE TABLE Employees__1(
	EmployeeId INT PRIMARY KEY,
	Name VARCHAR(20),
	DepartmentId INT,
	ManagerId INT,
	HireDate Date,
	Salary DECIMAL(10,2),
	FOREIGN KEY (DepartmentId) REFERENCES Departments__1(DepartmentId),
	FOREIGN KEY (ManagerId) REFERENCES Employees__1(EmployeeId)
);

CREATE TABLE Departments__1(
	DepartmentId INT PRIMARY KEY,
	DepartmentName VARCHAR(20)
);

CREATE TABLE Salaries__1(
	EmployeeId INT PRIMARY KEY,
	BaseSalary DECIMAL(10,2),
	Bonus DECIMAL(10,2),
	FOREIGN KEY (EmployeeId) REFERENCES Employees__1(EmployeeId)
);

INSERT INTO Departments__1 (DepartmentId, DepartmentName) VALUES
(1, 'HR'),
(2, 'Engineering'),
(3, 'Marketing');

INSERT INTO Employees__1 (EmployeeId, Name, DepartmentId, ManagerId, HireDate, Salary) VALUES
(1, 'Rutuja', 1, NULL, '2020-01-15', 60000.00),
(2, 'Sandhya', 2, 1, '2021-03-22', 75000.00),
(3, 'Prachi', 2, 1, '2024-07-18', 70000.00),
(4, 'Aishwarya', 3, 2, '2025-11-05', 65000.00);

INSERT INTO Salaries__1 (EmployeeId, BaseSalary, Bonus) VALUES
(1, 60000, 5000),
(2, 75000, 7000),
(3, 70000, 6000),
(4, 65000, 5500);

--Task 1
SELECT e.Name, d.DepartmentName, e.HireDate FROM Employees__1 e 
INNER JOIN Departments__1 d ON e.DepartmentId=d.DepartmentId

--Task 2
SELECT e.Name FROM Employees__1 e 
LEFT JOIN Employees__1 e1 ON e.ManagerId=e1.ManagerId
WHERE e.ManagerId IS NULL;

--Task 3
SELECT d.DepartmentName FROM Departments__1 d
LEFT JOIN Employees__1 e ON d.DepartmentId = e.DepartmentId
WHERE e.EmployeeId IS NULL;

--Task 4
SELECT e.EmployeeId, e.Name, s.BaseSalary, s.Bonus, (s.BaseSalary+ s.Bonus) AS TotalSalary
FROM Employees__1 e JOIN Salaries__1 s ON e.EmployeeId=s.EmployeeId;

--Task 5
SELECT e.Name, (s.BaseSalary+s.Bonus) AS TotalSalary FROM Employees__1 e
JOIN Salaries__1 s ON e.EmployeeId=s.EmployeeId
WHERE (s.BaseSalary+s.Bonus)=(SELECT MAX(BaseSalary+Bonus) FROM Salaries__1)

--Task 6
SELECT e.Name AS EmployeeName, e.Salary AS EmployeeSalary,
m.Name AS ManagerName, m.Salary AS ManagerSalary FROM Employees__1 e JOIN Employees__1 m 
ON e.ManagerId=m.ManagerId
WHERE e.Salary>m.Salary;

--Task 7
CREATE VIEW EmployeeSalaryDetails AS 
SELECT e.EmployeeId, e.Name, d.DepartmentName, s.BaseSalary, (s.BaseSalary+s.Bonus) AS TotalSalary
FROM Employees__1 e JOIN Salaries__1 s ON e.EmployeeId=s.EmployeeId
JOIN Departments__1 d ON e.DepartmentId= d.DepartmentId;
SELECT * FROM EmployeeSalaryDetails;

--Task 8
SELECT Name, HireDate FROM Employees__1
WHERE DATEDIFF(DAY, HireDate, GETDATE()) > (3 * 365);

--Task 9
SELECT d.DepartmentName,  COUNT(e.EmployeeId) AS EmployeeCount
FROM Departments__1 d
LEFT JOIN Employees__1  e ON d.DepartmentId=e.DepartmentId
GROUP BY d.DepartmentName;










