import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { allMealsList } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Food from '../components/Food';
import '../css/recipe-cards-list.css';
import FoodCategories from '../components/FoodCategories';

function MainFood() {
  const {
    data,
    setData,
    setFetching,
    fetching,
    setPage,
    category,
    search,
    isIngrFilter,
  } = useContext(RecipeContext);
  // let previous = false; if (!data) previous = true;
  useEffect(() => {
    setPage('MainFood');
    if (!isIngrFilter) {
      allMealsList()
        .then((response) => setData(response.meals))
        .catch((error) => alert('Algo inesperado aconteceu:', error));
      setFetching(false);
    }
  }, []);
  // previous dentro do [] deixado comentado pelo Elis
  if (fetching) {
    return (
      <div>
        <Header title="Comidas" />
        <div className="loading">Loading...</div>;
        <Footer />
      </div>
    );
  }

  return (data.length === 1 && category === '' && search !== '') ? (
    <div>
      <Redirect to={`/comidas/${data[0].idMeal}`} />
    </div>
  ) : (
    <div>
      {!fetching && <FoodCategories />}
      <Header title="Comidas" />
      <div className="list-of-cards">
        {data.map((item, index) => (
          (index < 12) ? <Food key={item.idMeal} food={item} idx={index} />
          : false))}
      </div>
      <Footer />
    </div>
  );
}

export default MainFood;

//   return (
//     <div>
//       <p>Redirecting...{console.log(data)}</p>
//       {alert('Não foi possível encontrar uma receita para esse filtro.')}
//     </div>
//   );
// }
