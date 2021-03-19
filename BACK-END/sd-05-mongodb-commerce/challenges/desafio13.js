/* 
Desafio 13
Adicione o elemento muito sódio ao final do array tags nos produtos em que 
o percentual de sódio seja maior ou igual a 40.

Para isso, escreva no arquivo desafio13.js duas queries, nesta ordem:

Crie uma query que faça a adição do elemento muito sódio ao final do array tags 
nos produtos em que o percentual de sódio seja maior ou igual a 40.

Crie uma query que retorne o nome e tags de todos os documentos.

 */

db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } },
    },
  },
  { $push: { tags: "muito sódio" } }
);

//  db.produtos.find({valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gte: 40 }}}}, );

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });
