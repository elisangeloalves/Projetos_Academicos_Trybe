const express = require('express');
const bodyParser = require('body-parser');

// const multer = require('multer');
// const { addImage } = require('./services/recipesServices');

const app = express();
app.use(bodyParser.json());

// app.use('/uploads', express.static(__dirname, 'uploads'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

const {
  createUser,
  loginUser,
} = require('./controllers/usersControllers');

const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  deleteRecipe,
  updateRecipe,
} = require('./controllers/recipesControllers');

const {
  validateUserSignUp,
  validateUserLogin,
  validateJWT,
  recipeValidate,
} = require('./middlewares');

/* const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, _file, cb) => {
    const { id } = req.params;
    // cb(null, file.originalname);
    return cb(null, `${id}.jpg`);
  },
});
const upload = multer ({ storage });
 */

app.post('/users', validateUserSignUp, createUser);
app.post('/login', validateUserLogin, loginUser);
app.post('/recipes', recipeValidate, validateJWT, createRecipe);
app.get('/recipes', getAllRecipes);
app.get('/recipes/:id', getRecipeById);
app.delete('/recipes/:id', validateJWT, deleteRecipe);
app.put('/recipes/:id', validateJWT, updateRecipe, getRecipeById);
/*
app.put('/recipes/:id/image/', validateJWT, upload.single('file'), async (req, res) => {
  // const { id } = req.params;
  // const { image } = req;
  console.log(req.file.originalname);
  // await addImage(id, image);
  res.status(200).send(req.file.buffer);
});
 */

app.use((err, _req, res, _next) => {
  if (err) {
    console.log(err);
    return res.status(422).json({ err });
  }
  res.status(500).json({ message: `algo deu errado ${err.message}` });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening to on port: ${PORT}`));
