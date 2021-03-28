const { MongoClient } = require('mongodb');
require('dotenv').config();

const { DB_NAME, DB_URL } = process.env;

let schema = null;

async function connection(collectionName) {
  if (schema) return Promise.resolve(schema);
  return MongoClient
    .connect(DB_URL || 'mongodb://localhost:27017/webchat', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DB_NAME || 'webchat').collection(collectionName))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.error('errode conexãp: ', err);
      process.exit(1);
    });
}
module.exports = connection;
/*
 [HONESTIDADE ACADEMICA] na linha 2 e 4 deste arquivo foi feito
um pesquisa para saber o pq de o avaliador nao está corrigindo
nehum dos requisitos feito por mim, os quais eram avaliados sem
problemas localmente, sendo assim pode perceber no PR do Rafael
Quinteiro que estas duas linhas de codigo habilitavam o avaliador e
assim passou a avaliar o meu codigo.
 */
