//  filterbytype

import React from 'react';
import '../../css/Categories.css';

// const handleClick = ({ target }) => {
//   if (target.value !== category && target.value !== 'All') {
//     setCategory(target.value);
//     handleFilter(target.value);
//   } else if (target.value === category || target.value === 'All') {
//     setCategory('All');
//     allDrinksList().then((response) => setData(response.drinks))
//       .catch((error) => alert('Algo inesperado aconteceu:', error));
//   }
// };

function FilterByType({ func }) {
  return (
    <div className="categories">
      <div key="All" className="favorite">
        <button
          value="all"
          type="button"
          // key="All"
          data-testid="filter-by-all-btn"
          onClick={({ target }) => func(target.value)}
        >
          All
        </button>
      </div>
      <div key="Comidas" className="favorite">
        <button
          type="button"
          value="comidas"
          data-testid="filter-by-food-btn"
          onClick={({ target }) => func(target.value)}
        >
          Food
        </button>
      </div>
      <div key="Bebidas" className="favorite">
        <button
          type="button"
          value="bebidas"
          data-testid="filter-by-drink-btn"
          onClick={({ target }) => func(target.value)}
        >
          Drink
        </button>
      </div>
    </div>
  );
}
export default FilterByType;
