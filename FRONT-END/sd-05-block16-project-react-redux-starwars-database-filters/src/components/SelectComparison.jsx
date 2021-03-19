import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByComparison } from '../reducers/createActions';

const options = ['Comparação', 'maior que', 'menor que', 'igual a'];

class SelectComparison extends Component {
  render() {
    const { selectComparison } = this.props;
    return (
      <div className="select_comparison-filter">
        <label htmlFor="select" />
        <select data-testid="comparison-filter" name="select" onChange={(e) => selectComparison(e)}>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>))}
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectComparison: (e) => dispatch(filterByComparison(e)),
});

export default connect(null, mapDispatchToProps)(SelectComparison);
// export default SelectComparison;

SelectComparison.propTypes = {
  selectComparison: PropTypes.func.isRequired,
};
