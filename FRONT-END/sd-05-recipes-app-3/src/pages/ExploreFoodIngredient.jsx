import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { mealIngredientsList, filterByMealIngredients } from '../service/apis';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';
// import '../css/explore.css';

function ExploreFoodIngredient() {
  const { setData, fetching, setFetching, setIsIngrFilter } = useContext(RecipeContext);
  const [mealIngrList, setMealIngrList] = useState([]);
  const [redirect, setRedirect] = useState(false);
  // const [dataIngrFood, setDataIngrFood] = useState([]);

  useEffect(() => {
    mealIngredientsList()
      .then((resp) => setMealIngrList(resp.meals.slice(0, 12)))
      .catch((error) => alert('Algo inesperado no food ingr list', error));
    setFetching(false);
  }, []);

  const handleClick = (chosenIngredient) => {
    filterByMealIngredients(chosenIngredient)
      .then((resp) => {
        setData(resp.meals);
        // console.log(resp);
      })
      .catch((error) => alert('Algo inesperado no food ingredients', error));
    setRedirect(true);
    setIsIngrFilter(true);
  };

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <section className="list-of-cards">
        {fetching && <p>Loading...</p>}
        {!fetching &&
          mealIngrList.map((ingr, index) => (
            <button
              key={ingr.strIngredient}
              data-testid={`${index}-ingredient-card`}
              onClick={() => handleClick(ingr.strIngredient)}
            >
              <img
                data-testid={`${index}-card-img`}
                src={`https://www.themealdb.com/images/ingredients/${ingr.strIngredient}-Small.png`}
                alt=""
              />
              <p data-testid={`${index}-card-name`}>{ingr.strIngredient}</p>
            </button>
          ))}
      </section>
      {redirect && <Redirect to="/comidas" />}
      <Footer />
    </div>
  );
}

export default ExploreFoodIngredient;
