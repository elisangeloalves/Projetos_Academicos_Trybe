-- Mostre apenas os ids dos 5 últimos registros da tabela products (a ordernação deve ser baseada na coluna id).

  SELECT id FROM northwind.products ORDER BY id DESC LIMIT 5;

-- correcao de sintaxe feita baseado no PR do Rafael Quinteiro, pois a marcacao de erro no VS, mesmo estando correto nos traz duvidas.
