const jwt = require('jsonwebtoken');
const secretkey = require('../models/secretKey');

const secret = secretkey();

module.exports = async (user) => {
  const jwtConfig = {
    expiresIn: '60min',
    algorithm: 'HS256',
  };
  const { password: _, ...withoutPassword } = user;
  const token = jwt.sign({ data: withoutPassword }, secret, jwtConfig);
  return token;
};
