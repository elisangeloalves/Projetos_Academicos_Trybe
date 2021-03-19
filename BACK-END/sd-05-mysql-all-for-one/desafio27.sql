-- desabilitando a segurança do BD para atualizar os dados de discount do order_details para 15.
-- SET SQL_SAFE_UPDATES = 0;

-- Delete todos os dados da tabela order_details.
DELETE FROM northwind.order_details;
