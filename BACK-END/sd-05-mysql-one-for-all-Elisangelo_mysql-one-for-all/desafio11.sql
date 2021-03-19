/* 
Crie uma VIEW chamada cancoes_premium que exiba o nome e a quantidade de vezes que cada canção foi tocada por pessoas usuárias do plano familiar ou universitário, de acordo com os detalhes a seguir:

A primeira coluna deve exibir o nome da canção, com o alias "nome";

A segunda coluna deve exibir a quantidade de pessoas que já escutaram aquela canção, com o alias "reproducoes";

Seus resultados devem estar agrupados pelo nome da canção e ordenados em ordem alfabética. */

CREATE VIEW cancoes_premium AS
SELECT M.cancoes AS 'nome' ,
COUNT(R.usuario_id) AS 'reproducoes'
FROM SpotifyClone.musicas M 
INNER JOIN SpotifyClone.historico_de_reproducoes R
ON M.id = R.cancao_id
INNER JOIN SpotifyClone.usuarios U
ON U.id = R.usuario_id
WHERE plano_id <>1
GROUP BY `nome`
ORDER BY `nome`;
