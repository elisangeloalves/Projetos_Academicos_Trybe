//  filterbytype
import React from 'react';
import PropTypes from 'prop-types';
import '../../css/favorite.css';

function FilterByType({ func }) {
  return (
    <div className="filterByType">
      <div key="All" className="favorite">
        <button
          value="all"
          type="button"
          // key="All"
          data-testid="filter-by-all-btn"
          onClick={() => func('all')}
        >
          All
        </button>
      </div>
      <div key="Comidas" className="favorite">
        <button
          type="button"
          value="comidas"
          data-testid="filter-by-food-btn"
          onClick={() => func('comida')}
        >
          Food
        </button>
      </div>
      <div key="Bebidas" className="favorite">
        <button
          type="button"
          value="bebidas"
          data-testid="filter-by-drink-btn"
          onClick={() => func('bebida')}
        >
          Drink
        </button>
      </div>
    </div>
  );
}
export default FilterByType;


FilterByType.propTypes = {
  func: PropTypes.func.isRequired,
};
