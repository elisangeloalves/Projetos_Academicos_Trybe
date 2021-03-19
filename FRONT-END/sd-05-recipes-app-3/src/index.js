import React from 'react';
import ReactDOM from 'react-dom';
import RecipeProvider from './context/RecipeProvider';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FavoriteProvider from './context/FavoriteProvider';

ReactDOM.render(
  <RecipeProvider>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  </RecipeProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
