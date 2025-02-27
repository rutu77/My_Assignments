CREATE TABLE tbl_Customers4(
    CustomerID INT PRIMARY KEY IDENTITY(1,1),
    CustomerName VARCHAR(50),
    Email VARCHAR(50) UNIQUE,
    PhoneNo VARCHAR(50),
    Address VARCHAR(50)
);

CREATE TABLE tbl_Bookings4(
    BookingID INT PRIMARY KEY IDENTITY(1,1),
    CustomerID INT,
    RoomID INT,
    CheckInDate DATE,
    CheckOutDate DATE,
    TotalAmount DECIMAL(10, 2),
    FOREIGN KEY (CustomerID) REFERENCES tbl_Customers4(CustomerID),
    FOREIGN KEY (RoomID) REFERENCES tbl_Rooms4(RoomID)
);

CREATE TABLE tbl_Rooms4(
    RoomID INT PRIMARY KEY IDENTITY(1,1),
    RoomType VARCHAR(50),
    PricePerNight DECIMAL(10, 2),
    Status VARCHAR(50)
);

--UPDATE tbl_Rooms4
--SET Status = 'Available' WHERE Status NOT IN ('Booked', 'Available');

ALTER TABLE tbl_Rooms4
ADD CONSTRAINT check_Statuss CHECK (Status IN ('Booked', 'Available'));
SELECT * FROM tbl_Rooms4

CREATE TABLE tbl_Payments4(
    PaymentID INT PRIMARY KEY IDENTITY(1,1),
    BookingID INT,
    PaymentDate DATE,
    Amount DECIMAL(10, 2),
    PaymentMethod VARCHAR(50),
    FOREIGN KEY (BookingID) REFERENCES tbl_Bookings4(BookingID)
);

CREATE TABLE tbl_Services4(
    ServiceID INT PRIMARY KEY IDENTITY(1,1),
    ServiceName VARCHAR(50),
    Price DECIMAL(10, 2)
);

CREATE TABLE tbl_ServiceRequests4(
    ServiceID INT,
    BookingID INT,
    RequestDate DATE,
    Quantity INT,
    TotalServiceCost DECIMAL(10, 2),
    PRIMARY KEY (ServiceID, BookingID),
    FOREIGN KEY (ServiceID) REFERENCES tbl_Services4(ServiceID),
    FOREIGN KEY (BookingID) REFERENCES tbl_Bookings4(BookingID)
);

CREATE TABLE tbl_HotelBranchs4(
    BranchID INT PRIMARY KEY IDENTITY(1,1),
    BranchName VARCHAR(50),
    Location VARCHAR(50)
);

CREATE TABLE tbl_Employees4(
    EmployeeID INT PRIMARY KEY IDENTITY(1,1),
    EmployeeName VARCHAR(50),
    Position VARCHAR(50),
    Salary DECIMAL(10, 2),
    HireDate DATE,
    ManagerID INT,
    FOREIGN KEY (ManagerID) REFERENCES tbl_Employees4(EmployeeID)
);

--1 Data insertion
INSERT INTO tbl_Customers4 (CustomerName, Email, PhoneNo, Address) VALUES
('Alice Johnson', 'alice@example.com', '1234567890', '123 Main St'),
('Bob Martin', 'bob@example.com', '0987654321', '456 Elm St'),
('Charlie Lee', 'charlie@example.com', '1122334455', '789 Oak St'),
('Diana King', 'diana@example.com', '6677889900', '101 Pine St'),
('Ethan Wright', 'ethan@example.com', '2233445566', '202 Maple St');

INSERT INTO tbl_Rooms4 (RoomType, PricePerNight, Status) VALUES
('Single', 1000.00, 'Available'),
('Double', 1500.00, 'Booked'),
('Suite', 3000.00, 'Available'),
('Deluxe', 2000.00, 'Booked'),
('Family', 2500.00, 'Available');

INSERT INTO tbl_Bookings4 (CustomerID, RoomID, CheckInDate, CheckOutDate, TotalAmount) VALUES
(1, 1, '2023-01-10', '2023-01-15', 5000.00),
(2, 2, '2023-02-15', '2023-02-20', 3000.00),
(3, 3, '2023-03-20', '2023-03-25', 7000.00),
(4, 4, '2023-04-25', '2023-04-30', 4500.00),
(5, 5, '2023-05-30', '2023-06-04', 6000.00);


