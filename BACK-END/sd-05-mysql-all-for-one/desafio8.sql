-- Faça uma consulta que retorne três colunas. Na primeira coluna, exiba a soma de 5 + 6 (essa soma deve ser realizada pelo SQL).
-- Na segunda coluna deve haver a palavra "de". E por fim, na terceira coluna, exiba a soma de 2 + 8 (essa soma deve ser realizada pelo SQL).
-- A primeira coluna deve se chamar "A", a segunda coluna deve se chamar "Trybe" e a terceira coluna deve se chamar "eh".
-- Não use colunas pre-existentes, apenas o que for criado na hora.

--  ====>   SELECT 5+6 AS 'A', CONCAT('de') AS 'Trybe', CONCAT(2+8) AS 'eh';   <=====
SELECT 5+6 AS 'A', 'de' AS 'Trybe', 2+8 AS 'eh';


-- (Honestidade acadêmica).
-- depois de consultar PR dos amigos (Rafael Quinteiro) puder constatar o uso errado da funcao CONCAT()
-- que retornava os valores corretos aparentemente, porem os testes identficavam que o tipo (formato) do dado
--  retornado  nao era o esperado (string) pois esperava-se no formato numérico ( number).
