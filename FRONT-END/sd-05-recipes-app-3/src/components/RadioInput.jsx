import React from 'react';
import PropTypes from 'prop-types';
import '../css/SearchBar.css';

const RadioInput = ({ onChange, value, validation, dataTestId }) => (
  <div className="radioSearch" data-testid={dataTestId}>
    <label htmlFor={value}>
      <input
        id={value}
        type="radio"
        name="select-radio"
        value={value}
        onChange={onChange}
        checked={(validation === value) ? 1 : 0}
      />
      {value}
    </label>
  </div>
);

export default RadioInput;

RadioInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  validation: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
};

RadioInput.defaultProps = {
  dataTestId: '',
};

