// const rescue = require('express-rescue');

const jwt = require('jsonwebtoken');
const secretKey = require('../models/secretKey');
const { buscaPorEmail } = require('../controllers/UserController');

const secret = secretKey();
//
module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;
  try {
    if (!token) {
      return res.status(401).json({
        message: 'Token não encontrado',
      });
    }
    // console.log('tokenValidation: ', token);
    const decoded = jwt.verify(token, secret).data;
    const user = await buscaPorEmail(decoded.dataValues.email);
    req.me = user;
    if (!user) {
      return res.status(401).json({
        message: 'Token expirado ou inválido',
      });
    }
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token expirado ou inválido' });
  }
};
