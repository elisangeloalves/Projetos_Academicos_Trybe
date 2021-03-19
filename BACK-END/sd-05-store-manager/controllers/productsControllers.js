const rescue = require('express-rescue');
const services = require('../services/productsServices');

const addProduct = rescue(async (req, res) => {
  const { name, quantity } = req.body;
  const product = await services.createProduct(name, quantity);
  res.status(201).json(product);
});
//
const getAllProducts = rescue(async (_req, res) => {
  const products = await services.getAllProducts();
  res.status(200).json({ products });
});
//
const getProductById = rescue(async (req, res) => {
  const { id } = req.params;
  const product = await services.getByIdProducts(id);

  if (product.err) {
    return res.status(422).json({ err: product.err });
  }
  res.status(200).json(product);
});

const deleteProduct = rescue(async (req, res) => {
  const { id } = req.params;
  const product = await services.getByIdProducts(id);

  if (product.err) {
    return res.status(422).json({ err: product.err });
  }
  if (product) {
    services.deleteProduct(id);
    return res.status(200).json(product);
  }
});

const updateProduct = rescue(async (req, _res, next) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  await services.update(id, name, quantity);
  next();
});

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
};
