-- desafio 13 
SELECT ProductName AS "Produto",
Price AS "Preço"
FROM w3schools.order_details O
INNER JOIN w3schools.products P
ON O.ProductID = P.ProductID
WHERE quantity > 80 
ORDER BY 1;
