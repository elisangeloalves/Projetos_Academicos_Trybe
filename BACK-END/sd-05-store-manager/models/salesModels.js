// salemodel
const { ObjectId } = require('mongodb');

const getConnection = require('./connection');

const create = async (itensSold) => getConnection('sales')
  .then((sales) => sales.insertOne({ itensSold }))
  .then((result) => (result.ops[0]
  ));
//
const getAll = async () => getConnection('sales')
  .then((sales) => sales.find({}).toArray());

const getById = async (id) => getConnection('sales').then((sales) => (ObjectId.isValid(id) ? sales.findOne({ _id: ObjectId(id) }) : null));

const exclude = async (id) => getConnection('sales')
  .then((sales) => sales.deleteOne({ _id: ObjectId(id) }));

const update = async (id, itensSold) => {
  if (!ObjectId.isValid(id)) return;
  await getConnection('sales').then((sales) => sales.updateMany({ _id: ObjectId(id) }, { $set: { itensSold } }));
};

module.exports = {
  create,
  getAll,
  getById,
  exclude,
  update,
};
