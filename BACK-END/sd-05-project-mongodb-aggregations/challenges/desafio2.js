/*
Desafio 2
A escolha do filme da noite foi um sucesso, mas infelizmente
ficamos com nossa banda de internet quase esgotada,
e ainda precisamos de uma nova recomendação de filme. Para diminuir o volume de dados trafegados,
utilizando o mesmo pipeline anterior, retorne apenas
os campos title, rated, imdb.rating, imdb.votes e year,
modificando seus nomes para titulo, avaliado, notaIMDB, votosIMDB e ano, respectivamente.

O resultado da sua query deve ter o seguinte formato:

{ "titulo" : "A Streetcar Named Desire", "avaliado" :
"PG", "notaIMDB" : 8.1, "votosIMDB" : 72364, "ano" : 1951 }
// Demais documentos

*/

// [HONESTIDADE ACADEMICA - Aqui foi pesquisado uma maneira de validar a query
// no ESLint para ele para de reclamar que havia codigos identicos já que era querys identicas
// (mesmo estando em arquivos diferentes desafio 1, 2 e 3) PR consultado => Felipe Vieira]

db.movies.aggregate([
  {
    $match: {
      genres: { $nin: ["Crime", "Horror"] },
      rated: { $in: ["PG", "G"] },
      languages:
        {
          $all: ["English", "Spanish"],
        },
      "imdb.rating": { $gte: 7 },
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
]).pretty();
