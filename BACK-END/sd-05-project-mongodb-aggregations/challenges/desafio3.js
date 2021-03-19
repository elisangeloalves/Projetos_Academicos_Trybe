/*
Desafio 3
Agora que você tem os campos essenciais, retorne esses
filmes ordenados por ano e nota IMDB de forma decrescente
e o título por ordem alfabética (nesta ordem de desempate).

O resultado da sua query deve ter o seguinte formato:

{ "titulo" : "McFarland, USA", "avaliado" :
"PG", "notaIMDB" : 7.5, "votosIMDB" : 14091, "ano" : 2015 }
// Demais documentos

*/

db.movies.aggregate([
  { $match: { $and: [
    { genres: { $nin: ["Crime", "Horror"] } },
    { "imdb.rating": { $gte: 7 } },
    {
      rated: { $in: ["PG", "G"] },
    },
    {
      languages: "English",
    },
    {
      languages: "Spanish",
    },
  ],
  },
  },
  {
    $project: {
      _id: 0,
      titulo: "$title",
      avaliado: "$rated",
      notaIMDB: "$imdb.rating",
      votosIMDB: "$imdb.votes",
      ano: "$year",
    },
  },
  {
    $sort: {
      ano: -1,
      notaIMDB: -1,
      titulo: 1,
    },
  },
]).pretty();
