import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import propTypes from 'prop-types';
import './App.css';
import Table from './components/Table';
import fetchData from './components/FetchData';
import reducer from './reducers/index';


class App extends Component {
  componentDidMount() {
    const { LoadData } = this.props;
    LoadData();
  }

  render() {
    return (
      <div>
        <Table />
      </div>
    );
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState().filters));

const mapDispatchToProps = (dispatch) => ({
  LoadData: () => dispatch(fetchData()),
});

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  LoadData: propTypes.func.isRequired,
};
