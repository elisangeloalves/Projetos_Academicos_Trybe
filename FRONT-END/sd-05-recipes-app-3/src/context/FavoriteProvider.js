import React from 'react';
import PropTypes from 'prop-types';
import FavoriteContext from './FavoriteContext';

const saveInStorage = (recipes) => localStorage.setItem('favoriteRecipes', JSON.stringify(recipes));

const readFromStorage = () => JSON.parse(localStorage.getItem('favoriteRecipes'));

const getFavorited = (favoriteRecipe) => {
  console.log('esta receita será favorita:', favoriteRecipe);
  if (!localStorage.getItem('favoriteRecipes')) {
    saveInStorage([{ ...favoriteRecipe }]);
  } else {
    let recipes = readFromStorage();
    // console.log(recipes);
    recipes = recipes.filter((card) => card.id !== favoriteRecipe.id);
    recipes = [...recipes, { ...favoriteRecipe }];
    saveInStorage(recipes);
    // console.log('receita favoritada:', favoriteRecipe);
  }
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({ status: 'OK' });
  //   }, 1000);
  // });
};
//
function getDesfavorited(recipeId) {
  console.log('id da receita foi desfavoritada: ', recipeId);

  let recipes = readFromStorage();
  // console.log('antes: ', recipes)
  recipes = recipes ? recipes.filter((recipe) => recipe.id !== recipeId) : [];
  // console.log('depois: ', recipes)

  saveInStorage(recipes);
  // console.log('receita desfavoritada:', recipes[recipeId]);
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({ status: 'OK' });
  //   }, 1000);
  // });
}
//
function FavoriteProvider({ children }) {
  function isFavorite(favoriteRecipe, isItFavorite) {
    console.log('receita favoritada?: ', isItFavorite, favoriteRecipe);

    // console.log('estado receita favorite?', !isItFavorite,'receita: ', favoriteRecipe);
    return isItFavorite ? getFavorited(favoriteRecipe) : getDesfavorited(favoriteRecipe);
  }
  //
  const Context = {
    getDesfavorited,
    readFromStorage,
    isFavorite,
  };

  return <FavoriteContext.Provider value={Context}>{children}</FavoriteContext.Provider>;
}

export default FavoriteProvider;

FavoriteProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

// const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
// if (!favoriteRecipes) setRecipes([]);
// else  setRecipes([...favoriteRecipes]);
