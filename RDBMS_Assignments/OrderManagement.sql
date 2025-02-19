USE JIBE_Main_Training;

CREATE TABLE Order_1(
    OrderId INT PRIMARY KEY,
    CustomerName VARCHAR(20),
    ProductName VARCHAR(30),
    Quantity INT,
    Price DECIMAL(10, 2),
    OrderDate DATE
);


INSERT INTO Order_1 VALUES
(1, 'Rutuja', 'Laptop',1,70000,'2021-01-10'),
(2, 'Sandhya', 'TV',1,60000,'2020-01-17'),
(3,'Ashwini','Keyboard',2,65000,'2019-02-18'),
(4,'Abid','Mouse',3,64000,'2023-04-11'),
(5,'Prachi','Mobile',4,70000,'2024-01-06'),
(6, 'Rutuja', 'Charger',10,70000,'2021-01-10'),
(7, 'Sandhya', 'Adaptor',2,60000,'2020-01-17'),
(8,'Ashwini','SSD',2,65000,'2019-02-18'),
(9,'Abid','GPU',1,64000,'2023-04-11'),
(10,'Prachi','PS5',1,70000,'2024-01-06');

UPDATE Order_1 SET Quantity=2 WHERE OrderId=1

DELETE FROM Order_1
WHERE OrderId = 3;

SELECT * FROM Order_1

