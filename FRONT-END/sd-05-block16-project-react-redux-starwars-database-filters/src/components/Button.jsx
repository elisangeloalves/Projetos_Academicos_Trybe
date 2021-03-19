import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByNumericValues, sortByColumn } from '../reducers/createActions';


// const sortByColumn = (e) => console.log(e);


class RadioSort extends Component {
  // constructor(props) {
  //   super(props);
  //   // const { radioSort } = this.props;
  //   // this.state = {
  //   //   radioSort,
  //   // };
  // }

  checkClickedButton(value) {
    const { buttonToSorting, buttonToFiltering } = this.props;
    // const { order: { column, sort } } = this.props;
    if (value === 'button-filter') buttonToFiltering();
    else if (value === 'column-sort-button') {
      buttonToSorting();
    }
  }

  render() {
    const { data } = this.props;

    return (
      <button
        data-testid={data}
        name={data}
        type="button"
        onClick={() => this.checkClickedButton(data)}
      >
        Filtrar
      </button>
    );
  }
}
//   const { filters: { filterByName: { name } } } = state;

const mapStateToProps = (state) => {
  const { filters: { order } } = state;
  return {
    ...state,
    order,
  };
};

const mapDispatchToProps = (dispatch) => ({
  buttonToSorting: () => dispatch(sortByColumn()),
  buttonToFiltering: () => dispatch(filterByNumericValues()),

});
export default connect(mapStateToProps, mapDispatchToProps)(RadioSort);


RadioSort.propTypes = {
  data: propTypes.string,
  buttonToSorting: propTypes.func.isRequired,
  buttonToFiltering: propTypes.func.isRequired,
};

RadioSort.defaultProps = {
  data: 'button',
};
