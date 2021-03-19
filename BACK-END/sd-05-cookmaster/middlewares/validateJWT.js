const jwt = require('jsonwebtoken');
const secretKey = require('../models/secretKey');
const { findUserbyEmail } = require('../models/usersModels');

const secret = secretKey();
//
module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;
  // const token = req.headers['authorization'];
  // console.log('validateJWT:', token);
  try {
    if (!token) {
      return res.status(401).json({ message: 'missing auth token' });
    }
    const decoded = jwt.verify(token, secret);
    const user = await findUserbyEmail(decoded.data.email);
    if (!user) {
      return res.status(401).json({ message: 'Acess not authorized' });
    }
    const { password, ...noPassword } = user;
    req.user = noPassword;
    // console.log('sem password:', noPassword);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};