INSERT INTO tbl_Payments4 (BookingID, PaymentDate, Amount, PaymentMethod) VALUES
(1, '2023-01-10', 5000.00, 'Credit Card'),
(2, '2023-02-15', 3000.00, 'Cash'),
(3, '2023-03-20', 7000.00, 'Debit Card'),
(4, '2023-04-25', 4500.00, 'Credit Card'),
(5, '2023-05-30', 6000.00, 'Cash');

INSERT INTO tbl_Services4 (ServiceName, Price) VALUES
('Room Service', 500.00),
('Laundry', 300.00),
('Spa', 1500.00),
('Gym', 1000.00),
('Breakfast', 200.00);

INSERT INTO tbl_ServiceRequests4 (ServiceID, BookingID, RequestDate, Quantity, TotalServiceCost) VALUES
(1, 1, '2023-01-11', 2, 1000.00),
(2, 2, '2023-02-16', 1, 300.00),
(3, 3, '2023-03-21', 1, 1500.00),
(4, 4, '2023-04-26', 1, 1000.00),
(5, 5, '2023-05-31', 3, 600.00);

INSERT INTO tbl_HotelBranchs4 (BranchName, Location) VALUES
('Downtown', 'City Center'),
('Airport', 'Near Airport'),
('Beachside', 'Beachfront'),
('Mountain View', 'Hilltop'),
('Suburban', 'Suburbs');

INSERT INTO tbl_Employees4 (EmployeeName, Position, Salary, HireDate, ManagerID) VALUES
('John Doe', 'Manager', 75000.00, '2020-01-15', NULL),
('Jane Smith', 'Receptionist', 35000.00, '2021-03-22', 1),
('Michael Brown', 'Housekeeper', 28000.00, '2019-07-10', 1),
('Emily Davis', 'Chef', 50000.00, '2022-05-18', 1),
('David Wilson', 'Bellboy', 25000.00, '2023-02-01', 1);


--2 Queries using joins
SELECT c.CustomerName, r.RoomType, b.CheckInDate, b.TotalAmount FROM tbl_Bookings4 b
JOIN tbl_Customers4 c ON c.CustomerID=b.CustomerId
JOIN tbl_Rooms4 r ON b.RoomID=r.RoomID

SELECT e.EmployeeName, e1.EmployeeName as Manager FROM tbl_Employees4 e
LEFT JOIN tbl_Employees4 e1 ON e.ManagerID=e1.EmployeeID

INSERT INTO tbl_Rooms4 (RoomType, PricePerNight, Status) VALUES
('Single', 1400.00, 'Booked'),
('Double', 1700.00, 'Booked');

SELECT RoomId, RoomType FROM tbl_Rooms4
WHERE RoomID NOT IN (SELECT DISTINCT RoomID FROM tbl_Bookings4)


--3 subqueries
INSERT INTO tbl_Bookings4 (CustomerID, RoomID, CheckInDate, CheckOutDate, TotalAmount) VALUES
(1, 7, '2023-01-10', '2023-01-15', 5000.00),
(1, 6, '2023-02-15', '2023-02-20', 3000.00);

SELECT CustomerID, CustomerName FROM tbl_Customers4
WHERE CustomerID IN (SELECT CustomerID FROM tbl_Bookings4
GROUP BY CustomerID HAVING COUNT(*)>1)

SELECT RoomID, RoomType, PricePerNight FROM tbl_Rooms4
WHERE PricePerNight= (SELECT MAX(PricePerNight) FROM tbl_Rooms4)


--4 Views
CREATE VIEW ActiveBooking_view AS
SELECT c.CustomerName, r.RoomType, b.CheckInDate, b.CheckOutDate FROM tbl_Bookings4 b
JOIN tbl_Customers4 c ON b.CustomerID= c.CustomerID
JOIN tbl_Rooms4 r ON r.RoomID=b.RoomID
WHERE r.Status='Booked';

SELECT * FROM ActiveBooking_view


--5 Indexing
CREATE INDEX idx_roomtype ON tbl_Rooms4(RoomType)

CREATE INDEX idx_checkinout ON tbl_Bookings4(CheckInDate,CheckOutDate)


