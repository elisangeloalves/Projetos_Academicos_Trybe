const rescue = require('express-rescue');
const fs = require('fs').promises;

module.exports = rescue(async (req, res) => {
  const { name, age, date: { datedAt, rate } } = req.body;
  const id = Number(req.params.id);
  const array = await fs.readFile('crush.json', 'utf8', ((err, data) => {
    if (err) return err;
    return data;
  }));
  const readFromFile = JSON.parse(array);
  const foundObject = readFromFile.find((obj) => obj.id === id);
  const index = readFromFile.findIndex((obj) => obj.id === id);
  // console.log("index:", index);
  if (!foundObject) {
    return res.status(400).json({ err: { message: 'Crush não encontrado' } });
  }
  readFromFile[index] = { id, name, age, date: { datedAt, rate } };
  await fs.writeFile('crush.json', JSON.stringify(readFromFile));
  res.status(200).json(readFromFile[index]);
});
