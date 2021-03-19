const rescue = require('express-rescue');
const { getByName } = require('../models/productsModels');

module.exports = rescue(async (req, _res, next) => {
  const { name, quantity } = req.body;

  // if (!name || !quantity) {
  //   next({
  //     code: 'invalid_data',
  //     message: 'Name and quantity are required',
  //   });
  // }
  if (name && name.length < 5) {
    next({
      code: 'invalid_data',
      message: '"name" length must be at least 5 characters long',
    });
  }

  if (quantity <= 0) {
    next({
      code: 'invalid_data',
      message: '"quantity" must be larger than or equal to 1',
    });
  }

  if (typeof quantity === 'string') {
    throw next({
      code: 'invalid_data',
      message: '"quantity" must be a number',
    });
  }

  const nameExists = await getByName(name);
  if (nameExists) {
    next({
      code: 'invalid_data',
      message: 'Product already exists',
    });
  }

  next();
});
