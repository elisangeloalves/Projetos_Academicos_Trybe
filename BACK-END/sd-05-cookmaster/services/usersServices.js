const models = require('../models/usersModels');

const createUser = async (user) => models.createUser(user);

const userExists = async (email) => models.findUserbyEmail(email);

module.exports = {
  createUser,
  userExists,
};
