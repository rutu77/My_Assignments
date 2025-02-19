CREATE TABLE Patient_1(
	PatientId INT PRIMARY KEY,
	Name VARCHAR(10),
	Age INT,
	Disease VARCHAR(50),
	DoctorAssigned VARCHAR(50)
);


INSERT INTO Patient_1 (PatientId, Name, Age, Disease, DoctorAssigned) VALUES
(1, 'rutuja', 20, 'cough and cold', 'sandhya'),
(2, 'prachi', 21, 'gastro', 'asihwarya'),
(3, 'ashwini', 22, 'Hypertension', 'abid'),
(5, 'yash', 61, 'cold', 'rutuja'),
(6, 'shreya', 21, 'gastro', 'sanika'),
(7, 'mona', 67, 'Hypertension', 'rutuja'),
(8, 'shruti', 21, 'cold', 'rutuja');


SELECT * FROM Patient_1;


SELECT * FROM Patient_1 WHERE Age > 60;


SELECT * FROM Patient_1 WHERE DoctorAssigned ='rutuja';

SELECT Disease, COUNT(*) AS PatientCount
FROM Patient_1
GROUP BY Disease;




