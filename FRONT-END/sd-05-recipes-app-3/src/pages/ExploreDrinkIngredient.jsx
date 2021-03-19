import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { drinkIngredientsList, filterByDrinkIngredients } from '../service/apis';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';
// import '../css/explore.css';

function ExploreDrinkIngredient() {
  const { setData, fetching, setFetching, setIsIngrFilter } = useContext(RecipeContext);
  const [drinkIngrList, setDrinkIngrList] = useState([]);
  const [redirect, setRedirect] = useState(false);
  // const [dataIngrDrink, setDataIngrDrink] = useState([]);

  useEffect(() => {
    drinkIngredientsList()
      .then((resp) => setDrinkIngrList(resp.drinks.slice(0, 12)))
      .catch((error) => alert('Algo inesperado no drink ingr list', error));
    setFetching(false);
  }, []);
  // objeto retornado pela api: pegar .strIngredient1

  const handleClick = (chosenIngredient) => {
    filterByDrinkIngredients(chosenIngredient)
      .then((resp) => {
        setData(resp.drinks);
        // console.log(resp.drinks);
      })
      .catch((error) => alert('Algo inesperado no drink ingredients', error));
    setRedirect(true);
    setIsIngrFilter(true);
  };

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <section className="list-of-cards">
        {fetching && <p>Loading...</p>}
        {!fetching &&
          drinkIngrList.map((ingr, index) => (
            <button
              key={ingr.strDrink}
              data-testid={`${index}-ingredient-card`}
              onClick={() => handleClick(ingr.strIngredient1)}
            >
              <img
                className=""
                data-testid={`${index}-card-img`}
                src={`https://www.thecocktaildb.com/images/ingredients/${ingr.strIngredient1}-Small.png`}
                alt=""
              />
              <p data-testid={`${index}-card-name`}>{ingr.strIngredient1}</p>
            </button>
          ))}
      </section>
      {redirect && <Redirect to="/bebidas" />}
      <Footer />
    </div>
  );
}

export default ExploreDrinkIngredient;
// [ HA ] - Consultation of PR https://github.com/tryber/sd-05-recipes-app-4/pull/46/files
