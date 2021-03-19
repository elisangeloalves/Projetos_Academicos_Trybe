-- desabilitando a segurança do BD para atualizar os dados de discount do order_details para 15.
-- SET SQL_SAFE_UPDATES = 0;

-- Delete todos os dados em que a unit_price da tabela order_details seja maior que 10.0000.
DELETE FROM northwind.order_details WHERE unit_price > 10.000;
