import React, { useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { filterByColumn } from '../reducers/createActions';
import StarWarsContext from '../context/StarWarsContext';

const options = ['Coluna', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const SelectColumn = () => {
  const [column, selectColumn] = useState('');

  const { currentFilter, setCurrentFilter, filterByNumericValues } = useContext(StarWarsContext);
  useEffect(() => {
    setCurrentFilter(() => ({ ...currentFilter, column }));
  }, [column]);

  let optionHidden = options;
  if (filterByNumericValues.length !== 0) {
    filterByNumericValues.forEach((c) => {
      optionHidden = optionHidden.filter((option) => option !== c.column);
    });
  }

  return (
    <div className="select_column-filter">
      <label htmlFor="select" />
      <select
        data-testid="column-filter"
        name="select"
        onChange={({ target }) => selectColumn(target.value)}
      >
        {optionHidden.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectColumn;

// SelectColumn.propTypes = {
//   selectColumn: PropTypes.func.isRequired,
//   filterSet: PropTypes.arrayOf(PropTypes.object),
// };

// SelectColumn.defaultProps = {
//   filterSet: null,
// };
