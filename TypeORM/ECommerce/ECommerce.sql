select * from Usertbl_11
select * from Producttbl_11
select * from Ordertbl_11
select * from Profiletbl_11

SELECT SUM(product.price) AS total
FROM Producttbl_11 AS product
WHERE product.id IN (
    SELECT orderItems.id
    FROM OrderItemtbl_11 AS orderItems
    WHERE orderItems.id = 2
);