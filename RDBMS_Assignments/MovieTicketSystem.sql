CREATE TABLE Bookings_1(
	BookingId INT PRIMARY KEY,
	CustomerName VARCHAR(20),
	MovieName VARCHAR(20),
	SeatsBooked INT,
	TotalPrice Decimal(10,2)
);

INSERT INTO Bookings_1(BookingId,CustomerName,MovieName,SeatsBooked,TotalPrice) VALUES
(1,'Rutuja','Chaava',6,1000),
(2,'Sandhya','Intersteller',2,600),
(3,'Prachi','Transformers',3,800.14),
(4,'Ashwini','SkyForce',2,650.11)

BEGIN TRANSACTION;

SAVE TRANSACTION save1;

UPDATE Bookings_1
SET TotalPrice = 900 WHERE BookingId = 1;

DELETE FROM Bookings_1 WHERE BookingId=2;

SELECT * FROM Bookings_1

ROLLBACK TRANSACTION save1;

SELECT * FROM Bookings_1

COMMIT