-- DESAFIO 7
SELECT UCASE(concat(E.first_name, " ",E.last_name)) AS "Nome completo",
-- (SELECT H.start_date WHERE MONTH(H.start_date) IN(01, 02, 03)) AS "Data de início" ,
H.start_date AS "Data de início",
E.salary AS "Salário"
FROM hr.employees E
INNER JOIN hr.job_history H
ON E.employee_id = H.employee_id
WHERE MONTH(H.start_date) IN(01, 02, 03) -- linha adicionada para emsubstituicao a da linha 3
ORDER BY `Nome completo`, `Data de início`; 
-- tira duvidas pontuiais (linha comentada)sobre sintaxe com apoio do PR do mesmo projeto do FelipeVieira 
