// Desafio 12
// Conte os documentos em que o campo aeroportoDestino.pais seja igual a BRASIL, ARGENTINA ou CHILE.

db.voos.find({"aeroportoDestino.pais": {$in: ["BRASIL", "ARGENTINA", "CHILE"]}}).count();
