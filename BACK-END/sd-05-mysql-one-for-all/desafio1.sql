
DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE SpotifyClone;

USE SpotifyClone;

CREATE TABLE IF NOT EXISTS `planos`(
    `id` TINYINT NOT NULL AUTO_INCREMENT,
    `tipo_plano` VARCHAR(15) NOT NULL,
    `valor_plano` DECIMAL(5, 2) NOT NULL,
    PRIMARY KEY(`id`)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS `usuarios`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome_usuario` VARCHAR(50),
    `idade` TINYINT NULL,
    `plano_id` TINYINT NULL,
    PRIMARY KEY(`id`),
    CONSTRAINT `fk_tipos_planos`
    FOREIGN KEY (`plano_id`)
    REFERENCES `planos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) engine = InnoDB;



CREATE TABLE IF NOT EXISTS `artistas`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome_artista` VARCHAR(50) NULL,
    PRIMARY KEY(`id`)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS `albuns`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `titulo_album` VARCHAR(50) NULL,
    `artista_id` INT NULL,
    PRIMARY KEY(`id`),
    CONSTRAINT `fk_nomes_artistas`
    FOREIGN KEY (`artista_id`)
    REFERENCES `artistas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS `musicas`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `cancoes` VARCHAR(50) NULL ,
    `album_id` INT NULL ,
    PRIMARY KEY(`id`),
  CONSTRAINT `fk_nomes_albuns`
  FOREIGN KEY (`album_id`)
  REFERENCES `albuns` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS `historico_de_reproducoes`(
    `usuario_id` INT NOT NULL,
    `cancao_id` INT NOT NULL,
    PRIMARY KEY(`usuario_id`, `cancao_id`),
    CONSTRAINT `fk_nomes_usuarios`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_nomes_cancoes`
    FOREIGN KEY (`cancao_id`)
    REFERENCES `musicas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS `seguidores`(
    `usuario_id` INT NOT NULL,
    `artista_id` INT NOT NULL,
    PRIMARY KEY(`usuario_id`, `artista_id`),
    CONSTRAINT `fk_nomes_usuarios_seguidores`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_nomes_artistas_seguidores`
    FOREIGN KEY (`artista_id`)
    REFERENCES `artistas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) engine = InnoDB;

INSERT INTO `planos` (`tipo_plano`,`valor_plano`) 
VALUES
('gratuito', 0.00),
('familiar', 7.99 ),
('universitário',5.99);

INSERT INTO `usuarios` (`nome_usuario`,`idade`, `plano_id`) 
VALUES
('Thati', 23, 1 ),
('Cintia', 35, 2 ),
('Bill', 20, 3),
('Roger', 45, 1);

INSERT INTO `artistas` (`nome_artista`) 
VALUES
('Walter Phoenix'),
('Peter Strong'),
('Lance Day'),
('Freedie Shannon');


INSERT INTO `albuns` (`titulo_album`, `artista_id`) 
VALUES
('Envious', 1),
('Exuberant', 1),
('Hallowed Steam', 2),
('Incandescent', 3),
('Temporary Culture', 4);

INSERT INTO `musicas` (`cancoes`, `album_id`) 
VALUES
('Soul For Us', 1),
('Troubles Of My Inner Fire', 2),
('Magic Circus', 3),
('Fantasy For Me', 4),
('Thang Of Thunder', 4),
('Reflections Of Magic', 1),
('Dance With Her Own', 1),
('Time Fireworks', 2),
('Honey, So Do I', 3),
('Sweetie, Let\'s Go Wild', 3),
('She Knows', 3),
('Celebration Of More', 4),
('Rock His Everything', 4),
('Home Forever', 4),
('Diamond Power', 4),
('Honey, Let\'s Be Silly', 4),
('Words Of Her Life', 5),
('Without My Streets', 5);

INSERT INTO `historico_de_reproducoes` (`usuario_id`,`cancao_id`) 
VALUES
(1, 1),
(1, 3),
(1, 15),
(1, 5),
(2, 16),
(2, 14),
(2, 17),
(2, 6),
(3, 2),
(3, 3),
(3, 5),
(4, 7),
(4, 12),
(4, 18);

INSERT INTO `seguidores` (`usuario_id`,`artista_id`) 
VALUES
(1, 1),
(1, 4),
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(3, 1),
(4, 4);

/* 
Seu desafio agora é pegar toda a estrutura que você criou com base na planilha na seção anterior e transformá-la em código SQL. Os detalhes estão a seguir:

Crie um banco com o nome de SpotifyClone;

Providencie as queries necessárias para criar tabelas normalizadas que atendam aos requisitos descritos na seção anterior;

Providencie as queries necessárias para popular as tabelas de acordo com os dados listados na seção anterior;

Crie um arquivo de configurações desafio1.json, que mapeará em qual tabela e coluna se encontram as informações necessárias para a avaliação automatizada deste desafio. As configurações devem possuir o seguinte formato: */
