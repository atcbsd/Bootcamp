SELECT * FROM language 

CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR (150)
)

INSERT INTO new_film (name) VALUES
('Avatar'),
('The Shawshank Redemption'),
('The Godfather'),
('Pulp Fiction'),
('Inception')

SELECT * FROM new_film

CREATE TABLE customer_reviews (
review_id SERIAL PRIMARY KEY NOT NULL,
film_id INT NOT NULL,
language_id INT NOT NULL,
title VARCHAR(100) NOT NULL,
score INT NOT NULL,
review_text TEXT,
last_update TIMESTAMP DEFAULT current_timestamp,

CONSTRAINT fk_language_id FOREIGN KEY (language_id) REFERENCES language(language_id), 
CONSTRAINT fk_film_id FOREIGN KEY (film_id) REFERENCES new_film (id) ON DELETE CASCADE,
CONSTRAINT score_value CHECK (score > 0 AND score <= 10)
)

INSERT INTO customer_reviews (film_id, language_id, title, score, review_text) VALUES
(1, 1, 'Great movie', 10, 'The firs tmovie I saw when I was a kid'),
(4, 1, 'Not bad', 9, 'A bit long but great story') RETURNING *

SELECT * FROM new_film

DELETE FROM new_film WHERE (name='Pulp Fiction') RETURNING *

SELECT * FROM new_film

UPDATE film SET language_id = '2' WHERE film_id < 10;
UPDATE film SET language_id = '3' WHERE film_id = 100;
UPDATE film SET language_id = '4' WHERE film_id > 104 AND film_id < 115;

SELECT * FROM film

DROP TABLE customer_reviews

SELECT COUNT (*) FROM rental WHERE return_date IS NULL

SELECT rental.rental_id, film.title, film.rental_rate 
FROM (inventory JOIN rental ON inventory.inventory_id = rental.inventory_id)
JOIN film ON film.film_id = inventory.film_id
WHERE return_date IS NULL
ORDER BY rental_rate DESC 
LIMIT 30

-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
select film.title
from (actor join film_actor on actor.actor_id = film_actor.actor_id)
join film on film.film_id = film_actor.film_id
where film.description like '%Sumo%' 
and actor.first_name = 'Penelope' 
and actor.last_name = 'Monroe'

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

SELECT title FROM film
JOIN film_category ON film.film_id = film_category.film_id
WHERE category_id = 6
AND length < 60
AND rating = 'R';


--The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

SELECT film.title, customer.first_name, customer.last_name,
payment.payment_id, payment.amount, return_date
FROM rental JOIN customer
ON rental.customer_id = customer.customer_id
JOIN payment ON rental.rental_id = payment.rental_id
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew'
AND customer.last_name = 'Mahan'
AND rental.return_date < '2005-08-01'
AND rental.return_date > '2005-07-28'
AND payment.amount > 4;

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title 
-- or description, and it looked like it was a very expensive DVD to replace.

SELECT film.title, film.description, film.replacement_cost
FROM film
JOIN inventory
ON film.film_id = inventory.film_id
JOIN rental
ON rental.inventory_id = inventory.inventory_id
JOIN customer
ON rental.customer_id = customer.customer_id
where customer.first_name = 'Matthew'
and customer.last_name = 'Mahan'
and film.title like '%Boat%' 
or film.description like '%Boat%'
order by film.replacement_cost desc
limit 1