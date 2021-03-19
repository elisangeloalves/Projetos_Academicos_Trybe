// provider
import React from 'react';
import PropTypes from 'prop-types';
import FavoriteContext from './FavoriteContext';

const saveInStorage = (recipes, key) => localStorage.setItem(/* 'favoriteRecipes' */key, JSON.stringify(recipes));

const readFromStorage = (value) => JSON.parse(localStorage.getItem(value/*  || 'favoriteRecipes' */));

const getFavorited = (favoriteRecipe) => {
  console.log('esta receita será favorita:', favoriteRecipe);
  if (!localStorage.getItem('favoriteRecipes')) {
    saveInStorage([{ ...favoriteRecipe }]);
  } else {
    let recipes = readFromStorage('favoriteRecipes');
    // console.log(recipes);
    recipes = recipes.filter((card) => card.id !== favoriteRecipe.id);
    recipes = [...recipes, { ...favoriteRecipe }];
    saveInStorage(recipes, 'favoriteRecipes');
    // console.log('receita favoritada:', favoriteRecipe);
  }
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({ status: 'OK' });
  //   }, 1000);
  // });
};
//
function getDesfavorited(recipeId, key) {
  console.log('id da receita foi desfavoritada: ', recipeId);

  let recipes = readFromStorage('favoriteRecipes' || key);
  // console.log('antes: ', recipes)
  recipes = recipes ? recipes.filter((recipe) => recipe.id !== recipeId) : [];
  // console.log('depois: ', recipes)

  saveInStorage(recipes, 'favoriteRecipes' || key);
  // console.log('receita desfavoritada:', recipes[recipeId]);
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({ status: 'OK' });
  //   }, 1000);
  // });
}
//
function FavoriteProvider({ children }) {
  function isFavorite(favoriteRecipe, isItFavorite, key) {
    console.log('receita favoritada?: ', isItFavorite, favoriteRecipe);

    // console.log('estado receita favorite?', !isItFavorite,'receita: ', favoriteRecipe);
    return isItFavorite ? getFavorited(favoriteRecipe, key) : getDesfavorited(favoriteRecipe, key);
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
