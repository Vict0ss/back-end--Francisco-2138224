CREATE DATABASE projeto1;
USE projeto1;

CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    barcode VARCHAR(100),
    department VARCHAR(100),
    review INT,
    description VARCHAR(255),
    weight INT,
    price INT,
    created TIME,
    comment JSON
);
INSERT INTO Product (name, barcode, department, review, description, weight, price, created, comment)
VALUES 
('Café Torrado', '7891234567890', 'Alimentos', 4, 'Café torrado e moído de alta qualidade.', 500, 15, CURTIME(), '[{"user":"joao", "msg":"Muito bom!"}]'),

('Sabonete Neutro', '7890987654321', 'Higiene', 5, 'Sabonete suave para peles sensíveis.', 100, 3, CURTIME(), '[{"user":"maria", "msg":"Cheiroso e suave"}]'),

('Arroz Branco', '7894561237890', 'Alimentos', 3, 'Arroz tipo 1, grãos selecionados.', 1000, 8, CURTIME(), '[{"user":"lucas", "msg":"Preço justo"}]');
