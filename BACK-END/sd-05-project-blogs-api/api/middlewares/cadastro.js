// Tira dúvidas com auxilio do PR Zambelli para debugar erros no avaliador
const rescue = require('express-rescue');
const userValidation = require('../validations/userValidation');

function validaCadastro(req, res) {
  const { displayName } = req.body;

  userValidation(req, res);
  if (!displayName || displayName.length < 8) {
    return res
      .status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
}

module.exports = rescue(async (req, res, next) => {
  validaCadastro(req, res);
  next();
});

// [ HONESTIDADE ACADÊMICA ]

//  pesquisa feita para implementar um token gerado aleatoriamente no formato hexadecimal.
// fonte de busaca StackOverFlow no endereco:
// https://stackoverflow.com/questions/57369426/node-crypto-randombytes-return-token-from-function

//  ESLITO DE ARQUITERURA = modelo baseado no estilo Rafael Quinteiro + duvidas de validaçoes.
