import React, { useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { sortByColumn } from '../reducers/createActions';
import StarWarsContext from '../context/StarWarsContext';

const planet = ['name', 'climate', 'population', 'created', 'diameter', 'edited',
  'gravity', 'orbital_period', 'rotation_period',
  'surface_water', 'terrain', 'url', 'films'];

const SelectOrder = () => {
  const [column, selectColumn] = useState('name');
  const { order, setOrder } = useContext(StarWarsContext);

  useEffect(() => {
    setOrder(() => ({ ...order, column }));
  }, [column]);

  return (
    <div className="select_order-filter">
      <label htmlFor="order">Ordem</label>
      <select
        data-testid="column-sort"
        name="order"
        onChange={({ target }) => selectColumn(target.value)}
      >
        {planet.map((attribute) => (
          <option key={attribute} value={attribute}>{attribute}</option>))}
      </select>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   selectColumn: (e) => dispatch(sortByColumn(e)),
// });

export default SelectOrder;
// SelectOrder.propTypes = {
//   selectColumn: PropTypes.func.isRequired,
// };
