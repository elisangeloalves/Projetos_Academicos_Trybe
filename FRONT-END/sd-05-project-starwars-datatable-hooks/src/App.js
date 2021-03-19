import React from 'react';
// import propTypes from 'prop-types';
import './App.css';
// import FilterBar from './components/FilterBar';
import Provider from './context/Provider';
import MainPage from './components/MainPage';


function App() {
  return (
    <Provider>
      <MainPage />
    </Provider>
  );
}

// App.contextType = StarWarsContext;
// export const store = createStore(reducer, applyMiddleware(thunk));
// store.subscribe(() => console.log(store.getState().filters));

// const mapDispatchToProps = (dispatch) => ({
//   LoadData: () => dispatch(fetchData()),
// });

// export default connect(null, mapDispatchToProps)(App);

// App.propTypes = {
//   LoadData: propTypes.func.isRequired,

export default App;
