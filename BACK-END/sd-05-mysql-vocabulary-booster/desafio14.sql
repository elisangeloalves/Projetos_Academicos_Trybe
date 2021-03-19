-- desafio 14

SELECT G.Country AS 'País' FROM (
(SELECT S.country FROM w3schools.suppliers S)
UNION
(SELECT C.country FROM w3schools.customers C)) AS G
ORDER BY G.country LIMIT 5;
-- tira-duvida sobre como nomear a coluna usando o UNION com suporte do PR do kyle;
