import React, { useState, useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const Asd = (sort, selectAttribute) => (
  <div>
    <label htmlFor="asc">ASC
    <input
      data-testid="column-sort-input-asc"
      id="asc"
      name="filterByOrder"
      type="radio"
      value="ASC"
      onChange={({ target }) => { selectAttribute(target.value); }}
      checked={sort === 'ASC'}
    />
    </label>
  </div>
);

const Desc = (sort, selectAttribute) => (
  <div>
    <label htmlFor="desc">DESC
    <input
      data-testid="column-sort-input-desc"
      id="desc"
      name="filterByOrder"
      type="radio"
      value="DESC"
      onChange={({ target }) => selectAttribute(target.value)}
      checked={sort === 'DESC'}
    />
    </label>
  </div>
);

const RadioSort = () => {
  const { order, setOrder } = useContext(StarWarsContext);
  const [sort, selectAttribute] = useState('ASC');

  useEffect(() => {
    setOrder({ ...order, sort });
  }, [sort]);

  return (
    <div>
      {Asd(sort, selectAttribute)}
      {Desc(sort, selectAttribute)}
    </div>
  );
};

export default RadioSort;

RadioSort.propTypes = {
  // value: PropTypes.string.isRequired,
  // order: PropTypes.shape({ sort: PropTypes.string.isRequired }).isRequired,
  // selectAttribute: PropTypes.func.isRequired,
};

// RadioSort.defaultProp = {
//   value: 'ASC' || 'DESC',
// };
