const models = require('../models/recipesModels');

const allRecipes = async () => models.getAllRecipes();

const getRecipeById = async (id) => {
  const recipe = await models.getRecipeById(id);
  if (!recipe) {
    return { message: 'recipe not found' };
  }
  return recipe;
};

const excludeRecipe = async (id) => {
  const recipeExists = await models.getRecipeById(id);
  if (!recipeExists) {
    return { message: 'Receita não encontrada' };
  }
  await models.exclude(id);
  return recipeExists;
};

const createRecipe = async (name, ingredients, preparation, userId) => {
  const recipe = {
    name,
    ingredients,
    preparation,
    image: '',
    userId,
  };
  const saveRecipe = await models.createRecipe(recipe);
  if (!saveRecipe) {
    return { message: 'Invalid entries. Try again' };
  }
  return saveRecipe;
};

const updateRecipe = async (id, recipe) => {
  const idExists = await models.getRecipeById(id);
  if (idExists) {
    await models.update(id, recipe);
  }
  return { message: 'Recipe doesn\'t exists' };
};

const addImage = async (id, image) => {
  const recipe = await models.getRecipeById(id);
  console.log('services', recipe);
  if (recipe) {
    // const path = `http://localhost:3000/uploads/${id}.jpg`;
    // const path = `uploads/${id}.jpg`;
    recipe.image = image;
    return models.update(id, recipe);
  }
  return { message: 'Recipe doesn\'t exists' };
};
// uploads/5fd18499f7c9898d758e233d.jpg
module.exports = {
  allRecipes,
  createRecipe,
  getRecipeById,
  excludeRecipe,
  updateRecipe,
  addImage,
};
