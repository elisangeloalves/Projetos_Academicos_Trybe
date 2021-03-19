import React, { useContext } from 'react';
// import PropTypes, { shape } from 'prop-types';
import SelectColumn from './SelectColumn';
import SelectOrder from './SelectOrder';
import SelectComparison from './SelectComparison';
import Button from './Button';
import RadioSort from './RadioSort';
import SelectValue from './SelectValue';
import ExcludeFilter from './buttonExcludeFilter';
import StarWarsContext from '../context/StarWarsContext';

const InputProcurar = (callback) => (
  <div>
    <label htmlFor="filterByName">Procurar</label>
    <input
      data-testid="name-filter"
      name="filterByName"
      type="text"
      // value={name}
      onChange={({ target }) => callback(target.value)}
    />
  </div>
);

const FilterBar = () => {
  const { setFilterByName, filterByNumericValues } = useContext(StarWarsContext);
  const handleChange = (change) => {
    setFilterByName({ name: change });
  };

  return (
    <div>
      <p>StarWars Datatable with Filters</p>
      <form className="head">
        {InputProcurar(handleChange)}
        <SelectOrder />
        <RadioSort />
        <Button data="column-sort-button" />
        <SelectColumn />
        <SelectComparison />
        <SelectValue />
        <Button data="button-filter" />
        {(filterByNumericValues.length > 0) ? <ExcludeFilter /> : false}
      </form>
    </div>
  );
};

export default FilterBar;

// FilterBar.propTypes = {
//   callback: PropTypes.func.isRequired,
// };
