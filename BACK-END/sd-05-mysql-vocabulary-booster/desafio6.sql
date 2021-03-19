-- desafio 6 implementado com suporte de tira duvidas junto ao PR do KyleFelipe
SELECT concat(E.first_name, " ",E.last_name) AS "Nome completo" ,
J.job_title AS "Cargo" ,
H.start_date AS "Data de início do cargo",
D.department_name AS "Departamento"
FROM hr.departments AS D
INNER JOIN hr.job_history AS H
ON D.department_id = H.department_id
INNER JOIN hr.jobs as J
ON J.job_id = H.job_id
INNER JOIN hr.employees AS E
ON E.employee_id = H.employee_id
ORDER BY `Nome completo`DESC, job_title; 
