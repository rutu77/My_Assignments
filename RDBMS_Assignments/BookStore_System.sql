-- SQL Subqueries assignment
CREATE TABLE Customers__1(
	CustomerId INT PRIMARY KEY,
	CustomerName VARCHAR(20),
);

CREATE TABLE Books__1(
	BookId INT PRIMARY KEY,
	Title VARCHAR(20),
	Author VARCHAR(20),
	Price DECIMAL(10,2),
	Stock INT NOT NULL
);

CREATE TABLE Orders__1(
	OrderId INT PRIMARY KEY,
	CustomerId INT,
	BookId INT,
	OrderDate Date,
	Quantity INT
);

ALTER TABLE Orders__1
ADD CONSTRAINT FK_Cust_1 FOREIGN KEY (CustomerId) REFERENCES Customers__1(CustomerId);

ALTER TABLE Orders__1
ADD CONSTRAINT FK_Book_01 FOREIGN KEY (BookId) REFERENCES Books__1(BookId);

INSERT INTO Customers__1 (CustomerId, CustomerName) VALUES
(1, 'Rutuja'),
(2, 'Sandhya'),
(3, 'Prachi'),
(4, 'Ashwini'),
(5, 'Abid'),
(6, 'Aishwarya'),
(7, 'Anjali');

INSERT INTO Books__1 (BookId, Title, Author, Price, Stock) VALUES
(1, 'ABC Book', 'Author A', 100, 10),
(2, 'XYZ Book', 'Author B', 120.45, 8),
(3, 'LMN Book', 'Author C', 150.49, 5),
(4, 'Atomic Habits', 'Author D', 500.99, 0),
(5, 'LightHouse', 'Author E', 170.99, 25),
(6, 'Rapunzel', 'Author F', 300.99, 15),
(7, 'Novel', 'Author G', 407.79, 7);


INSERT INTO Orders__1 (OrderId, CustomerId, BookId, OrderDate, Quantity) VALUES
(1, 1, 1, '2023-01-01', 2),
(2, 2, 2, '2021-02-01', 1),
(3, 3, 3, '2022-03-01', 3),
(4, 4, 4, '2023-04-01', 1),
(5, 5, 5, '2024-05-01', 4),
(6, 6, 6, '2025-06-01', 2),
(7, 7, 7, '2025-07-01', 1);

INSERT INTO Customers__1 (CustomerId, CustomerName) VALUES
(8, 'Shivani'); --inactive customer

SELECT CustomerId, CustomerName FROM Customers__1
WHERE CustomerId IN (SELECT DISTINCT CustomerId FROM Orders__1);

INSERT INTO Books__1 (BookId, Title, Author, Price, Stock) VALUES
(8, 'Harry Potter', 'Author H', 800, 10); --unordered book

SELECT Title FROM Books__1
WHERE BookId NOT IN (SELECT DISTINCT BookId FROM Orders__1)

SELECT Title, Author FROM Books__1
WHERE Stock=0;

SELECT Title, Author, Price FROM Books__1
WHERE Price = (SELECT MAX(Price) FROM Books__1 WHERE BookId IN (SELECT DISTINCT BookId FROM Orders__1));


--SQL Join Assignment

SELECT c.CustomerId, c.CustomerName FROM Customers__1 c LEFT JOIN Orders__1 o
ON c.CustomerId=o.CustomerId 
WHERE o.OrderId IS NULL;

SELECT o.OrderId, o.CustomerId, o.BookId, o.OrderDate, o.Quantity FROM Orders__1 o RIGHT JOIN Customers__1 c
ON o.CustomerId=c.CustomerId
WHERE c.CustomerId IS NULL;
 
SELECT c.CustomerName, SUM(o.Quantity*b.price) AS Total FROM Customers__1 c
JOIN Orders__1 o ON c.CustomerId=o.CustomerId
JOIN books__1 b ON o.BookId=b.BookId
GROUP BY c.CustomerName;

SELECT c.CustomerName, o.Quantity FROM Customers__1 c
INNER JOIN Orders__1 o ON c.CustomerId= o.CustomerId
WHERE o.Quantity= (SELECT MAX(Quantity) FROM Orders__1);


INSERT INTO Orders__1 (OrderId, CustomerId, BookId, OrderDate, Quantity) VALUES
(8, 1, 1, '2025-01-01', 2); --latest date

SELECT c.CustomerName, MAX(o.OrderDate) AS LatestOrderDate FROM Customers__1 c
LEFT JOIN Orders__1 o ON c.CustomerId=o.CustomerId
GROUP BY c.CustomerName

