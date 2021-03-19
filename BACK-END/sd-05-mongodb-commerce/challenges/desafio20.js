/* 
Desafio 20
Remova o campo curtidas do item Big Mac.

Para isso, escreva no arquivo desafio20.js duas queries, nesta ordem:

Crie uma query que faça a remoção do campo curtidas do item Big Mac.

Crie uma query que retorne o nome e curtidas de todos os documentos.

 */

db.produtos.updateOne({ nome: "Big Mac" }, { $unset: { curtidas: "" } });

db.produtos.find({}, { nome: 1, curtidas: 1, _id: 0 });
