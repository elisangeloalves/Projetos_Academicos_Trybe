// Desafio 14
// Retorne o total de voos em que o país de origem não seja BRASIL.

db.voos.find({"aeroportoOrigem.pais": {$not: /BRASIL/}}).count();
