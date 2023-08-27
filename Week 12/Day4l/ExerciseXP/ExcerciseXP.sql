EXERCISE XP WEEK 12 DAY 4 
-- Subqueries
-- Write a query to find the first_name, last_name and salaries of the employees who have a higher salary 
-- than the employee whose last_name is Bull.

SELECT first_name, last_name, salary
FROM employees
WHERE salary > (SELECT salary FROM employees WHERE last_name = 'Bull');


-- Write a SQL subquery to find the first_name and last_name of the employees under a manager who works for a 
-- department based in the United States. Hint : Write single-row and multiple-row subqueries

SELECT first_name, last_name
FROM employees
WHERE manager_id IN (SELECT employee_id 
FROM countries 
WHERE department_id IN (SELECT department_id FROM departments WHERE country_name = 'United States'));


-- Write a SQL subquery to find the first_name and last_name of the employees who are working as managers.

SELECT first_name, last_name
FROM employees
WHERE employee_id IN (SELECT manager_id FROM employees);


-- Write a SQL subquery to find the employee(s) first_name and last_name, which salary is greater than the 
-- average salary of the employees.

SELECT first_name, last_name
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);


-- Write a SQL subquery to find the employee(s) first_name and last_name, which salary is equal to the minimum 
-- salary of their job position.

SELECT first_name, last_name
FROM employees
WHERE salary = (SELECT MIN(salary) FROM employees WHERE job_id = employees.job_id);


-- Write a query to find the names (first_name, last_name) of the employees who are not supervisors.

SELECT first_name, last_name
FROM employees
WHERE employee_id NOT IN (SELECT DISTINCT manager_id FROM employees);


-- Write a SQL subquery to find the employee(s) ID, first name, last name and salary of all employees whose 
-- salary is above the average salary for their departments.

SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = employees.department_id);


-- Write a subquery to find the 5th maximum salary of all salaries.

SELECT DISTINCT salary
FROM employees e1
WHERE 5 = (
  SELECT COUNT(DISTINCT salary)
  FROM employees e2
  WHERE e2.salary >= e1.salary
);


-- Write a subquery to find the 4th minimum salary of all the salaries.

SELECT DISTINCT salary
FROM employees e1
WHERE 4 = (
  SELECT COUNT(DISTINCT salary)
  FROM employees e2
  WHERE e2.salary <= e1.salary
);


-- Write a query to list the department name and number, of all the departments in which there are no employees.

SELECT d.department_name, d.department_id
FROM departments d
LEFT JOIN employees e ON d.department_id = e.department_id
WHERE e.employee_id IS NULL;


-- Joins
-- Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of 
-- all the departments.

SELECT department_name, department_id
FROM departments
WHERE department_id NOT IN (SELECT department_id FROM employees);


-- Write a query to make a join with the employees and departments table to find the name of the employee, 
-- including first_name and last name, department ID and name of departments.


SELECT e.first_name, e.last_name, e.department_id, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id;



-- Write a SQL query to make a join with three tables: employees, departments and locations to find the name, 
-- including first_name and last_name, jobs, department name and ID, of the employees working in London.

SELECT e.first_name, e.last_name, e.job_id, d.department_name, d.department_id
FROM employees e
JOIN departments d ON e.department_id = d.department_id
JOIN locations l ON d.location_id = l.location_id
WHERE l.city = 'London';



-- Write a query to make a join with two tables to find the employee id, last_name as Employee along with 
-- their manager_id and last name as Manager.

SELECT e.employee_id, e.last_name AS "Employee", e.manager_id, m.last_name AS "Manager"
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id;



-- Write a query to make a join with two tables employees and departments, to get the employees working in 
-- each department (retrieve the employees details, and the department name and number).

SELECT e.*, d.department_name, d.department_id
FROM employees e
JOIN departments d ON e.department_id = d.department_id;



-- Write a query to make a join to find the employees who worked in a department which ID is 90 
-- (retrieve the employee ID, job title and number of days the employee worked).

SELECT *
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE d.department_id = 90;



-- Write a query to make a join with three tables, departments, employees, and locations to display the 
-- department name, manager name, and city.

SELECT d.department_name, CONCAT(e.first_name, ' ', e.last_name) AS manager_name, l.city
FROM departments d
JOIN employees e ON d.department_id = e.employee_id
JOIN locations l ON d.location_id = l.location_id;



-- Write a query to make a join with two tables, employees and jobs to display the job title and average 
-- salary of the employees.

SELECT j.job_title, AVG(e.salary) AS average_salary
FROM employees e
JOIN jobs j ON e.job_id = j.job_id
GROUP BY j.job_title;



-- Write a query to make a join with two tables, employees and departments to display department name, 
-- first_name and last_name, hire date and salary for all the managers who achieved a working experience of 
-- more than 15 years.

SELECT d.department_name, e.first_name, e.last_name, e.hire_date, e.salary
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.job_id::text LIKE '%MANAGER%' AND EXTRACT(YEAR FROM AGE(CURRENT_DATE, e.hire_date)) > 15;



-- String Function
-- Write a query to update phone_number records. If the the substring ‘124’ was found in that column, 
-- update the phone_number to ‘999’.

UPDATE employees
SET phone_number = '999'
WHERE phone_number LIKE '%124%';



-- Write a query to find the details of the employees who contain eight or more characters in their first name.

SELECT *
FROM employees
WHERE LENGTH(first_name) >= 8;



-- Write a query to join in uppercase, the first letter of the first_name, with the last_name, with '@example.com' in the email column.

SELECT CONCAT(UPPER(SUBSTRING(first_name, 1, 1)), LOWER(SUBSTRING(first_name, 2))) || '@example.com' AS "EMAIL"
FROM employees;




-- Write a query to get the employee id, email but discard the last three characters of the email.


SELECT employee_id, SUBSTRING(email, 1, LENGTH(email) - 3) AS "EMAIL"
FROM employees;


-- Write a query to display the first word in the job title, if the job title contains more than one words.


SELECT split_part(job_title, ' ', 1) AS first_word
FROM jobs
WHERE job_title LIKE '% %';




-- Write a query that displays the first name and the length of the first name for all employees whose name 
-- starts with the letters ‘A’, ‘J’ or ‘M’. Give each column an appropriate label. Sort the results by the 
-- employees’ first names.

SELECT first_name AS "First Name", LENGTH(first_name) AS "First Name Length"
FROM employees
WHERE first_name LIKE 'A%' OR first_name LIKE 'J%' OR first_name LIKE 'M%'
ORDER BY first_name;



-- Write a query to display the first name and salary for all employees. Display the salary with the $ symbol. 
-- Label the column as SALARY.


SELECT first_name, CONCAT('$', salary) AS "SALARY"
FROM employees;