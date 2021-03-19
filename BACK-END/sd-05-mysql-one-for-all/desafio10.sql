/* 
Crie uma function chamada de quantidade_musicas_no_historico que exibe a quantidade de músicas que estão presentes atualmente no histórico de reprodução de uma pessoa usuária. Ao receber o código identificador da pessoa, exiba a quantidade de canções em seu histórico de reprodução.

Confirme a execução correta da function, chamando-a e passando o id para a pessoa usuária com o nome igual a "Bill".  */

USE Spotifyclone;

DELIMITER $$
CREATE FUNCTION quantidade_musicas_no_historico(
usuario_id int
)

RETURNS INT READS SQL DATA
BEGIN

DECLARE music_in_history INT;

SELECT COUNT(cancao_id)
FROM SpotifyClone.historico_de_reproducoes H
WHERE H.usuario_id = usuario_id INTO music_in_history;

RETURN music_in_history;

END $$
DELIMITER ;
