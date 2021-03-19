/*
Desafio 10
Encontre a média de viagens por tipo de usuário. Exiba o valor em horas com apenas duascasas
decimais e a média de viagens ordenada de forma crescente. Para arredondar a média use o $round.

O resultado da sua query deve ter o seguinte formato:

{ "tipo" : <tipo>, "duracaoMedia" : <duracaoMedia> }
// ...

*/
// resposta:
// { "tipo" : "Subscriber", "duracaoMedia" : 0.22 }
// { "tipo" : "Customer", "duracaoMedia" : 0.71 }

db.trips.aggregate([
  {
    $group: {
      _id: "$usertype",
      media: { $avg: { $subtract: ["$stopTime", "$startTime"] } },
    },
  },
  {
    $addFields: {
      duracaoMedia: { $round: [{ $divide: ["$media", 3600000] }, 2] },
    },
  },
  {
    $sort: { duracaoMedia: 1 },
  },
  {
    $project: { _id: 0, tipo: "$_id", duracaoMedia: "$duracaoMedia" },
  },
]).pretty();
