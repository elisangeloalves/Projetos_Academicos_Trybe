import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { allDrinksList } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Drink from '../components/Drink';
import DrinkCategories from '../components/DrinkCategories';
import '../css/recipe-cards-list.css';

function MainDrink() {
  const {
    data,
    setData,
    isIngrFilter,
    setFetching,
    fetching,
    setPage,
    category,
    search,
  } = useContext(RecipeContext);
  // let previous = false; if (!data) previous = true;
  useEffect(() => {
    setPage('MainDrink');
    if (!isIngrFilter) {
      allDrinksList()
        .then((response) => setData(response.drinks))
        .catch((error) => alert('Algo inesperado aconteceu:', error));
      setFetching(false);
    }
  }, []);
  // previous dentro do [] deixado comentado pelo Elis
  if (fetching) {
    return (
      <div>
        <Header title="Bebidas" />
        <div className="loading">Loading...</div>;
        <Footer />
      </div>
    );
  }

  return (data.length === 1 && category === '' && search !== '') ? (
    <div>
      <Redirect to={`/bebidas/${data[0].idDrink}`} />
    </div>
  ) : (
    <div>
      {!fetching && <DrinkCategories />}
      <Header title="Bebidas" />
      <div className="list-of-cards">
        {data.map((item, idx) => (
          (idx < 12) ? <Drink key={item.idDrink} drink={item} idx={idx} />
          : false))}
      </div>
      <Footer />
    </div>
  );
}

export default MainDrink;
// if (data === null) {
//   return (
//     <div>
//       <p>Redirecting...</p>
//       {alert('Não foi possível encontrar uma receita para esse filtro.')}
//     </div>
//   );
// }
