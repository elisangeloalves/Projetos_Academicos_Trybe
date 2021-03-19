const express = require('express');
const bodyParser = require('body-parser');
const { validateProduct, validateSale } = require('./middlewares');

const {
  addProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} = require('./controllers/productsControllers');

const {
  createSale,
  getAllSales,
  getSaleById,
  deleteSale,
  updateSale,
} = require('./controllers/saleControllers');

const app = express();
app.use(bodyParser.json());
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.put('/sales/:id', validateSale, updateSale, getSaleById);
app.get('/sales/:id', getSaleById);
app.post('/sales', validateSale, createSale);
app.post('/products', validateProduct, addProduct);
app.get('/sales', getAllSales);
app.get('/products', getAllProducts);
app.get('/products/:id', getProductById);
app.delete('/products/:id', deleteProduct);
app.put('/products/:id', validateProduct, updateProduct, getProductById);
app.delete('/sales/:id', deleteSale);

app.use((err, _req, res, _next) => {
  if (err) {
    // console.log(err);
    return res.status(422).json({ err });
  }
  res.status(500).json({ message: `algo deu errado ${err.message}` });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
