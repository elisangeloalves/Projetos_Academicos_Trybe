-- desabilitando a segurança do BD para atualizar os dados de discount do order_details para 15.
-- ====>  SET SQL_SAFE_UPDATES = 0;  <====

-- Atualize os dados de discount do order_details para 15.
UPDATE northwind.order_details
SET discount = 15
WHERE discount = 0;

-- (Honestidade acadêmica).
-- confirmado a falta de necessidade da linha de codigo (SET SQL_SAFE_UPDATES = 0;)
-- para desabilitar a seguranca do banco de dados para o comando UPDATE, ao rodar os testes no github,
-- pois eu achava que seria necessario este passo devido a rotina dos testes de dropar o BD em cada inicio de teste.
-- apos consultar alguns PRs dos colegas no github, percebi que este era um passo a se fazer apenas localmente 
-- pra rodar o comando UPDATE pela primeira vez e que apos este procedimento o BD aceitaria normalmente a execução deste comando.
