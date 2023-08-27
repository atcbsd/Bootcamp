CREATE TABLE items (
	id SERIAL PRIMARY KEY, 
	name VARCHAR (50) NOT NULL,
	price INTEGER NOT NULL
)

SELECT * FROM items;

CREATE TABLE customers (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR (100) NOT NULL,
	last_name VARCHAR (100) NOT NULL
)

SELECT * FROM customers;

INSERT INTO items (name, price)
VALUES ('Small desk', 100)

SELECT * FROM items;

INSERT INTO items (name, price)
VALUES ('Large desk', 300)

INSERT INTO items (name, price)
VALUES ('Fan', 80)

SELECT * FROM items;

INSERT INTO customers (first_name, last_name) 
VALUES ('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson')

SELECT * FROM customers;

SELECT * FROM items;

SELECT * FROM items WHERE price > 80;

SELECT * FROM items WHERE price <= 300;

SELECT * FROM customers WHERE last_name = 'Smith';

SELECT * FROM customers WHERE last_name = 'Jones';

SELECT * FROM customers WHERE first_name != 'Scott';