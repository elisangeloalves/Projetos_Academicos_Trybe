const rescue = require('express-rescue');
const { findUserbyEmail } = require('../models/usersModels');
const emailIsValid = require('./emailValidation');

module.exports = rescue(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'Invalid entries. Try again.',
    });
  }

  if (!emailIsValid(email)) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }

  const user = await findUserbyEmail(email);

  if (user && email === user.email) {
    return res.status(409).json({
      message: 'Email already registered',
    });
  }

  next();
});
