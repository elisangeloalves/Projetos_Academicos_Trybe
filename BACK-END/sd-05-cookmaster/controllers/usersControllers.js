const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const secretKey = require('../models/secretKey');
const services = require('../services/usersServices');

const secret = secretKey();
//
const createUser = rescue(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await services.createUser({ name, email, password, role: 'user' });

  if (user) {
    return res.status(201).json({ user });
  }
});
//
const loginUser = rescue(async (req, res) => {
  const { email } = req.body;
  const user = await services.userExists(email);

  const jwtConfig = {
    expiresIn: '30min',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  res.status(200).json({ token });
});

module.exports = {
  createUser,
  loginUser,
};
