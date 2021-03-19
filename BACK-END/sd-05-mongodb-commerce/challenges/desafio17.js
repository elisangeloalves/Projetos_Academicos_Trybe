/* 
Desafio 17
Conte quantos documentos contêm as palavras frango e hamburguer utilizando o operador $text.

Para isso, escreva no arquivo desafio17.js duas queries, nesta ordem:

Crie uma query que faça a criação de um índice do tipo text 
no campo descricao com o idioma padrão portuguese.

Crie uma query que retorne a quantidade de documentos que contêm as palavras 
frango e hamburguer utilizando o operador $text.

 */

db.produtos.createIndex({descricao: "text"}, { default_language: "portuguese"});

db.produtos.count({
    $text: { $search: "frango hamburguer"}
  });
