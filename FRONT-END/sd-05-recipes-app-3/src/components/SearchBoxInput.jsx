import React from 'react';
import PropTypes from 'prop-types';

const SearchBoxInput = ({ handleChange, name, value, dataTestId }) => (
  <div className="searchBox">
    <label htmlFor={name}>
      <input
        data-testid={dataTestId}
        type="text"
        name={name}
        value={value}
        onChange={({ target }) => handleChange(target.value)}
        placeholder="Digite algo"
      />
    </label>
  </div>
);

export default SearchBoxInput;


SearchBoxInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
};


SearchBoxInput.defaultProps = {
  dataTestId: '',
};
