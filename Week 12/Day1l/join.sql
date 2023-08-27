-- First, all the tables are joined using the JOIN keyword, then the WHERE clause is used:

FROM Employee e JOIN Salary s JOIN Department d
        WHERE e.ID = s.Emp_ID AND e.Dep_ID = d.ID

-- The nested JOIN statement is used with the ON keyword:

SELECT e.ID, e.Name, s.Salary, d.Name
FROM (Employee e JOIN Salary s ON e.ID = s.Emp_ID)
  JOIN Department d ON e.Dep_ID = d.ID

