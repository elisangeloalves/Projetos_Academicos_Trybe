import React, { useEffect, useContext } from 'react';
import { drinkCategories, drinkCategoryFilter, allDrinksList } from '../service/apis';
import RecipeContext from '../context/RecipeContext';
import '../css/Categories.css';

function DrinkCategories() {
  const { categories, setCategories, setData, category, setCategory } = useContext(RecipeContext);

  useEffect(() => {
    drinkCategories()
      .then((response) => setCategories(response.drinks))
      .catch((error) => alert('Atualize a página', error));
  }, []);

  const handleFilter = (filter) => {
    drinkCategoryFilter(filter).then((response) => setData(response.drinks))
    .catch((error) => alert('Atualize a página', error));
  };

  const handleClick = ({ target }) => {
    if (target.value !== category && target.value !== 'All') {
      setCategory(target.value);
      handleFilter(target.value);
    } else if (target.value === category || target.value === 'All') {
      setCategory('All');
      allDrinksList().then((response) => setData(response.drinks))
        .catch((error) => alert('Algo inesperado aconteceu:', error));
    }
  };
  return (
    <div className="categories">
      {categories.map((categ, i) => (i <= 4 ? (
        <div className="categorie">
          <button
            type="button"
            key={categ.strCategory}
            data-testid={`${categ.strCategory}-category-filter`}
            onClick={handleClick}
            value={categ.strCategory}
          >{categ.strCategory}</button>
        </div>
      ) : null
      ))}
      <div className="categorie">
        <button
          type="button"
          data-testid="All-category-filter"
          value="All"
          onClick={handleClick}
        >All</button>
      </div>
    </div>
  );
}

export default DrinkCategories;
