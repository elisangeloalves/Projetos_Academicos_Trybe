// Desafio 9
// Retorne a quantidade de voos dos anos de 2017 e 2018.

db.voos.find({"ano": {$in: [2018, 2017]}}).count();
// db.voos.find({$or: [{"ano": 2018},{"ano": 2017}]}).count();
