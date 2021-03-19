// Desafio 17  resu: 108536
// Retorne o total de voos em que o campo natureza possui o valor Doméstica.

db.voos.find({"natureza": "Doméstica"}).count();
