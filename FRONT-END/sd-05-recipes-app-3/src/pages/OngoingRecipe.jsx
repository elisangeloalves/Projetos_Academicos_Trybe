import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';
import recipeConstructor from '../components/details/recipeconstructor.js';
import ImageDetail from '../components/details/ImageDetail';
import CardDetail from '../components/details/CardDetail';
import IngredientOngoing from '../components/IngredientOngoing';
import InstructionsDetail from '../components/details/InstructionsDetail';
import { lookUpIdMeal, lookUpIdDrink } from '../service/apis';
import FinishRecipeButton from '../components/details/FinishRecipeButton';
import FavoriteButton from '../components/details/FavoriteButton';
import ShareButton from '../components/details/ShareButton';
import FavoriteContext from '../context/FavoriteContext';
import '../css/details.css';

function OngoingRecipe(props) {
  const { setFetching, ongoing, setOngoing } = useContext(RecipeContext);
  const { strMealThumb, strMeal, strDrinkThumb, strDrink } = ongoing[0];
  const { strInstructions, strCategory, strArea, strAlcoholic } = ongoing[0];
  const { readFromStorage, isFavorite } = useContext(FavoriteContext);
  const { match: { params: { idRecipe }, url }, type } = props;
  const isItFavorite = readFromStorage() ? readFromStorage()
    .some((itIs) => itIs.id === idRecipe) : false;
  const [favorite, setFavorite] = useState(isItFavorite);
  const name = (type === 'comidas') ? strMeal : strDrink;
  const image = (type === 'comidas') ? strMealThumb : strDrinkThumb;
  function handleFavorite(favoriteRecipeId) {
    const favoritedRecipe = { id: favoriteRecipeId,
      type,
      area: strArea,
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name,
      image,
    };
    isFavorite(favoritedRecipe, !favorite);
    setFavorite(!favorite);
  }
  const { allIngredients, allMeasures } = recipeConstructor(ongoing[0]);
  useEffect(() => {
    setFetching(true);
    if (url.includes('comidas')) {
      lookUpIdMeal(idRecipe).then((food) => setOngoing(food.meals))
        .then(localStorage.setItem('InProgressRecipes', JSON.stringify({ cocktails: { [idRecipe]: [] } })))
        .catch((error) => alert('comida', error));
    } else if (url.includes('bebidas')) {
      lookUpIdDrink(idRecipe)
        .then((drink) => setOngoing(drink.drinks))
        .catch((error) => alert('bebida', error));
    }
    setFetching(false);
  }, [favorite]);
  return (<div className="body-details">
    <ImageDetail strOption={strMeal || strDrink} thumb={strMealThumb || strDrinkThumb} />
    <FavoriteButton literals={'favorite-btn'} id={idRecipe} func={handleFavorite} idx="" favorite={favorite} />
    <ShareButton idRecipe={idRecipe} url={url} />
    <CardDetail strOption={strMeal || strDrink} strCategory={strCategory} />
    <IngredientOngoing ingredient={allIngredients} measure={allMeasures} idRecipe={idRecipe} />
    <InstructionsDetail instructions={strInstructions} />
    <FinishRecipeButton literals={'/receitas-feitas'} />
  </div>);
}

export default OngoingRecipe;

OngoingRecipe.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};
