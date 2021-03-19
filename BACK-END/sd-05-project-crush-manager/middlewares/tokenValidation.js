const rescue = require('express-rescue');

module.exports = rescue(async (req, res, next) => {
  const token = await req.headers.authorization;

  // console.log("token:", token);

  if (!token) {
    return res.status(401).json({
      message: 'Token não encontrado',
    });
  }

  if (token.length !== 16) {
    return res.status(401).json({
      message: 'Token inválido',
    });
  }
  next();
});
