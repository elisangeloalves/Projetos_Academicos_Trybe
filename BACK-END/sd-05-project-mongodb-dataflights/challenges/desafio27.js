// Desafio 27
// Retorne a quantidade total de voos de natureza Doméstica que a empresa PASSAREDO possui, 
// via uso de uma nova coleção chamada resumoVoos.

// Ou seja, a coleção resumoVoos conterá documentos onde cada um indica 
// para cada empresa a quantidade total de voos que ela possui de natureza Doméstica.

// Para isso, escreva no arquivo desafio27.js duas queries, nesta ordem:

// Conte quantos voos da empresa PASSAREDO cujo campo natureza possua valor igual a Doméstica 
// e crie uma query que insira na coleção resumoVoos um documento com os campos: 
// empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).

// Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento presente 
// na coleção resumoVoos em que a empresa seja PASSAREDO.

const totalVoosDomesticos = db.voos.find({"empresa.nome": "PASSAREDO", "natureza": "Doméstica"}).count();

db.resumosVoos.insertOne({"empresa": "PASSAREDO", "totalVoosDomesticos": totalVoosDomesticos});
db.resumosVoos.find({"empresa": "PASSAREDO"}, {"empresa": 1, "totalVoosDomesticos": 1, "_id": 0}).limit(1);

// db.resumosVoos.insertOne({"empresa": "PASSAREDO", "totalVoosDomesticos": db.voos.find({"empresa.nome": "PASSAREDO", "natureza": "Doméstica"}).count()});
