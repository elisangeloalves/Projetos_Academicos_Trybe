// DrinkDetails Page

import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lookUpIdDrink } from '../service/apis';
import '../css/details.css';
// import { whiteHeartIcon } from '../images';
// import { blackHeartIcon } from '../images';
// import { shareIcon } from '../images';
import recipeConstructor from '../components/details/recipeconstructor.js';
import RecipeContext from '../context/RecipeContext';
// import FavoriteContext from '../context/FavoriteContext';

import ImageDetail from '../components/details/ImageDetail';
import CardDetail from '../components/details/CardDetail';
import IngredientDetail from '../components/details/IngredientDetail';
import InstructionsDetail from '../components/details/InstructionsDetail';
// import VideoDetails from '../components/details/VideoDetails';
import CarroselDetails from '../components/details/CarroselDetails';
import StartRecipe from '../components/details/StartRecipe';

function DrinkDetails(props) {
  const { idRecipe } = props.match.params;
  // const { favorite, isFavorite, readFromStorage } = useContext(FavoriteContext);
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const {
    strDrinkThumb,
    strDrink,
    strInstructions,
    strArea,
    strCategory,
    strAlcoholic,
  } = details[0];
  //
  // console.log(details[0]);
  //
  const { allIngredients, allMeasures } = recipeConstructor(details[0]);
  //
  useEffect(() => {
    setFetching(true);
    lookUpIdDrink(idRecipe)
      .then((drink) => setDetails(drink.drinks))
      .catch((error) => alert('Algo inesperado aconteceu, recarregue a pagina!', error.message));
    setFetching(false);
  }, []);

  if (fetching) return <div>Loading...</div>;
  return idRecipe ? (
    <div className="body-details">
      FoodDetails Page
      <ImageDetail strOption={strDrink} thumb={strDrinkThumb} />
      <CardDetail
        id={idRecipe}
        type="bebidas"
        image={strDrinkThumb}
        category={strCategory}
        area={strArea}
        alcoholicOrNot={strAlcoholic}
        name={strDrink}
      />
      <IngredientDetail ingredient={allIngredients} measure={allMeasures} />
      <InstructionsDetail instructions={strInstructions} />
      {/* <VideoDetails youtube={strYoutube} /> */}
      <CarroselDetails recomendations="props" />
      <StartRecipe literals={`/bebidas/${idRecipe}/in-progress`} />
    </div>
  ) : (
    <Redirect to="/bebidas/">{alert('Não foi possível te surpreender desta vez!')}</Redirect>
  );
}
export default DrinkDetails;

DrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
};
// import {
//   ImageDetail,
//   CardDetail,
//   IngredientDetail,
//   InstructionsDetail,
//   VideoDetail,
//   CarrouselDetails,
//   StartRecipe,
// } from '../components/details/details_index.js';

/*
    const receitaFavoritada =
    { id, type, area, category, alcoholicOrNot, name, image }
    localStorage.setItem('favoriteRecipes', JSON.stringify({ receitaFavoritada }));
    */

// const [favorite, setFavorite] = useState(false);
// const handleFavorite = () => {
//   setFavorite(!favorite);
// };
