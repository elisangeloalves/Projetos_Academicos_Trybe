const productsModels = require('../models/productsModels');
//
const erroMessage = () => ({
  err: {
    code: 'invalid_data',
    message: 'Wrong id format',
  },
});

const createProduct = async (name, quantity) => productsModels.create({ name, quantity });

const getAllProducts = async () => productsModels.getAll();

const getByIdProducts = async (id) => {
  const product = await productsModels.getById(id);
  if (!product) return erroMessage();
  return product;
};

const deleteProduct = async (id) => {
  const product = await productsModels.exclude(id);
  if (product === null) return erroMessage();
  return product;
};

const update = async (id, name, quantity) => {
  const product = await productsModels.update(id, name, quantity);
  if (product === null) return erroMessage();
};

module.exports = {
  getAllProducts,
  getByIdProducts,
  createProduct,
  deleteProduct,
  update,
};
