/* 
Crie uma procedure chamada albuns_do_artista que recebe como parâmetro o nome de uma pessoa artista e em retorno deve exibir as seguintes colunas:

O nome da pessoa artista, com o alias "artista".

O nome do álbum, com o alias "album".

Os resultados devem ser ordenados pelo nome do álbum em ordem alfabética.

Confirme a execução correta da procedure, chamando-a e passando o nome igual a "Walter Phoenix". */

USE Spotifyclone;

DELIMITER $$
CREATE PROCEDURE albuns_do_artista(
IN nome_do_artista VARCHAR(50)
)
BEGIN
SELECT A.nome_artista AS artista, titulo_album AS album
    FROM SpotifyClone.artistas A
    INNER JOIN SpotifyClone.albuns AL
    ON A.id = AL.artista_id
    WHERE nome_artista = nome_do_artista
    ORDER BY album;
END $$
DELIMITER ;
