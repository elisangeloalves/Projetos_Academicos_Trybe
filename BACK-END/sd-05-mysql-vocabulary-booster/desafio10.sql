-- desafio 19 fo projeto vocabulary booster

SELECT ProductName AS "Produto",
(MIN(Quantity)) AS "Mínima",
(MAX(Quantity)) AS "Máxima",
ROUND(AVG(Quantity), 2) AS "Média"
FROM w3schools.products P
INNER JOIN  w3schools.order_details O
ON O.ProductID = P.ProductID
GROUP BY `Produto`
HAVING `Média` > 20.00
ORDER BY 4, 1;
