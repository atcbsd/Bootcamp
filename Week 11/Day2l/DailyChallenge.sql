CREATE TABLE actors (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL,
	birth_date DATE NOT NULL,
	number_oscars VARCHAR (50) NOT NULL
)

INSERT INTO actors (first_name, last_name, birth_date, number_oscars)
VALUES ('Meryl', 'Streep', '1949-06-22', '3'),
('Daniel', 'Day-Lewis', '1957-04-29', '3'),
('Katharine', 'Hepburn', '1907-05-12', '4'),
('Denzel', 'Washington', '1954-12-28', '2'),
('Cate', 'Blanchett', '1969-05-14', '2')

SELECT * FROM actors