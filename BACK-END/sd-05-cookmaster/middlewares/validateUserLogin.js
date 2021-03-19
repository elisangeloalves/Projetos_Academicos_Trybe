const rescue = require('express-rescue');
const { findUserbyEmail } = require('../models/usersModels');
const validateEmail = require('./emailValidation');

module.exports = rescue(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({
      message: 'All fields must be filled',
    });
  }

  if (!validateEmail(email)) {
    return res.status(401).json({ message: 'Incorrect username or password' });
  }

  const user = await findUserbyEmail(email);

  if (!user || password !== user.password) {
    return res.status(401).json({
      message: 'Incorrect username or password',
    });
  }
  next();
});
