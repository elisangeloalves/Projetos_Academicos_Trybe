import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { randomMealsApi } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/explore.css';

function ExploreFood() {
  const { data, setData, setFetching, fetching } = useContext(RecipeContext);
  const [surprise, setSurprise] = useState(false);

  const randomRecipeDetail = () => {
    randomMealsApi()
      .then((response) => ((!response.meals) ? console.log(response) : setData(response.meals)))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
    setFetching(false);
    setSurprise(true);
  };

  return (
    <div>
      <Header title="Explorar Comidas" />
      <div className="explore-buttons">
        <Link className="buttons" to="/explorar/comidas/ingredientes">
          <button type="button" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
        <Link className="buttons" to="/explorar/comidas/area">
          <button type="button" data-testid="explore-by-area">
            Por Local de Origem
          </button>
        </Link>
        <Link className="buttons surprise">
          <button
            type="button"
            data-testid="explore-surprise"
            onClick={() => randomRecipeDetail()}
          >
            Me Surpreenda!
          </button>
        </Link>
      </div>
      {!fetching && surprise && data.length > 0 && <Redirect to={`/comidas/${data[0].idMeal}`} />}
      <Footer />
    </div>
  );
}

export default ExploreFood;
