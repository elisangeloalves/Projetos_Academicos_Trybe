// doneCard
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/favorite.css';
import ShareButton from '../components/details/ShareButton.jsx';


function DoneCard(props) {
  const {id, index, type, area, category, name, image, alcoholic, date, user, tags=['']} = props;
  // console.log(date.toLocaleDateString() );
  // let data = date !== undefined ?date.toLocaleDateString() : '' ;
  // useEffect(() => {
  //   setRecipe(item)
  // }, [recipe]);
  // const name= strMeal || strDrink;
  // const image= strMealThumb || strDrinkThumb;
  // const category= strCategory;
  // const area = strArea;
  // const alcoholicOrNot= strAlcoholic;
  
  return (
  <div id={name} className="">
    <Link to={`${type}s/${id}`}>
      <div className="">
        <img data-testid={`${index}-horizontal-image`} src={image} alt={name} />
      </div>
    </Link>
    <div className="">
      <div className="">
        {type === 'comida' ? (
          <div>
          <p data-testid={`${index}-horizontal-top-text`}>{`${area} - ${category}`}</p>
          { tags && <div>
          {/* <p data-testid={`${index}-${tags}-horizontal-tag`}>{tags}</p> */}
          </div>
          }
        </div>
        ) : (
          <p data-testid={`${index}-horizontal-top-text`}>{alcoholic}</p>
          )}
        <Link to={`/${type}s/${id}`}>
          <h3 data-testid={`${index}-horizontal-name`}>{name}</h3>
        </Link>
       <h4 data-testid={`${index}-horizontal-done-date`}>{date.toLocaleString()}</h4>
      </div>
      <div className="">
        <ShareButton literals={`${index}-horizontal-share-btn`} alt={name} url={props} id={id} />
          <p data-testid={`${index}-${tags}-horizontal-tag`}>{tags}</p>
      </div>
    </div>
  </div>
);
}



export default DoneCard;

DoneCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(Object).isRequired,
  setReload: PropTypes.func.isRequired,
  reload: PropTypes.bool.isRequired,
};