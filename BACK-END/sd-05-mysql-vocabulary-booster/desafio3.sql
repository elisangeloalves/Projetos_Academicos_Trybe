-- implementacao seguindo os exemplos do conteudo do course.
SELECT job_title AS "Cargo",
(max_salary - min_salary) AS "Diferença entre salários máximo e mínimo"
FROM hr.jobs
ORDER BY (max_salary - min_salary), job_title;
