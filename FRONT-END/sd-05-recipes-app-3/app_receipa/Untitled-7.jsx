// OngoingRecipe
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
  const isItFavorite = readFromStorage('favoriteRecipes') ? readFromStorage('favoriteRecipes')
    .some((itIs) => itIs.id === idRecipe) : false;
  const [favorite, setFavorite] = useState(isItFavorite);
  const name = strMeal || strDrink;
  const image = strMealThumb || strDrinkThumb;
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
    // console.log(url)
    setFetching(true);
    if (url.includes('comidas')) {
      // console.log(url);
      lookUpIdMeal(idRecipe).then((food) => setOngoing(food.meals))
        .then(localStorage.setItem('InProgressRecipes', JSON.stringify({ cocktails: { [idRecipe]: [] } })))
        .catch((error) => console.log('comida', error));
    } else if (url.includes('bebidas')) {
      lookUpIdDrink(idRecipe)
        .then((drink) => setOngoing(drink.drinks))
        .then(localStorage.setItem('InProgressRecipes', JSON.stringify({ meals: { [idRecipe]: [] } })))
        .catch((error) => console.log('bebida', error));
    }
    setFetching(false);
  }, [favorite]);
  // console.log(JSON.parse(localStorage.getItem('InProgressRecipes')))
  return (<div className="body-details">
    <ImageDetail strOption={strMeal || strDrink} thumb={strMealThumb || strDrinkThumb} />
    <FavoriteButton literals={'favorite-btn'} id={idRecipe} func={handleFavorite} favorite={favorite} />
    <ShareButton literals={'share-btn'} alt={name} url={props} id={idRecipe} />
    <CardDetail strOption={strMeal || strDrink} strCategory={strCategory} />
    <IngredientOngoing ingredient={allIngredients} measure={allMeasures} idRecipe={idRecipe} />
    <InstructionsDetail instructions={strInstructions} />
    <FinishRecipeButton literals={'/receitas-feitas'} id={idRecipe} type={type}/>
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
/* 
dateModified: "2016-08-31 19:32:08"
idDrink: "13501"
strAlcoholic: "Alcoholic"
strCategory: "Shot"
strCreativeCommonsConfirmed: "No"
strDrink: "ABC"
strDrinkAlternate: null
strDrinkDE: null
strDrinkES: null
strDrinkFR: null
strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg"
strDrinkZH-HANS: null
strDrinkZH-HANT: null
strGlass: "Shot glass"
strIBA: null
strIngredient1: "Amaretto"
strIngredient2: "Baileys irish cream"
strIngredient3: "Cognac"
strIngredient4: null
strIngredient5: null
strIngredient6: null
strIngredient7: null
strIngredient8: null
strIngredient9: null
strIngredient10: null
strIngredient11: null
strIngredient12: null
strIngredient13: null
strIngredient14: null
strIngredient15: null
strInstructions: "Layered in a shot glass."
strInstructionsDE: "Schichtaufbau in einem Schnapsglas."
strInstructionsES: null
strInstructionsFR: null
strInstructionsZH-HANS: null
strInstructionsZH-HANT: null
strMeasure1: "1/3 "
strMeasure2: "1/3 "
strMeasure3: "1/3 "
strMeasure4: null
strMeasure5: null
strMeasure6: null
strMeasure7: null
strMeasure8: null
strMeasure9: null
strMeasure10: null
strMeasure11: null
strMeasure12: null
strMeasure13: null
strMeasure14: null
strMeasure15: null
strTags: null
strVideo: null
*/