-- seguindo instrucoes do especialista caciquinho
SELECT JOBS.job_title AS "Cargo",
ROUND(AVG(EM.salary),2) AS "Média salarial",
(CASE
WHEN ROUND(AVG(EM.salary),2) BETWEEN 2000 AND 5800 THEN "Júnior"
WHEN ROUND(AVG(EM.salary),2) BETWEEN 5801 AND 7500 THEN "Pleno"
WHEN ROUND(AVG(EM.salary),2) BETWEEN 7501 AND 10500 THEN "Sênior"
WHEN ROUND(AVG(EM.salary),2) > 10500 THEN "CEO"
END) AS "Senioridade"
FROM hr.employees AS EM
INNER JOIN hr.jobs AS JOBS
ON JOBS.job_id = EM.job_id
GROUP BY Cargo
ORDER BY `Média salarial`, Cargo;
