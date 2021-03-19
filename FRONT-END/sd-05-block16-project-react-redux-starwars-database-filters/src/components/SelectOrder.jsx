import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortByColumn } from '../reducers/createActions';

const planet = ['name', 'climate', 'population', 'created', 'diameter', 'edited',
  'gravity', 'orbital_period', 'rotation_period',
  'surface_water', ' terrain', 'url', 'films'];

class SelectOrder extends Component {
  render() {
    const { selectColumn } = this.props;
    return (
      <div className="select_order-filter">
        <label htmlFor="order">Ordem</label>
        <select
          data-testid="column-sort"
          name="order"
          onChange={(e) => selectColumn(e)}
        >
          {planet.map((attribute) => (
            <option key={attribute} value={attribute}>{attribute}</option>))}
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectColumn: (e) => dispatch(sortByColumn(e)),
});

export default connect(null, mapDispatchToProps)(SelectOrder);

SelectOrder.propTypes = {
  selectColumn: PropTypes.func.isRequired,
};
