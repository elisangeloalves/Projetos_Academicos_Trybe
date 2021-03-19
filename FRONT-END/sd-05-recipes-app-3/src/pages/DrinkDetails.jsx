import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lookUpIdDrink } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import recipeConstructor from '../components/details/recipeconstructor.js';
import ImageDetail from '../components/details/ImageDetail';
import CardDetail from '../components/details/CardDetail';
import IngredientDetail from '../components/details/IngredientDetail';
import InstructionsDetail from '../components/details/InstructionsDetail';
import CarroselDetailsFood from '../components/details/CarroselDetailsFood';
import StartRecipe from '../components/details/StartRecipe';
import ShareButton from '../components/details/ShareButton';
import FavoriteButton from '../components/details/FavoriteButton';
import '../css/details.css';
import FavoriteContext from '../context/FavoriteContext';

const SocialButtons = (ide, fav, u, func) => (
  <div className="icon-details">
    <FavoriteButton literals={'favorite-btn'} id={ide} func={func} idx="" favorite={fav} />
    <ShareButton idRecipe={ide} url={u} />
  </div>
);

function DrinkDetails(props) {
  const { match: { params: { idRecipe }, url }, type = 'bebida' } = props;
  const { readFromStorage, isFavorite } = useContext(FavoriteContext);
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const { strDrinkThumb, strDrink, strInstructions, strCategory, strAlcoholic, strArea = '' } = details[0];
  const { allIngredients, allMeasures } = recipeConstructor(details[0]);
  const isItFavorite = readFromStorage() ? readFromStorage()
    .some((itIs) => itIs.id === idRecipe) : false;
  const [favorite, setFavorite] = useState(isItFavorite);
  function handleFavorite(favoriteRecipeId) {
    const favoritedRecipe = favorite ?
      idRecipe : { id: favoriteRecipeId,
        type,
        area: strArea,
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        name: strDrink,
        image: strDrinkThumb,
      };
    // recipes = recipes.filter((card) => card.id !== favoriteRecipeId);
    isFavorite(favoritedRecipe, !favorite);
    setFavorite(!favorite);
  }
  useEffect(() => {
    setFetching(true);
    lookUpIdDrink(idRecipe).then((drink) => setDetails(drink.drinks))
      .catch((error) => alert('Algo inesperado aconteceingredients', error));
    setFetching(false);
  }, [favorite]);
  if (fetching) return <div>Loading...</div>;
  const alc = strAlcoholic;
  return idRecipe ? (
    <div className="body-details">
      <ImageDetail strOption={strDrink} thumb={strDrinkThumb} />
      {SocialButtons(idRecipe, favorite, url, handleFavorite)}
      <CardDetail strOption={strDrink} strCategory={strCategory} alc={alc} type={type} />
      {/* <div className="icon-details">
        <FavoriteButton literals={'favorite-btn'} id={idRecipe}
        func={handleFavorite} idx="" favorite={favorite} />
        <ShareButton idRecipe={idRecipe} url={url} />
      </div> */}
      <CarroselDetailsFood recomendations="props" />
      <IngredientDetail ingredient={allIngredients} measure={allMeasures} />
      <InstructionsDetail instructions={strInstructions} />
      <StartRecipe literals={`${idRecipe}/in-progress`} />
    </div>) : (
      <Redirect to="/bebidas/">{alert('Não foi possível te surpreender desta vez!')}</Redirect>
  );
}

export default DrinkDetails;

DrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
  // location: PropTypes.shape({
  //   pathname: PropTypes.objectOf(String).isRequired,
  // }).isRequired,
  type: PropTypes.string.isRequired,
};
