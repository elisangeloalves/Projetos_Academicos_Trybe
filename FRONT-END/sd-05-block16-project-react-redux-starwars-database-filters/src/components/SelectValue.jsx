import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByValue } from '../reducers/createActions';

const SelectValue = ({ selectValue }) => (
  <label htmlFor="filterByNumericValues_1">
    <input
      data-testid="value-filter"
      name="filterByNumericValues_1"
      type="number"
      onChange={(e) => selectValue(e)}
    />
  </label>
);

const mapDispatchToProps = (dispatch) => ({
  selectValue: (e) => dispatch(filterByValue(e)),
});

export default connect(null, mapDispatchToProps)(SelectValue);

SelectValue.propTypes = {
  selectValue: PropTypes.func.isRequired,
};
