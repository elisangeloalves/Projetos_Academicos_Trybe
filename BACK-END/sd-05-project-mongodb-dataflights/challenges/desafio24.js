// Desafio 24  RESU: { "vooId" : 743573, "empresa" : { "nome" : "ABAETÉ" }, "litrosCombustivel" : 341 }
// Retorne o vooId, empresa.nome e litrosCombustivel do primeiro voo em que litrosCombustivel não seja maior do que 600 
// e a empresa não seja GOL ou AZUL, e o campo litrosCombustivel exista.

db.voos.find({
  $and: [
    {
      "litrosCombustivel": {
      $not: {
        $gt: 600
      }, 
      $exists: true}
    }, 
    {
      "empresa.nome": {
        $nin: ["GOL", "AZUL"]
      }
    }
  ]
}, 
{
  "vooId": 1, "empresa.nome": 1, "litrosCombustivel": 1, "_id": 0
} 
).limit(1);
