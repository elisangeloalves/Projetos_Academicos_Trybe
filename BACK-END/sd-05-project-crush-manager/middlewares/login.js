// [ HONESTIDADE ACADÊMICA ]

//  pesquisa feita para implementar um token gerado aleatoriamente no formato hexadecimal.
// fonte de busaca StackOverFlow no endereco:
// https://stackoverflow.com/questions/57369426/node-crypto-randombytes-return-token-from-function

//  ESLITO DE ARQUITERURA = modelo baseado no estilo Rafael Quinteiro + duvidas de validaçoes.

// Tira dúvidas com auxilio do PR Zambelli para debugar erros no avaliador
const rescue = require('express-rescue');

module.exports = rescue(async (req, res, next) => {
  const mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function checkEmail(email) {
    if (email) return email.match(mail) ? 1 : 0;
  }

  const { email, password } = req.body;

  if (!email || email === '') {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!checkEmail(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password || password === '') {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6 || password.length > 12) {
    return res.status(400).json({ message: 'A "senha" deve ter pelo menos 6 caracteres' });
  }
  next();
});

/*

1 - Crie o endpoint POST /login
Os seguintes pontos serão avaliados:
O endpoint deve ser capaz de retornar um token aleatório de 16
caracteres que deverá ser utilizado nas demais requisições.
O endpoint deverá retornar o token gerado, da seguinte forma:
{
  "token": "7mqaVRXJSp886CGr"
}

O corpo da requisição deverá ter o seguinte formato:
{
  "email": "email@email.com",
  "password": 123456
}

O campo email deverá ser um email válido. Ele é obrigatório.
Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:
{
  "message": "O campo \"email\" é obrigatório"
}

Caso o email passado não seja um email válido retorne um código de status 400, com o seguinte corpo:
{
  "message": "O \"email\" deve ter o formato \"email@email.com\""
}

O campo password deverá ter pelo menos 6 caracteres.
Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:
{
  "message": "O campo \"password\" é obrigatório"
}

Caso a senha não tenha pelo menos 6 caracteres retorne um código de status 400,
com o seguinte corpo:
{
  "message": "A \"senha\" deve ter pelo menos 6 caracteres"
}
*/

//
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());
