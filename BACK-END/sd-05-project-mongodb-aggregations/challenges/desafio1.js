/*
Ajude a Trybe a escolher um filme para a próxima noite! Baseado em uma pesquisa, decidimos que
os filmes em potencial devem atender aos seguintes critérios:

imdb.rating deve ser ao menos 7;
genres não deve conter Crime ou Horror;
rated deve ser igual a PG ou G;
languages contém English e Spanish.
Utilizando a coleção movies, faça um pipeline que retorne todos esses filmes.

Sua query deve retornar 41 documentos.

*/

db.movies.aggregate([{ $match: { $and: [{ "imdb.rating": { $gte: 7 } },
  { genres: { $nin: ["Crime", "Horror"] } },
  { rated: { $in: ["PG", "G"] } },
  { languages: "English" },
  { languages: "Spanish" }],
},
},
{
  $count: "quant",
},

]).pretty();
