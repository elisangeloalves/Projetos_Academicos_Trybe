/* 
Crie uma VIEW chamada historico_reproducao_usuarios. Essa VIEW deverá ter apenas duas colunas:

A primeira coluna deve possuir o alias "usuario" e exibir o nome da pessoa usuária.

A segunda coluna deve possuir o alias "nome" e exibir o nome da canção ouvida pela pessoa com base no seu histórico de reprodução.

Os resultados devem estar ordenados por nome da pessoa usuária em ordem alfabética e em caso de empate no nome os resultados devem ser ordenados pelo nome da canção em ordem alfabética. */

CREATE VIEW historico_reproducao_usuarios AS
SELECT U.nome_usuario AS usuario, M.cancoes AS nome
FROM SpotifyClone.usuarios U
INNER JOIN SpotifyClone.historico_de_reproducoes H
ON U.id = H.usuario_id
INNER JOIN SpotifyClone.musicas M
ON M.id = H.cancao_id
ORDER BY 1, 2;
