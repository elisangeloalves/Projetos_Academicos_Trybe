import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { randomDrinksApi } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/explore.css';

function ExploreDrink() {
  const { data, setData, setFetching, fetching } = useContext(RecipeContext);
  const [surprise, setSurprise] = useState(false);

  const randomRecipeDetail = () => {
    randomDrinksApi()
      .then((response) => ((!response.drinks) ? console.log(response) : setData(response.drinks)))
      .catch((error) => alert('Algo inesperado aconteceu:', error));
    setFetching(false);
    setSurprise(true);
  };

  return (
    <div>
      <Header title="Explorar Bebidas" />
      <div className="explore-buttons">
        <Link className="buttons" to="/explorar/bebidas/ingredientes">
          <button type="button" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
        <Link className="buttons surprise">
          <button type="button" data-testid="explore-surprise" onClick={() => randomRecipeDetail()}>
            Me Surpreenda!
          </button>
        </Link>
      </div>
      {!fetching && surprise && data.length > 0 && <Redirect to={`/bebidas/${data[0].idDrink}`} />}
      <Footer />
    </div>
  );
}

export default ExploreDrink;
