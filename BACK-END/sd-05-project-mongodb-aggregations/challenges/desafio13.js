/*
Desafio 13
Determine a duração média das viagens iniciadas no dia 10/03/2016, em minutos.
Arredonde o resultado para cima.

O resultado da sua query deve ter o seguinte formato:

{ "duracaoMediaEmMinutos" : <duracao_media_em_minutos> }

*/
//  resposta: { "duracaoMediaEmMinutos" : 18 }

// falta terminar a query
db.trips.aggregate([
  {
    $match: {
      startTime: Date("2016-03-10"),
    },
  },
  {
    $group: {
      _id: "$startTime",
      duracaoMediaEmMinutos: { $avg: "$starTime" },
    },
  },
  { $count: "day" },
]).pretty();
