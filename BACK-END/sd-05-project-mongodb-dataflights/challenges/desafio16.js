// Desafio 16  resul:48681
// Retorne o total de voos em que o campo natureza possui o valor Internacional.

db.voos.find({"natureza": "Internacional"}).count();
