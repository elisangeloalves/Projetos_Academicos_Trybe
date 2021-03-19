// backup of Favorite page

import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { whiteHeartIcon } from '../../images';
import { blackHeartIcon } from '../../images';
import { shareIcon } from '../../images';
import FavoriteContext from '../../context/FavoriteContext';
const CardDetail = (props) => {
  const { id, name, type strOption, strCategory, favorite, blackHeartIcon, whiteHeartIcon, shareIcon, handleFavorite } = props;
  const { readFromStorage, isFavorite } = useContext(FavoriteContext);
  const recipes = readFromStorage();
  const isItFavorite = recipes ? recipes.some((itIs) => itIs.id === id) : false;
  const [favorite, setFavorite] = useState(isItFavorite);

  function handleFavorite(favoriteRecipe) {
    isFavorite(favoriteRecipe, favorite);
  }
  return (
    <div className="card-details">
    <h3 data-testid="recipe-title">{strOption}</h3>
              <p data-testid="recipe-category">{strCategory}</p>
  {/*  <p data-testid="recipe-category">{type.toUpperCase()}</p> */}
      <div className="icon">
        <button
          type="button"
          onClick={() => {
            setFavorite(!favorite);
            handleFavorite(props);
          }}
        >
          <img
            data-testid="favorite-btn"
            src={favorite ? blackHeartIcon : whiteHeartIcon}
            alt="favoriteHeart"
          />
        </button>
      </div>
      <div className="icon">
        <button>
          <img data-testid="share-btn" src={shareIcon} alt="share" />
        </button>
      </div>
    </div>
  );
};
export default CardDetail;
CardDetail.propTypes = {
  strOption: PropTypes.string.isRequired,
  strCategory: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  blackHeartIcon: PropTypes.string.isRequired,
  whiteHeartIcon: PropTypes.string.isRequired,
  shareIcon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // handleFavorite: PropTypes.func.isRequired,
  // whiteHeartIcon: PropTypes.string.isRequired,
  // shareIcon: PropTypes.string.isRequired,
};