// saleServices
// const rescue = require('express-rescue');
const salesModels = require('../models/salesModels');

const createSale = async (itensSold) => salesModels.create(itensSold);

const getAllSales = async () => salesModels.getAll();

const getSoldById = async (id) => salesModels.getById(id);

const saleToBeDeleted = async (id) => {
  const idExists = await salesModels.getById(id);
  if (idExists) {
    salesModels.exclude(id);
    return idExists;
  }
  return {
    err: {
      code: 'invalid_data',
      message: 'Wrong sale ID format',
    },
  };
};

const updateSale = async (id, body) => {
  const idExists = await salesModels.getById(id);
  if (idExists) {
    await salesModels.update(id, body);
  }
  return {
    err: {
      code: 'invalid_data',
      message: 'Wrong sale ID format',
    },
  };
};

module.exports = {
  createSale,
  getAllSales,
  getSoldById,
  saleToBeDeleted,
  updateSale,
};
