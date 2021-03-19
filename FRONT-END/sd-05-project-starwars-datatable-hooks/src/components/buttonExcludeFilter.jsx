import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const ExcludeFilter = () => {
  const {
  filterByNumericValues,
  excludeFilterButton,
} = useContext(StarWarsContext);

  return (
    <div className="teste">
      {filterByNumericValues.map(({ column, comparison, value }) => (
        <p data-testid="filter" key={column}>
          {`${column} ${comparison} ${value}`}
          <br />
          <button type="button" value={column} onClick={() => excludeFilterButton(column)}>
            &#9747;
          </button>
        </p>
      ))}
    </div>
  );
};

export default ExcludeFilter;
