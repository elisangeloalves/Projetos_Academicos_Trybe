import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ProductListing from './Components/ProductListing';
import ShoppingCart from './Components/Shopping-Cart';
import DetailedView from './Components/DetailedView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header className="App-header">
          <Link to="/carrinho">
            <span data-testid="shopping-cart-size">0</span>
            <img
              data-testid="shopping-cart-button"
              src="../public/cart-1.png"
              alt="carrinho de compras"
              height="50px"
            />
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={ProductListing} />
          {/* <Route exact path="/" component={ProductListing} /> */}
          <Route path="/details/:id" component={DetailedView} />
          <Route path="/carrinho/" component={ShoppingCart.Carrinho} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
