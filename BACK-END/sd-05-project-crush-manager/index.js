const fs = require('fs').promises;

const rescue = require('express-rescue');
const crypto = require('crypto');
const express = require('express');

const PORT = 3000;
const app = express();
const bodyParser = require('body-parser');
const { login, createCrush, tokenValidation, getCrushById, updateCrush } = require('./middlewares');

app.use(bodyParser.json());

// [HONESTIDADE ACADEMICA] Obtive ajuda no plantao do projeto para sanar
// duvidas em relacao ao uso de bibliotecas e funcoes assincronas
// a ajuda no plantao veio do Zambelli e Coruja

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/crush/search', tokenValidation, rescue(async (req, res) => {
  const searchTerm = req.query.name;
  const array = await fs.readFile('crush.json', 'utf8', ((err, data) => {
    if (err) return err;
    return data;
  }));
  const readFromFile = JSON.parse(array);

  const crushes = readFromFile.filter(({ name }) => name.includes(searchTerm));
  console.log(crushes);
  if (crushes.length) return res.status(200).json(crushes);
  if (!searchTerm) return res.status(200).json(readFromFile);
  if (searchTerm && !crushes) return res.status(200).json([]);
  return res.end();
}));

app.delete('/crush/:id', tokenValidation, rescue(async (req, res) => {
  const id = Number(req.params.id);
  const array = await fs.readFile('crush.json', 'utf8', ((err, data) => {
    if (err) return err;
    return data;
  }));
  const readFromFile = JSON.parse(array);

  const crushes = readFromFile.filter((obj) => obj.id !== id);
  const crushDeleted = crushes.find((obj) => obj.id === id);
  if (!crushDeleted) {
    return res.status(200).json({ message: 'Crush deletado com sucesso' });
  }
}));

app.post('/login', login, rescue(async (_req, res) => {
  // const token = { token: crypto.randomBytes(8).toString('hex') };
  res.status(200)
    .json({ token: crypto.randomBytes(8).toString('hex') });
}));

app.put('/crush/:id', tokenValidation, getCrushById, createCrush, updateCrush);

app.get('/crush/:id', tokenValidation, getCrushById, async (req, res) => {
  const id = Number(req.params.id);
  const array = await fs.readFile('crush.json', 'utf8', ((err, data) => {
    if (err) return err;
    return data;
  }));
  const readFromFile = JSON.parse(array);

  const loockupID = readFromFile.find((obj) => obj.id === id);
  res.status(200).json(loockupID);
});

app.get('/crush', tokenValidation, async (_req, res) => {
  const array = await fs.readFile('crush.json', 'utf8', ((err, data) => {
    if (err) return err;
    return data;
  }));
  const readFromFile = JSON.parse(array);

  res.status(200).json(readFromFile);
});

app.post('/crush', tokenValidation, createCrush, rescue(async (req, res) => {
  const { name, age, date } = req.body;
  const array = await fs.readFile('crush.json', 'utf8', ((err, data) => {
    if (err) return err;
    return data;
  }));
  const readFromFile = JSON.parse(array);

  const id = readFromFile.length + 1;
  const newCrush = { id, name, age, date };
  readFromFile.push(newCrush);
  await fs.writeFile('crush.json', JSON.stringify(readFromFile));

  return res.status(201).json(newCrush);
}));

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json(err);
  }
  // return res.status(500).json({ status: 500, message: 'erro interno do servidor' });
});

app.listen(PORT, () => console.log(`watching on port: ${PORT}`));
