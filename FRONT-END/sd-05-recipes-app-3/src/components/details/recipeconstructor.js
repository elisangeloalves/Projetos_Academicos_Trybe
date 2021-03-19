const recipeConstructor = (ingredient) => {
  const items = Object.keys(ingredient)
    .filter((keysIngridients) => keysIngridients.includes('strIngredient'))
    .filter((value) => ingredient[value] !== '' && ingredient[value] !== null);
  const quantities = Object.keys(ingredient)
    .filter((qtIngridients) => qtIngridients.includes('strMeasure'))
    .filter((value) => ingredient[value] !== '' && ingredient[value] !== null);
  // construindo um array de ingredientes
  const allIngredients = items.map((value) => ingredient[value]);
  // construindo um array de medidas dos ingredientes
  const allMeasures = quantities.map((value) => ingredient[value]);
  return { allIngredients, allMeasures };
};

export default recipeConstructor;
