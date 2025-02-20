CREATE TABLE BankAccounts__1(
	AccountId INT PRIMARY KEY,
	CustomerName VARCHAR(20),
	AccountType VARCHAR(30),
	Balance INT
);


INSERT INTO BankAccounts__1(AccountId,CustomerName,AccountType,Balance) VALUES
(101,'Rutuja','Savings',4000),
(202,'Sandhya','Current',45000),
(303,'Prachi','Savings',20000),
(404,'Asihwarya','Current',30000),
(505,'Abid','Savings',50000);

SELECT * FROM BankAccounts__1;

TRUNCATE TABLE BankAccounts__1;


BEGIN TRANSACTION;
SAVE TRANSACTION SavePoint;

UPDATE BankAccounts__1 SET Balance = Balance - 5000 WHERE AccountId = 202;

IF (SELECT Balance FROM BankAccounts__1 WHERE AccountId = 202) < 5000
BEGIN
    ROLLBACK TRANSACTION SavePoint;
END
ELSE
BEGIN
    COMMIT;
END;

SELECT * FROM BankAccounts__1;


CREATE ROLE Customer;
GRANT SELECT ON BankAccounts__1 To Customer; --granted select to customer
REVOKE UPDATE ON BankAccounts_1 FROM Customer; --restricted update to customer

REVOKE DELETE ON BankAccounts_1 FROM Public; --revoked delete from all users






