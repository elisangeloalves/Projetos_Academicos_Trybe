/* 
Crie uma VIEW chamada estatisticas_musicais que exiba três colunas:

A primeira coluna deve exibir a quantidade total de canções. Dê a essa coluna o alias "cancoes".

A segunda coluna deve exibir a quantidade total de artistas e deverá ter o alias "artistas".

A terceira coluna deve exibir a quantidade de álbuns e deverá ter o alias "albuns".
 */
CREATE VIEW SpotifyClone.estatisticas_musicais AS
SELECT COUNT(M.cancoes) as cancoes,
(select COUNT(*) from SpotifyClone.artistas) AS 'artistas',
(select COUNT(*) from SpotifyClone.albuns) AS 'albuns'
FROM SpotifyClone.musicas M;
