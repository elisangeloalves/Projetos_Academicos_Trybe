const validateUserSignUp = require('./validateUsersSignUp');
const validateUserLogin = require('./validateUserLogin');
const validateJWT = require('./validateJWT');
const emailValidation = require('./emailValidation');
const recipeValidate = require('./recipeValidate');

module.exports = {
  validateUserSignUp,
  validateUserLogin,
  validateJWT,
  emailValidation,
  recipeValidate,
};
