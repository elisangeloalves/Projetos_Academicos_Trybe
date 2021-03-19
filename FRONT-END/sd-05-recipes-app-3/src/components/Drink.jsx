import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import '../css/recipe-cards-list.css';

class Drink extends Component {
  render() {
    const { idx, drink } = this.props;
    const { strDrinkThumb, strDrink, idDrink } = drink;
    // console.log(idx)
    return (
      <div className="card-recipe" data-testid={`${idx}-recipe-card`}>
        <Link to={`/bebidas/${idDrink}`}>
          <img
            alt={strDrink}
            className="card-recipe-image"
            src={strDrinkThumb}
            data-testid={`${idx}-card-img`}
          />
          <div className="card-recipe-body">
            <h3 className="card-recipe-name" data-testid={`${idx}-card-name`}>
              {strDrink}
            </h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default Drink;

Drink.propTypes = {
  idx: Proptypes.number.isRequired,
  drink: Proptypes.shape({
    strDrinkThumb: Proptypes.string.isRequired,
    strDrink: Proptypes.string.isRequired,
    idDrink: Proptypes.string.isRequired,
  }).isRequired,
};
