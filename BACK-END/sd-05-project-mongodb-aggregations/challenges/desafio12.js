/*
Desafio 12
Agora que você já sabe o dia com mais viagens, determine qual estação tem o maior número de
viagens nesse dia da semana.Mas, para isso, adicione o que for necessário ao pipeline anterior.
Exiba apenas o nome da estação e o total de viagens.

Dica: Utilize o operador $dayOfWeek para extrair o dia da semana como um número de uma data.

O resultado da sua query deve ter o seguinte formato:

{ "nomeEstacao" : <nome_da_estacao>, "total" : <total_de_viagens> }

*/
// resposta: { "nomeEstacao" : "Pershing Square North", "total" : 5391 }

db.trips.aggregate([
  {
    $match: {
      $expr: { $eq: [{ $dayOfWeek: "$startTime" }, 5] },
    },
  },
  {
    $group: {
      _id: "$startStationName",
      total: { $sum: 1 },
    },
  },
  {
    $sort: {
      total: -1,
    },
  },
  {
    $limit: 1,
  },
  { $project: {
    _id: 0,
    nomeEstacao: "$_id",
    total: "$total",
  },
  },
]).pretty();
//