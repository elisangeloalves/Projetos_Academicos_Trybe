SELECT job_title AS "Cargo",
(max_salary - min_salary) AS "Variação Salarial",
/* ROUND((min_salary*12),2) AS "Média mínima mensal",
ROUND((max_salary*12),2) AS "Média máxima mensal" */
ROUND((min_salary/12),2) AS "Média mínima mensal",
ROUND((max_salary/12),2) AS "Média máxima mensal"
FROM hr.jobs
-- GROUP BY Cargo
ORDER BY `Variação Salarial`, Cargo;
-- requisito confuso, tira-duvidas junto ao PR do Felipe Vieira
