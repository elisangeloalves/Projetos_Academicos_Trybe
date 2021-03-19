// doneREcipe
import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import FilterByType from '../components/details/FilterByType';
import FavoriteCard from '../components/details/FavoriteCard';
import FavoriteContext from '../context/FavoriteContext';
// import '../css/Header.css';
import '../css/favorite.css';
import { lookUpIdDrink, lookUpIdMeal } from '../service/apis';
import DoneCard from '../components/DoneCard';
// import { forEach } from 'lodash';

function putInStorage(doneRecipeId) {
  // console.log(doneRecipeId)
  let recipe = JSON.parse(localStorage.getItem('doneRecipes'));
  
  if (recipe) {
    recipe = recipe.filter(item => item.id !== doneRecipeId.id);
    // let recipesIds = localStorage.getsettem('doneRecipes' || []);
    recipe =  [...recipe, doneRecipeId];
    localStorage.setItem('doneRecipes', JSON.stringify([...recipe]));
    // return recipesIds;
  } else localStorage.setItem('doneRecipes', JSON.stringify([doneRecipeId]));
  // console.log('doneRecipes:', recipe);
}

const makeRequest = (array) => {
  if (array){
  array.forEach(item => {
  const { id, type } = item;
  // console.log(id, type);
  if (type ==='comida') {
    lookUpIdMeal(id).then((food) => putInStorage({...food.meals[0],id,type}))
    // .then(setItem('InProgressRecipes', JSON.stringify({ cocktails: { [idRecipe]: [] } })))
    .catch((error) => alert('comida', error));
  } else if (type === 'bebida') {
    lookUpIdDrink(id)
    .then((drink) => putInStorage({...drink.drinks[0], id, type}))
    .catch((error) => alert('bebida', error));
  }
})}}
  
  const mapRecipe = (recipes) => (
  recipes.map((item, idx) => (
    <DoneCard
      index={idx}
      item={item}
      // id={item.id}
      // type={item.type}
      // area={item.area}
      // category={item.category}
      // alcoholicOrNot={item.alcoholicOrNot}
      // name={item.name}
      // image={item.image}
      // recipes={array}
      // setReload={console.log}
      // show={false}
      // data={item.date}
      // tags={item.tags}
    />
  ))
);

/* 
 */
function DoneRecipes(props) {
  const { readFromStorage } = useContext(FavoriteContext);
  const [recipes, setRecipes] = useState([]);
  let { match: { params: { idRecipe }, url }, type, id } = props;
  // setRecipes(JSON.parse(localStorage.getItem('doneRecipes' || [])))

  // const recipeFfromStore = JSON.parse(localStorage.getItem('doneRecipes'));
  // const idReq = recipes.idDrink || recipes.idMeal;
  // 
  console.log('doneRecipes:', recipes);

    useEffect(() => {
      const  doneRecipe = JSON.parse(localStorage.getItem('idDoneRecipes' || []));
      makeRequest(doneRecipe);
      setRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
  }, []);
  const handletype = (type) => {
    console.log(type)
    // if (recipes){
    switch (type) {
      case 'comida':
        return setRecipes(readFromStorage('doneRecipes').filter((caso) => caso.type === type));
      case 'bebida':
        return setRecipes(readFromStorage('doneRecipes').filter((caso) => caso.type === type));
      default:
        return setRecipes(readFromStorage('doneRecipes'));
    }
  };
  return (
    <div className="body">
      <Header title="Receitas Feitas" />
      <div className="body-page">
        {/* <p>Tela de Receitas Favoritas</p> */}
        <FilterByType func={handletype} />
        {(!recipes) ? (
          <div>
            <p>Você não tem nenhuma receita favoritada!</p>
          </div>
          ) : (mapRecipe(recipes)
        )}
      </div>
    </div>
  );
}

export default DoneRecipes;
