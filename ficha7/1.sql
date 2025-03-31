CREATE DATABASE backend;
USE backend;

CREATE TABLE user (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Firstname VARCHAR(50),
    Lastname VARCHAR(50),
    Profession VARCHAR(50),
    Age INT
);

INSERT INTO user (Firstname, Lastname, Profession, Age) VALUES
('Ana', 'Santos', 'Médica', 35),
('Carlos', 'Ferreira', 'Professor', 40),
('Mariana', 'Lima', 'Advogada', 28);


select * from user where Age = 40 and Profession = "tio";
	