import React, { useState, useEffect, useContext } from 'react';
// import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const SelectValue = () => {
  const [value, selectValue] = useState('');
  const { currentFilter, setCurrentFilter } = useContext(StarWarsContext);
  useEffect(() => {
    setCurrentFilter(() => ({ ...currentFilter, value }));
  }, [value]);

  return (
    <label htmlFor="filterByNumericValues_1">
      <input
        data-testid="value-filter"
        name="filterByNumericValues_1"
        type="number"
        onChange={({ target }) => selectValue(target.value)}
      />
    </label>
  );
};
// const mapDispatchToProps = (dispatch) => ({
//   selectValue: (e) => dispatch(filterByValue(e)),
// });

export default SelectValue;

// SelectValue.propTypes = {
//   selectValue: PropTypes.func.isRequired,
// };
