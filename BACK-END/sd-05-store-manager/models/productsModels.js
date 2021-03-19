const { ObjectId } = require('mongodb');
const getConnection = require('./connection');

const getAll = async () => getConnection('products').then(
  (products) => products.find({}).toArray(),
);

const getById = async (id) => getConnection('products').then((products) =>
  ((ObjectId.isValid(id)) ? products.findOne({ _id: ObjectId(id) }) : null));

const getByName = async (name) => getConnection('products').then((products) => products.findOne({ name }));

const create = async ({ name, quantity }) => getConnection('products').then((products) => products.insertOne({ name, quantity })
  .then((results) => ({ _id: results.insertedId, name, quantity })));

const exclude = async (id) => (ObjectId.isValid(id) ? getConnection('products')
  .then((products) => products.deleteOne({ _id: ObjectId(id) })) : null);

const update = async (id, name, quantity) => {
  if (!ObjectId.isValid(id)) return;
  await getConnection('products').then((products) => products.updateOne(
    { _id: ObjectId(id) }, { $set: { name, quantity } },
  ));
};

module.exports = {
  getAll,
  getById,
  create,
  exclude,
  update,
  getByName,
};

// A tabela de produtos deverá ter o seguinte nome: products

// Os campos da tabela products terão esse formato:

// { "name": "Produto Silva", "quantity": 10 }
// A resposta do insert deve retornar após a criação é essa:

// { "_id": ObjectId("5f43cbf4c45ff5104986e81d"), "name": "Produto Silva", "quantity": 10 }
