/* 
Desafio 9
Remova o último ingrediente do sanduíche Cheddar McMelt.

Para isso, escreva no arquivo desafio9.js duas queries, nesta ordem:

Crie uma query que faça a remoção do último ingrediente no sanduíche Cheddar McMelt.

Crie uma query que retorne o nome e ingredientes de todos os documentos.

 */

db.produtos.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop: { ingredientes: 1 } }
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
