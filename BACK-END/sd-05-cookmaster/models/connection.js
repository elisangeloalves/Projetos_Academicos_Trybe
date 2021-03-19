const { MongoClient } = require('mongodb');
require('dotenv').config();

// const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://mongodb:27017/Cookmaster';
const DB_NAME = 'Cookmaster';

const MONGO_DB_URL = 'mongodb://localhost:27017/Cookmaster';

/*
 [HONESTIDADE ACADEMICA] na linha 2 e 4 deste arquivo foi feito
um pesquisa para saber o pq de o avaliador nao está corrigindo
nehum dos requisitos feito por mim, os quais eram avaliados sem
problemas localmente, sendo assim pode perceber no PR do Rafael
Quinteiro que estas duas linhas de codigo habilitavam o avaliador e
assim passou a avaliar o meu codigo.
 */

const connection = (collectionName) => MongoClient
  .connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true })
  .then((conn) => conn.db(DB_NAME).collection(collectionName))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = connection;
