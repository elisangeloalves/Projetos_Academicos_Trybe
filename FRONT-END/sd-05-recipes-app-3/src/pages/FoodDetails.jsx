import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lookUpIdMeal } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import '../css/details.css';
import recipeConstructor from '../components/details/recipeconstructor.js';
import ImageDetail from '../components/details/ImageDetail';
import CardDetail from '../components/details/CardDetail';
import IngredientDetail from '../components/details/IngredientDetail';
import InstructionsDetail from '../components/details/InstructionsDetail';
import VideoDetails from '../components/details/VideoDetails';
import StartRecipe from '../components/details/StartRecipe';
import ShareButton from '../components/details/ShareButton';
import CarroselDetails from '../components/details/CarroselDetails';
import FavoriteButton from '../components/details/FavoriteButton';
import FavoriteContext from '../context/FavoriteContext';

const SocialButtons = (ide, fav, u, func) => (
  <div className="icon-details">
    <FavoriteButton literals={'favorite-btn'} id={ide} func={func} idx="" favorite={fav} />
    <ShareButton idRecipe={ide} url={u} />
  </div>
);

function FoodDetails(props) {
  const { match: { params: { idRecipe }, url }, type = 'comida' } = props;
  // console.log(idRecipe)
  const { readFromStorage, isFavorite } = useContext(FavoriteContext);

  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const { strMealThumb, strMeal, strInstructions, strYoutube, strCategory, strArea = 'Unknown' } = details[0];
  const { allIngredients, allMeasures } = recipeConstructor(details[0]);
  const isItFavorite = readFromStorage() ? readFromStorage()
    .some((itIs) => itIs.id === idRecipe) : false;
  // console.log(readFromStorage().some((itIs) => itIs.id === idRecipe));
  const [favorite, setFavorite] = useState(isItFavorite);
  function handleFavorite(favoriteRecipeId) {
    const favoritedRecipe = favorite ? idRecipe : { id: favoriteRecipeId, type, area: strArea, category: strCategory, alcoholicOrNot: '', name: strMeal, image: strMealThumb };
    // recipes = recipes.filter((card) => card.id !== favoriteRecipeId);
    // console.log(favorite ? 'Receita desfavoritada:' : 'Receita favoritada:', favoritedRecipe);
    isFavorite(favoritedRecipe, !favorite);
    setFavorite(!favorite);
  }
  // uma saida no console pra vc saber o que esta manipulado
  // console.log(allIngredients, allMeasures);
  useEffect(() => {
    setFetching(true);
    lookUpIdMeal(idRecipe)
      .then((food) => setDetails(food.meals))
      .catch((error) => alert('Algo inesperado aconteceingredients;u:', error));
    setFetching(false);
  }, [favorite]);
  //
  if (fetching) return <div>Loading...</div>;
  //
  return idRecipe ? (
    <div className="body-details">
      <ImageDetail strOption={strMeal} thumb={strMealThumb} />
      {SocialButtons(idRecipe, favorite, url, handleFavorite)}
      <CardDetail strOption={strMeal} strCategory={strCategory} strArea={strArea} type={type} />
      {/* <div className="icon-details">
        <FavoriteButton literals={'favorite-btn'} id={idRecipe}
        func={handleFavorite} idx="" favorite={favorite} />
        <ShareButton idRecipe={idRecipe} url={url} />
      </div> */}
      <CarroselDetails />
      <IngredientDetail ingredient={allIngredients} measure={allMeasures} />
      <InstructionsDetail instructions={strInstructions} />
      <StartRecipe literals={`${idRecipe}/in-progress`} />
      <VideoDetails youtube={strYoutube} />
    </div>
  ) : (
    <Redirect to="/comidas/">{alert('Não foi possível te surpreender desta vez!')}</Redirect>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
  // location: PropTypes.shape({
  //   pathname: PropTypes.objectOf(String).isRequired,
  // }).isRequired,
  type: PropTypes.string.isRequired,
};

export default FoodDetails;
