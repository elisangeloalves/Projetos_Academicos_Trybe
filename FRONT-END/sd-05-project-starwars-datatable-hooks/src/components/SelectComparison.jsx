import React, { useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { filterByComparison } from '../reducers/createActions';
import StarWarsContext from '../context/StarWarsContext';

const options = ['Comparação', 'maior que', 'menor que', 'igual a'];

const SelectComparison = () => {
  const [comparison, selectComparison] = useState('');

  const { currentFilter, setCurrentFilter } = useContext(StarWarsContext);
  useEffect(() => {
    setCurrentFilter(() => ({ ...currentFilter, comparison }));
  }, [comparison]);

  return (
    <div className="select_comparison-filter">
      <label htmlFor="select" />
      <select
        data-testid="comparison-filter"
        name="select"
        onChange={({ target }) => selectComparison(target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>))}
      </select>
    </div>
  );
};
//
export default SelectComparison;

// SelectComparison.propTypes = {
//   selectComparison: PropTypes.func.isRequired,
// };
