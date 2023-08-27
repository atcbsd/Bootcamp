CREATE TABLE customer (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL
)

CREATE TABLE customer_profile (
	id SERIAL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT false,
	customer_id INTEGER REFERENCES customer(id)
)

INSERT INTO customer (first_name, last_name)
VALUES ('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive')

INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES (
	(SELECT true FROM customer WHERE first_name = 'John' AND last_name = 'Doe'),
	(SELECT id FROM customer WHERE first_name = 'John' AND last_name = 'Doe')
), (
	(SELECT false FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'),
	(SELECT id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu')
)

SELECT c.first_name 
FROM customer c 
JOIN customer_profile cp ON c.id = cp.customer_id 
WHERE cp.isLoggedIn = true

SELECT c.first_name, cp.isLoggedIn
FROM customer c 
LEFT JOIN customer_profile cp ON c.id = cp.customer_id

SELECT COUNT (*) AS num_customers_not_logged_in
FROM customer c
LEFT JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = false

CREATE TABLE book (
	book_id SERIAL PRIMARY KEY,
	title VARCHAR (100) NOT NULL, 
	author VARCHAR (100) NOT NULL
)

INSERT INTO book (title, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')

CREATE TABLE student (
	student_id SERIAL PRIMARY KEY,
	name VARCHAR (50) NOT NULL UNIQUE,
	age INTEGER CHECK (age <= 15)
)

INSERT INTO student (name, age) 
VALUES ('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)

CREATE TABLE library (
	book_fk_id INTEGER REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_fk_id INTEGER REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	borrow_date DATE,
	PRIMARY KEY (book_fk_id, student_fk_id)
)

INSERT INTO library (book_fk_id, student_fk_id, borrow_date)
VALUES (
  (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
  (SELECT student_id FROM Student WHERE name = 'John'),
  '2022-02-15'
), (
  (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
  (SELECT student_id FROM Student WHERE name = 'Bob'),
  '2021-03-03'
), (
  (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
  (SELECT student_id FROM Student WHERE name = 'Lera'),
  '2021-05-23'
), (
  (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
  (SELECT student_id FROM Student WHERE name = 'Patrick'),
  '2022-06-10'
)

-- Select all columns from the junction table
SELECT *
FROM library;

-- Select the name of the student and the title of the borrowed books
SELECT s.name AS student_name, b.title AS book_title
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id;

-- Select the average age of the children who borrowed the book "Alice in Wonderland"
SELECT AVG(s.age) AS average_age
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- Delete a student from the Student table
DELETE FROM student
WHERE name = 'John';