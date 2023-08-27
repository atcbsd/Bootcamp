SELECT first_name, last_name, salary
FROM employees
WHERE salary > (SELECT salary FROM employees WHERE last_name = 'Bull')

SELECT first_name, last_name
FROM employees
WHERE manager_id IN (SELECT employee_id 
FROM countries 
WHERE department_id IN (SELECT department_id FROM departments WHERE country_name = 'United States'));

SELECT first_name, last_name
FROM employees
WHERE employee_id IN (SELECT manager_id FROM employees);

SELECT first_name, last_name
FROM employees
WHERE employee_id IN (SELECT manager_id FROM employees);

SELECT first_name, last_name
FROM employees
WHERE salary > ( SELECT AVG(salary) FROM employees);

SELECT first_name, last_name
FROM employees
JOIN (
    SELECT AVG(salary) AS avg_salary
    FROM employees
) AS avg_table
ON employees.salary > avg_table.avg_salary;


SELECT first_name, last_name
FROM employees
WHERE salary = (SELECT MIN(salary) FROM employees WHERE job_id = employees.job_id);

SELECT first_name, last_name
FROM employees
WHERE employee_id NOT IN (SELECT DISTINCT manager_id FROM employees);

SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = employees.department_id);

SELECT DISTINCT salary
FROM employees e1
WHERE 5 = (
  SELECT COUNT(DISTINCT salary)
  FROM employees e2
  WHERE e2.salary >= e1.salary
);

SELECT DISTINCT salary
FROM employees e1
WHERE 4 = (
  SELECT COUNT(DISTINCT salary)
  FROM employees e2
  WHERE e2.salary <= e1.salary
);

SELECT d.department_name, d.department_id
FROM departments d
LEFT JOIN employees e ON d.department_id = e.department_id
WHERE e.employee_id IS NULL;


SELECT department_name, department_id
FROM departments
WHERE department_id NOT IN (SELECT department_id FROM employees);

SELECT e.first_name, e.last_name, e.department_id, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id;

SELECT e.first_name, e.last_name, e.job_id, d.department_name, d.department_id
FROM employees e
JOIN departments d ON e.department_id = d.department_id
JOIN locations l ON d.location_id = l.location_id
WHERE l.city = 'London';


SELECT e.employee_id, e.last_name AS "Employee", e.manager_id, m.last_name AS "Manager"
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id;


SELECT e.*, d.department_name, d.department_id
FROM employees e
JOIN departments d ON e.department_id = d.department_id;


SELECT *
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE d.department_id = 90;


SELECT d.department_name, CONCAT(e.first_name, ' ', e.last_name) AS manager_name, l.city
FROM departments d
JOIN employees e ON d.department_id = e.employee_id
JOIN locations l ON d.location_id = l.location_id;

SELECT j.job_title, AVG(e.salary) AS average_salary
FROM employees e
JOIN jobs j ON e.job_id = j.job_id
GROUP BY j.job_title;

SELECT d.department_name, e.first_name, e.last_name, e.hire_date, e.salary
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.job_id::text LIKE '%MANAGER%' AND EXTRACT(YEAR FROM AGE(CURRENT_DATE, e.hire_date)) > 15;

SELECT *
FROM employees
WHERE LENGTH(first_name) >= 8;

SELECT CONCAT(UPPER(SUBSTRING(first_name, 1, 1)), LOWER(SUBSTRING(first_name, 2))) || '@example.com' AS "EMAIL"
FROM employees;


SELECT CONCAT(UPPER(SUBSTRING(first_name, 1, 1)), UPPER(last_name)) || '@example.com' AS "EMAIL"
FROM employees;



