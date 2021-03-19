-- desafio 8
SELECT ContactName AS 'Nome de contato',
ShipperName as 'Empresa que fez o envio',
OrderDate as 'Data do pedido'
FROM w3schools.customers C
INNER JOIN w3schools.orders O
ON C.CustomerID = O.CustomerID
INNER JOIN w3schools.shippers S
ON O.ShipperID = S.ShipperID
WHERE S.ShipperName IN("Speedy Express", "United Package")
ORDER BY 1, 2, 3;
