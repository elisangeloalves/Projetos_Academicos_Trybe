// Desafio 28
// Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, 
// via uso de uma nova coleção chamada resumoVoos.

// Para isso, escreva no arquivo desafio28.js duas queries, nesta ordem:

// Conte quantos voos da empresa LATAM AIRLINES BRASIL cujo campo natureza possua valor 
// igual a Doméstica e crie uma query que insira na coleção resumoVoos um documento com os campos: 
// empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).

// Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento 
// presente na coleção resumoVoos em que a empresa seja LATAM AIRLINES BRASIL.

const totalVoosDomesticos = db.voos.find({"empresa.nome": "LATAM AIRLINES BRASIL", "natureza": "Doméstica"}).count();

db.resumosVoos.insertOne({"empresa": "LATAM AIRLINES BRASIL" , "totalVoosDomesticos": totalVoosDomesticos});
db.resumosVoos.find({"empresa": "LATAM AIRLINES BRASIL"}, {"empresa": 1, "totalVoosDomesticos": 1, "_id": 0});

// db.resumosVoos.insertOne({"empresa": "LATAM AIRLINES BRASIL" , "totalVoosDomesticos": db.voos.find({"empresa.nome": "LATAM AIRLINES BRASIL", "natureza": "Doméstica"}).count()});
