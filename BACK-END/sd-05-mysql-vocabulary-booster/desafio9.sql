-- desafio 9 do projeto vocabulary booster

SELECT concat(E.FirstName, " ",E.LastName) AS "Nome completo" ,
COUNT(OrderID) AS 'Total de pedidos'
FROM w3schools.employees E
INNER JOIN w3schools.orders O
ON E.EmployeeID = O.EmployeeID
GROUP BY `Nome completo`
ORDER BY 2;
