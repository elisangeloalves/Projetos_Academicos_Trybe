import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByColumn } from '../reducers/createActions';

const options = ['Coluna', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

class SelectColumn extends Component {
  render() {
    const { selectColumn, filterSet } = this.props;
    let optionHidden = options;
    if (filterSet.length !== 0) {
      filterSet.forEach(({ column }) => {
        optionHidden = optionHidden.filter((option) => option !== column);
      });
    }

    // console.log(optionHidden);
    return (
      <div className="select_column-filter">
        <label htmlFor="select" />
        <select data-testid="column-filter" name="select" onChange={(e) => selectColumn(e)}>
          {optionHidden.map((option) => (
            <option key={option} value={option}>{option}</option>))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { filters: { filterByNumericValues: filterSet } } = state;
  return ({
    filterSet,
  });
};

const mapDispatchToProps = (dispatch) => ({
  selectColumn: (e) => dispatch(filterByColumn(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectColumn);
// export default SelectColumn;

SelectColumn.propTypes = {
  selectColumn: PropTypes.func.isRequired,
  filterSet: PropTypes.arrayOf('string'),
};

SelectColumn.defaultProps = {
  filterSet: null,
};
