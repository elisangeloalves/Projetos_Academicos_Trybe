// localField: "airlines",
// foreignField: "airline.name",
// {
//   $match: {
//     filter: { $eq: { $size: 0 } },
//   },
// },

// {
//   $project: { _id: 1, totalRotas: 1 },
// },
/*
Desafio 8
Trocando de contexto, vamos utilizar nosso outro dataset que contém dados de empresas aéreas,
suas rotas, seus voos e parcerias.

Liste todas as parcerias da coleção air_alliances, que voam rotas com um Boing 747 ou
um Airbus A380 (que estão abreviados para 747 e 380 no campo airplane na coleção air_routes,
  respectivamente), e descubra qual delas tem o maior número de rotas com esses aviões.

O resultado da sua query deve ter o seguinte formato:

{ "_id" : <nome_da_alianca>, "totalRotas" : <total_de_rotas> }
*/
// [HONESTIDADE ACADEMICA] => Neste desafio, contei com a ajuda e suporte no plantao em quanto
// a Virginia tira duvidas do mesmo desafio ( qualquer semelhança, não é mera coincidencia )

// resposta: { "_id" : "SkyTeam", "totalRotas" : 8 }

db.air_alliances.aggregate([
  {
    $unwind: "$airlines",
  },
  {
    $lookup: {
      from: "air_routes",
      let: { linha: "$airlines" },
      pipeline: [
        {
          $match: {
            airplane: { $in: ["747", "380"] },
            $expr: { $eq: ["$airline.name", "$$linha"] },
          },
        },
      ],
      as: "selected",
    },
  },
  {
    $unwind: "$selected",
  },
  {
    $group: {
      _id: "$name",
      totalRotas: { $sum: 1 },
    },
  },
  {
    $sort: { totalRotas: 1 },
  },
  { $skip: 2 },
]).pretty();
