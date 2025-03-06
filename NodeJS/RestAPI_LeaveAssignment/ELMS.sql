CREATE TABLE tbl_Employees__2(
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(40),
    email VARCHAR(40) UNIQUE,
    role VARCHAR(40) CHECK (role IN ('Employee','Manager','Admin'))
);

CREATE TABLE tbl_Leaves__2(
    id INT IDENTITY(1,1) PRIMARY KEY,
    employee_id INT FOREIGN KEY REFERENCES tbl_Employees__2(id),
    start_date DATE,
    end_date DATE,
    leave_type VARCHAR(20) CHECK (leave_type IN ('Sick', 'Vacation')),
    status VARCHAR(20) CHECK (status IN ('Pending', 'Approved', 'Rejected')) DEFAULT 'Pending',
    reason TEXT
);

INSERT INTO tbl_Employees__2 (name, email, role) VALUES ('Rutuja', 'rutu@gmail.com', 'Manager');
INSERT INTO tbl_Employees__2 (name, email, role) VALUES ('Shreya', 'shreya@gmail.com', 'Employee');
INSERT INTO tbl_Employees__2 (name, email, role) VALUES ('Ashwini', 'ash@gmail.com', 'Admin');
INSERT INTO tbl_Employees__2 (name, email, role) VALUES ('Abid', 'abid@gmail.com', 'Employee');

--INSERT INTO tbl_Leaves__2(employee_id, start_date, end_date, leave_type, reason) VALUES (3,'2025-02-02','2025-02-03','Sick','Flu');

--UPDATE tbl_Leaves__2 SET status='Approved' WHERE id=1;
--SELECT * FROM tbl_Leaves__2 WHERE status = 'Pending';

select * from tbl_Leaves__2;
select * from tbl_Employees__2;