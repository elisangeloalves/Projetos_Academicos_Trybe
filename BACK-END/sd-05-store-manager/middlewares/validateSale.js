// salevalidate
const { ObjectId } = require('mongodb');
const { getByIdProducts } = require('../services/productsServices');

module.exports = async (req, _res, next) => {
  req.body.forEach(async ({ productID, quantity }) => {
    const id = await getByIdProducts(productID)
    console.log(id['_id'], productID);

    if (quantity <= 0 || !Number.isInteger(quantity) || !id['_id']) {
      next({
        code: 'invalid_data',
        message: 'Wrong product ID or invalid quantity',
      });
    }
  });
  next();
};

// const iterarSales = salesList.map(async (sale) => {
//   const validProductId = ObjectId.isValid(sale.productId);
//   // melhor pratica colocar na promise do model
//   // ou seja if essa valida dà false, da null, continua promise
//   console.log(validProductId);
//   if (!validProductId) {
//     throw {
//       code: 'invalid_data',
//       message: 'Wrong product ID or invalid quantity',
//     };
//   }
//   const existingProduct = await prodModel.getById(sale.productId);
//   if (!existingProduct || sale.quantity <= 0 || typeof sale.quantity !== 'number') {
//     throw {
//       code: 'invalid_data',
//       message: 'Wrong product ID or invalid quantity',
//     };
//   }
// });
// const allPromises = await Promise.all(iterarSales);
