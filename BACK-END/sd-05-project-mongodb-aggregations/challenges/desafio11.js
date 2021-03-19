/*
Desafio 11
Determine qual o dia da semana com maior número de viagens iniciadas.

Dica: Utilize o operador $dayOfWeek para extrair o dia da semana como um número de uma data.

O resultado da sua query deve ter o seguinte formato:

{ "diaDaSemana" : <dia_da_semana>, "total" : <total_de_viagens> }

*/
// resposta: { "diaDaSemana" : 5, "total" : 357594 }

db.trips.aggregate([
  {
    $group: {
      _id: { $dayOfWeek: "$startTime" },
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
    diaDaSemana: "$_id",
    total: "$total",
  },
  },
]).pretty();
//