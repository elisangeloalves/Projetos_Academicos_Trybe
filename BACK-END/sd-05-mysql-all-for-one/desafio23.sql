-- desabilitando a segurança do BD para atualizar os dados de discount do order_details para 15.
-- SET SQL_SAFE_UPDATES = 0;

-- Atualize os dados de discount da tabela order_details para 30 cuja unit_price seja menor que 10.0000.
UPDATE northwind.order_details
SET discount = 30
WHERE unit_price < 10.000;
