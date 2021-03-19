-- Mostre somente as horas (sem os minutos e os segundos) da submitted_date de todos registros de purchase_orders. Chame essa coluna de submitted_hour.

/* SELECT HOUR(submitted_date) FROM northwind.purchase_orders AS 'submitted_hour'; */
SELECT HOUR(submitted_date) AS 'submitted_hour' FROM northwind.purchase_orders ;
-- duvida sobre sintaxe tirada com base no PR do Rafael Quinteiro (Honestidade acadêmica).
