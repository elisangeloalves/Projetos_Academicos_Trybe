-- desafio7
/* 
Mostre uma relação de todos os álbuns produzidos por cada pessoa artista, com a quantidade de seguidores que ela possui, de acordo com os detalhes a seguir. Para tal, crie uma VIEW chamada perfil_artistas, com as seguintes colunas:

A primeira coluna deve exibir o nome da pessoa artista, com o alias "artista".

A segunda coluna deve exibir o nome do álbum, com o alias "album".

A terceira coluna deve exibir a quantidade de pessoas seguidoras que aquela pessoa artista possui e deve possuir o alias "seguidores".

Seus resultados devem estar ordenados de forma decrescente, baseando-se no número de pessoas seguidoras. Em caso de empate no número de pessoas, ordene os resultados pelo nome da pessoa artista em ordem alfabética e caso há artistas com o mesmo nome, ordene os resultados pelo nome do álbum alfabeticamente. */

CREATE VIEW perfil_artistas AS
SELECT A.nome_artista AS 'artista' ,
AL.titulo_album AS 'album',
COUNT(S.usuario_id) AS 'seguidores'
FROM SpotifyClone.artistas A
INNER JOIN SpotifyClone.albuns AL
ON A.id = AL.artista_id
INNER JOIN  SpotifyClone.seguidores S 
ON A.id = S.artista_id 
-- GROUP BY `album`
GROUP BY `artista`, `album`
ORDER BY `seguidores` DESC, `artista`, `album`;

-- [HONESTIDADE ACADÊMICA] dúvidas sobre quantidade de parametros para funcionar o GROUP BY solucionada
--  seguindo orientacoes  consultadas no PR do Kyle Felipe

-- Error Code: 1055. Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'spotifyclone.A.nome_artista' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by
-- o código em DÚVIDA foi comentado na linha 11
