/*
Desafio 5
Temos outra noite de filme aqui na Trybe e,
desta vez, nós perguntamos à equipe quais são seus atores ou atrizes preferidos.
 Aqui está o resultado:

Sandra Bullock
Tom Hanks
Julia Roberts
Kevin Spacey
George Clooney

Para filmes lançados nos Estados Unidos (campo countries), com tomatoes.viewer.
rating maior ou igual a 3,
crie um novo campo chamado num_favs, que represente quantos atores ou atrizes da
nossa lista de favoritos aparecem no elenco (campo cast) do filme.

Ordene os resultados por num_favs, tomatoes.viewer.rating e title, todos em ordem decrescente.

Por fim, utilizando o mesmo pipeline,
responda: Qual o título do vigésimo quinto filme do resultado dessa agregação?

Dica: coloque a lista de atores e atrizes favoritos
em uma variável e explore operadores como $size e $setIntersection.

O resultado da sua query deve ter o seguinte formato:

{ "title" : <nome_do_filme> }

resposta: { "title" : "The Heat" }

*/

const actors = [
  "Sandra Bullock",
  "Tom Hanks",
  "Julia Roberts",
  "Kevin Spacey",
  "George Clooney",
];

db.movies.aggregate([
  {
    $match: {
      $and: [{ countries: "USA" }, { "tomatoes.viewer.rating": { $gte: 3 } }, { cast: { $in: actors, $exists: 1 } }],
    },
  },
  {
    $addFields: {
      num_favs: {
        $setIntersection: ["$cast", actors],
      },
    },
  },
  {
    $project: {
      num_favs: { $size: "$num_favs" },
      "tomatoes.viewer.rating": 1,
      title: 1,
      _id: 0,
    },
  },
  {
    $sort: { num_favs: -1, "tomatoes.viewer.rating": -1, title: -1 },
  },
  {
    $skip: 24,
  },
  {
    $limit: 1,
  },
  {
    $project: { _id: 0, title: 1 },
  },
]).pretty();
