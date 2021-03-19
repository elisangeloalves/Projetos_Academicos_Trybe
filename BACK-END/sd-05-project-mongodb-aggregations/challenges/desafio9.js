/*
Desafio 9
A partir da coleção trips, determine o menor e o maior ano de nascimento. Guarde essa informação,
você precisará dela mais tarde.

Não considere documentos com valores vazios ("") ou em que o campo não existe!

Para este desafio utilize o operador $toInt para converter de string para valor inteiro.

O resultado da sua query deve ter o seguinte formato:

{ "maiorAnoNascimento" : <ano>, "menorAnoNascimento" : <ano> }

*/

// resposta { "maiorAnoNascimento" : 2000, "menorAnoNascimento" : 1885 }

db.trips.aggregate([
  {
    $match: {
      birthYear: { $not: { $eq: "" } },
    },
  },
  // {
  //   $match: {
  //     $and: [
  //       { birthYear: { $ne: "" } },
  //       { birthYear: { $exists: 1 } },
  //     ],
  //   },
  // },
  {
    $addFields: {
      data: { $toInt: "$birthYear" },
    },
  },
  {
    $group:
    {
      _id: null,
      maior: { $max: "$data" },
      menor: { $min: "$data" },
    },
  },
  {
    $project: {
      maiorAnoNascimento: "$maior",
      menorAnoNascimento: "$menor",
      _id: 0,

    },
  },
]).pretty();
