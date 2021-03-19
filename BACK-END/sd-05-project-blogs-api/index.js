const rescue = require('express-rescue');
const express = require('express');
const { tokenValidation } = require('./api/validations');
const { buscaPostPorTermo } = require('./api/controllers/PostController');
const routes = require('./api/routes');

require('dotenv').config();

console.log(`testando ambiente: ${process.env.NODE_ENV}`);

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/post/search', tokenValidation, rescue(buscaPostPorTermo));
routes(app);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => { response.send(); });

app.use((err, _req, res, _next) => {
  if (err.status) {
    console.log('deu ruim!!!');
    return res.status(err.status).json(err);
  }
});

app.listen(PORT, () => console.log(`Servidor ouvindo na porta ${PORT}!`));
module.exports = app;
