import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lookUpIdMeal } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import '../css/details.css';

function FoodDetails(props) {
  const { idRecipe } = props.match.params;
  const { fetching, setFetching, setDetails, details } = useContext(RecipeContext);
  const { strMealThumb, strMeal } = details[0];
  useEffect(() => {
    setFetching(true);
    lookUpIdMeal(idRecipe)
      .then((food) => setDetails(food.meals))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
    setFetching(false);
  }, []);

  if (fetching) return <div>Loading...</div>;
  return idRecipe ? (
    <div>
      FoodDetails Page
      <div className="card-recipe">
        <img alt={strMeal} className="card-recipe-image" src={strMealThumb} />
        <div className="card-recipe-body">
          <h3 className="card-recipe-name">{strMeal}</h3>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/comidas/">{alert('Não foi possível te surpreender desta vez!')}</Redirect>
  );
}

export default FoodDetails;

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(String).isRequired,
  }).isRequired,
};

/*
(food.meals) ?
setDetails(food.meals) : alert('Erro no servidor! tente novamente.'))
  const recipeGetter = (ingredient) => {
    const items = Object.keys(ingredient).filter((keysIngridients) => keysIngridients
      .includes('strIngredient')).filter(value => ingredient[value] !== '');
    const quantities = Object.keys(ingredient).filter((qtIngridients) => qtIngridients
      .includes('strMeasure')).filter(value => ingredient[value] !== '');
    // construindo um array de ingredientes
    const allIngredients = items.map(value => ingredient[value]);
    // construindo um array de medidas dos ingredientes
    const allMeasures = quantities.map(value => ingredient[value]);

    return { allIngredients, allMeasures };
  };

const { allIngredients, allMeasures } = recipeGetter(details[0])
console.log(allIngredients, allMeasures);

<div>
  <h3 >Ingredientes e quantidades</h3>
  {allIngredients.map((ingredient, i) => (
    <p>{ingredient} : {allMeasures[i]}</p>
    ))}
</div>
*/
