CREATE TABLE Customers5(
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(50),
    Email VARCHAR(50) UNIQUE,
    PhoneNumber VARCHAR(50)
);

CREATE TABLE Accounts5(
    AccountID INT PRIMARY KEY,
    CustomerID INT,
    AccountNumber INT,
    Balance DECIMAL(10,2),
    AccountType VARCHAR(50),
    FOREIGN KEY (CustomerID) REFERENCES Customers5(CustomerID)
);

CREATE TABLE Transactions5(
    TransactionID INT IDENTITY(1,1) PRIMARY KEY,
    AccountID INT,
    TransactionType VARCHAR(50),
    Amount DECIMAL(10,2),
    TransactionDate DATE,
    FOREIGN KEY (AccountID) REFERENCES Accounts5(AccountID)
);

CREATE TABLE AuditTransactions5(
    AuditID INT IDENTITY(1,1) PRIMARY KEY,
    AccountID INT,
    Amount DECIMAL(10,2),
    TransactionDate DATE,
    Action VARCHAR(50),
    FOREIGN KEY (AccountID) REFERENCES Accounts5(AccountID)
);

INSERT INTO Customers5(CustomerID, CustomerName, Email, PhoneNumber)
VALUES 
(1, 'John Doe', 'john.doe@example.com', '1234567890'),
(2, 'Jane Smith', 'jane.smith@example.com', '0987654321');


INSERT INTO Accounts5(AccountID, CustomerID, AccountNumber, Balance, AccountType)
VALUES 
(1, 1, 1001, 1000.00, 'Savings'),
(2, 2, 1002, 2000.00, 'Checking');

INSERT INTO Transactions5(AccountID, TransactionType, Amount, TransactionDate)
VALUES 
(1, 'Deposit', 500.00, '2025-02-01'),
(2, 'Withdrawal', 300.00, '2025-02-02');

INSERT INTO AuditTransactions5(AccountID, Amount, TransactionDate, Action)
VALUES 
(1, 500.00, '2025-02-01', 'Deposit'),
(2, 300.00, '2025-02-02', 'Withdrawal');


--Task 1
-- Clustered index
CREATE CLUSTERED INDEX idx_AccountID ON Accounts5(AccountID);

-- Non-clustered index
CREATE NONCLUSTERED INDEX idx_CustomerName ON Customers5(CustomerName);

-- Composite index
CREATE NONCLUSTERED INDEX idx_TransactionDateAmount ON Transactions5(TransactionDate, Amount);

-- Unique index
CREATE UNIQUE INDEX idx_AccountNumber ON Accounts5(AccountNumber);

--Task 2
CREATE FUNCTION fn_CalculateInterest5(@AccountID INT)
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @Balance DECIMAL(10,2);
    DECLARE @Interest DECIMAL(10,2);
    
    SELECT @Balance = Balance FROM Accounts5 WHERE AccountID = @AccountID;
    
    SET @Interest = @Balance * 0.05;
    
    RETURN @Interest;
END;

SELECT AccountID, dbo.fn_CalculateInterest5(AccountID) AS Interest FROM Accounts5;


--Task 3
CREATE PROCEDURE fn_TransferMoney5
    @FromAccountID INT,
    @ToAccountID INT,
    @Amount DECIMAL(10,2)
AS
BEGIN
    DECLARE @FromBalance DECIMAL(10,2);

    BEGIN TRANSACTION;

    SELECT @FromBalance = Balance FROM Accounts5 WHERE AccountID = @FromAccountID;

    IF @FromBalance < @Amount
    BEGIN
        PRINT 'Insufficient Balance!';
        ROLLBACK TRANSACTION;
        RETURN;
    END

    UPDATE Accounts5 SET Balance = Balance - @Amount WHERE AccountID = @FromAccountID;

    UPDATE Accounts5 SET Balance = Balance + @Amount WHERE AccountID = @ToAccountID;

    INSERT INTO Transactions5 (AccountID, TransactionType, Amount, TransactionDate) VALUES
    (@FromAccountID, 'Withdrawal', @Amount, GETDATE()),
    (@ToAccountID, 'Deposit', @Amount, GETDATE());

    COMMIT;
END;

SELECT AccountID, Balance FROM Accounts5 WHERE AccountID IN (1, 2); --before transaction

EXEC dbo.fn_TransferMoney5 @FromAccountID = 1, @ToAccountID = 2, @Amount = 500.00;

SELECT AccountID, Balance FROM Accounts5 WHERE AccountID IN (1, 2); --after transation

SELECT * FROM Accounts5;
SELECT * FROM Transactions5 WHERE AccountID IN (1, 2);


--Task 4
CREATE TRIGGER PreventInsufficientFunds_2
ON Accounts5
INSTEAD OF UPDATE
AS 
BEGIN
    IF EXISTS (SELECT 1 FROM inserted i WHERE i.Balance < 0)
    BEGIN
        PRINT 'Insufficient funds! Transaction aborted';
        ROLLBACK TRANSACTION;
        RETURN;
    END

    UPDATE Accounts5
    SET Balance = i.Balance
    FROM inserted i
    WHERE Accounts5.AccountID = i.AccountID;
END;

UPDATE Accounts5 SET Balance = -500.00 WHERE AccountID = 1;


--Task 5
CREATE TRIGGER AuditTransactions_3 ON Transactions5
AFTER INSERT
AS 
BEGIN
    INSERT INTO AuditTransactions5(AccountID, Amount, TransactionDate, Action)
    SELECT AccountID, Amount, TransactionDate, TransactionType FROM inserted;
END;

INSERT INTO Transactions5(AccountID, TransactionType, Amount, TransactionDate)
VALUES (1, 'Withdrawal', 500.00, GETDATE());

SELECT * FROM AuditTransactions5;
