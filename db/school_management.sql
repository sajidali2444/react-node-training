-- Database export via SQLPro (https://www.sqlprostudio.com/allapps.html)
-- Exported by sajid at 22-10-2021 11:52.
-- WARNING: This file may contain descructive statements such as DROPs.
-- Please ensure that you are running the script at the proper location.


-- BEGIN TABLE teacher
DROP TABLE IF EXISTS teacher;
CREATE TABLE `teacher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(25) NOT NULL,
  `lastName` varchar(25) DEFAULT NULL,
  `contactNumber` varchar(30) NOT NULL,
  `email` varchar(45) DEFAULT '',
  `dob` datetime NOT NULL,
  `degree` varchar(50) DEFAULT NULL,
  `createdBy` int NOT NULL,
  `createdDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` int NOT NULL,
  `updatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Inserting 8 rows into teacher
-- Insert batch #1
INSERT INTO teacher (id, firstName, lastName, contactNumber, email, dob, degree, createdBy, createdDate, updatedBy, updatedDate) VALUES
(1, 'Sajid', 'Ali', '11111', 'sajid@gmail.com', '2021-10-18 00:00:00', 'BSCS', 1, '2021-10-18 13:54:03', 1, '2021-10-18 13:54:03'),
(2, 'Usman', 'Naheed', '11111', 'sajid@gmail.com', '2021-10-18 00:00:00', 'BSCS', 2, '2021-10-18 13:54:15', 1, '2021-10-18 13:54:15'),
(3, 'Muhmmad', 'Junaid', '11111', 'sajid@gmail.com', '2021-10-18 00:00:00', 'FSC', 1, '2021-10-18 13:55:31', 1, '2021-10-18 13:55:31'),
(4, 'Muhammad', 'Haid', '11111', 'sajid@gmail.com', '2021-10-18 00:00:00', 'Matric', 1, '2021-10-18 13:55:31', 1, '2021-10-18 13:55:31'),
(5, 'teacher2', 'Teacher 2', '11111', 'sajid@gmail.com', '2021-10-18 00:00:00', 'ICS', 2, '2021-10-18 13:56:27', 1, '2021-10-18 13:56:27'),
(6, 'teacher3', 'Teacher 3', '11111', 'sajid@gmail.com', '2021-10-18 00:00:00', 'BA', 2, '2021-10-18 13:56:32', 1, '2021-10-18 13:56:32'),
(7, 'teacher1', 'Teacher 1', '11111', 'teacher1@gmail.com', '2021-10-18 00:00:00', 'BSCS', 1, '2021-10-18 13:57:06', 1, '2021-10-18 13:57:06'),
(8, 'teacher5', 'Teacher 5', '11111', '', '2021-10-18 00:00:00', 'BSCS', 3, '2021-10-18 13:58:04', 1, '2021-10-18 13:58:04');

-- END TABLE teacher

