-- implementacao seguindo os exemplos do conteudo do course.
SELECT country_name AS "País",
(SELECT IF (regions.region_id = 1, "incluído", "não incluído" )
FROM hr.regions
where countries.region_id = regions.region_id) AS "Status Inclusão" 
FROM hr.countries
ORDER BY country_name;
