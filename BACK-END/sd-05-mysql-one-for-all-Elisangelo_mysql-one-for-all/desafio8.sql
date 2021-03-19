/* 
Crie uma trigger chamada trigger_usuario_delete que deve ser disparada sempre que uma pessoa usuária for excluída do banco de dados, refletindo essa exclusão em todas as tabelas que ela estiver.

Teste a funcionalidade correta de sua trigger, fazendo a exclusão da usuária "Thati". */

USE SpotifyClone;

DELIMITER $$
CREATE TRIGGER trigger_usuario_delete
    -- AFTER DELETE ON usuarios
    BEFORE DELETE ON usuarios
    FOR EACH ROW
BEGIN
DELETE FROM historico_de_reproducoes WHERE usuario_id = OLD.id;
DELETE FROM seguidores WHERE usuario_id = OLD.id;
END; 
$$
DELIMITER ;

-- [HONESTIDADE ACADÊMICA] dúvidas sobre DELETE de registros em tabelas solucionada
--  seguindo orientacoes  consultadas no PR do Rafael Quinteiro

-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`spotifyclone`.`historico_de_reproducoes`, CONSTRAINT `fk_nomes_usuarios` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`))
-- o código em DÚVIDA foi comentado na linha 3
