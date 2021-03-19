const rescue = require('express-rescue');
const userValidation = require('../validations/userValidation');

module.exports = rescue(async (req, res, next) => {
  userValidation(req, res);
  next();
});