--6 Stored Procedures and Functions
CREATE PROCEDURE sp_MonthlyRevenue
    @year INT,
    @month INT
AS
BEGIN
    SELECT SUM(Amount) AS TotalRevenue FROM tbl_Payments4
    WHERE MONTH(PaymentDate) = @month AND YEAR(PaymentDate) = @year;
END;

EXEC sp_MonthlyRevenue @year = 2023, @month = 1;


CREATE FUNCTION fn_StayDays(@CheckIn DATE, @CheckOut DATE)
RETURNS INT
AS
BEGIN
    RETURN DATEDIFF(DAY, @CheckIn, @CheckOut);
END;

SELECT dbo.fn_StayDays('2023-01-10', '2023-01-15') AS StayDays;


--7 Triggers
CREATE TRIGGER tg_BookingCancel
ON tbl_Bookings4
AFTER DELETE
AS
BEGIN
    UPDATE tbl_Rooms4
    SET Status = 'Available'
    WHERE RoomID = (SELECT RoomID FROM DELETED);
END;

SELECT * FROM tbl_Rooms4
SELECT * FROM tbl_Bookings4

DELETE FROM tbl_Bookings4 WHERE BookingID = 10;
SELECT RoomID, Status FROM tbl_Rooms4 WHERE RoomID = 7;

---------------------------------
CREATE TRIGGER tg_RoomBooked
ON tbl_Bookings4
AFTER INSERT
AS
BEGIN
    UPDATE tbl_Rooms4
    SET Status = 'Booked'
    WHERE RoomID = (SELECT RoomID FROM INSERTED);
END;

--SELECT * FROM tbl_Rooms4
--SELECT * FROM tbl_Bookings4

INSERT INTO tbl_Bookings4 (CustomerID, RoomID, CheckInDate, CheckOutDate, TotalAmount) VALUES
(1, 7, '2023-01-10', '2023-01-15', 5000.00);
SELECT RoomID, Status FROM tbl_Rooms4 WHERE RoomID = 7;

--------------------------------------------------------------------------------------------
ALTER TABLE tbl_ServiceRequests4
DROP COLUMN TotalServiceCost

CREATE TRIGGER tg_UpdateTotalAmount1
ON tbl_ServiceRequests4
AFTER INSERT
AS
BEGIN
	DECLARE @ServiceID INT
	DECLARE @BookingID INT;
	DECLARE @TotalServiceCost DECIMAL(10,2);
	SELECT @BookingID =i.BookingID, @ServiceID=i.ServiceID FROM inserted i
	SELECT @TotalServiceCost= Price FROM tbl_Services4 WHERE ServiceID= @ServiceID

    UPDATE tbl_Bookings4
    SET TotalAmount = TotalAmount + @TotalServiceCost
    WHERE BookingID = @BookingID;
END;

INSERT INTO tbl_ServiceRequests4 (ServiceID, BookingID, RequestDate, Quantity) VALUES
(1, 7, '2023-01-11', 1);

SELECT * FROM tbl_Bookings4


--8 security and privileges
CREATE ROLE HotelManager7;
GRANT SELECT, INSERT, UPDATE, DELETE ON tbl_Bookings4 TO HotelManager7
GRANT SELECT, INSERT, UPDATE, DELETE ON tbl_Payments4 TO HotelManager7

CREATE ROLE FrontDeskStaff7
GRANT SELECT ON Rooms TO FrontDeskStaff7;


--9 Backup And Restore
BACKUP DATABASE JIBE_Main_Training
TO DISK = 'C:\Backup\HotelManagement_Backup.bak'
WITH FORMAT, INIT;

RESTORE DATABASE JIBE_Main_Training
FROM DISK = 'C:\Backup\HotelManagement_Backup.bak'
WITH REPLACE;


--10 Full Text
EXEC sp_fulltext_database 'enable';

CREATE FULLTEXT CATALOG RoomCataglog AS DEFAULT;

CREATE UNIQUE INDEX idx_room_id ON tbl_Rooms4(RoomID);

CREATE FULLTEXT INDEX ON tbl_Rooms4(RoomType) KEY INDEX idx_room_id;

SELECT * FROM tbl_Rooms4

SELECT RoomID, RoomType, PricePerNight, Status FROM tbl_Rooms4
WHERE CONTAINS(RoomType,'Single OR Double');



