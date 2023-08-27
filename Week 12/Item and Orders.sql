CREATE or REPLACE FUNCTION user_orders (ord INT, usr varchar(50)) 
    RETURNS INT AS $totalprice$
    BEGIN
       RETURN(
           SELECT price FROM orders 
           INNER JOIN users ON users.user_id = orders.user_id
           INNER JOIN items ON items.item_id = orders.item_id 
           WHERE orders.order_id = ord AND users.last_name = usr
       );
    END;
    $totalprice$ LANGUAGE plpgsql;

SELECT* FROM user_orders(5050,'Clonney');

