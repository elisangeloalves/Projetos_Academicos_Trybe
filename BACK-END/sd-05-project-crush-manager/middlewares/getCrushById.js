const fs = require('fs').promises;
const rescue = require('express-rescue');

module.exports = rescue(async (req, res, next) => {
  const id = Number(req.params.id);
  const array = await fs.readFile('crush.json', 'utf8', ((err, data) => {
    if (err) return err;
    return data;
  }));
  const readFromFile = JSON.parse(array);
  const loockupID = readFromFile.find((obj) => obj.id === id);
  if (!loockupID) {
    return res.status(404).json({ message: 'Crush não encontrado' });
  }
  next();
});
