SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- PREDICTION: 3 
-- OUTCOME: 0 (NULL is something it is a marker or placeholder. 
-- NULL is not technically VALUE it is the absence of a VALUE)
-- It is not true or false it is just null so we cant compare.

SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- PREDICTION: 2
-- OUTCOME: 2 Since we cant compare the null it is simply going to be 2.

SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- PREDICTION: 0
-- OUTCOME: 0 (Cant compare something to NULL)

 SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
    
-- PREDICTION: 3
-- OUTCOME: 2 (Once again cant compare something to NULL)