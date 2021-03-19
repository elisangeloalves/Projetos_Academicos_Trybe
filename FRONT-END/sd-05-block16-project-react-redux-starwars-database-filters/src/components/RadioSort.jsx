import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortByAttribute } from '../reducers/createActions';

class RadioSort extends Component {
  render() {
    const { value, order: { sort }, selectAttribute } = this.props;
    return (
      <div>
        <input
          data-testid="column-sort-input"
          id={value}
          name="filterByOrder"
          type="radio"
          value={value}
          onChange={(e) => selectAttribute(e)}
          checked={(sort === value) ? 1 : 0}
        />
        <label htmlFor={value}>{value}</label>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { filters: { order } } = state;
  return {
    ...state,
    order,
  };
};
const mapDispatchToProps = (dispatch) => ({
  selectAttribute: (e) => dispatch(sortByAttribute(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RadioSort);

RadioSort.propTypes = {
  value: PropTypes.string.isRequired,
  order: PropTypes.shape({ sort: PropTypes.string.isRequired }).isRequired,
  selectAttribute: PropTypes.func.isRequired,
};

RadioSort.defaultProp = {
  value: 'ASD' || 'DESC',
};
