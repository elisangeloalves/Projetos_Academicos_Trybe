import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const produto = [];

const adicionaProduto = (item) => { produto.push(item); };

class Carrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrinho: [],
      total: 0,
    };
    this.insereProduto = this.insereProduto.bind(this);
  }

  componentDidMount() {
    this.insereProduto(produto);
  }

  insereProduto(item) {
    const { carrinho } = this.state;
    console.log(item);
    let produtoPronto = {};
    const array = [];
    if (carrinho.length === 0) {
      item.forEach((cada) => {
        const { free_shipping: freeShipping } = { ...cada.shipping };
        produtoPronto = { id: cada.id, title: cada.title, price: cada.price, quantity: 1, shipping: freeShipping ? 'sim' : 'não' };
        array.push(produtoPronto);
      });
      this.setState({ carrinho: [...array], total: 0 });
    }
  }

  render() {
    const { carrinho } = this.state;
    if (carrinho.length === 0) {
      return (
        <div className="carrinho-vazio">
          <Link to="/">Ir as compras!</Link>
          <div className="">
            <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
            <img src="../cart-3.png" alt="imagem de um carrinho vazio" width="300px" />
          </div>
        </div>
      );
    }
    return (
      <div>
        <Link to="/">Continuar comprando</Link>
        <ul>
          {this.state.carrinho.map((item) => (
            <li key={item.id}>
              <div data-testid="shopping-cart-product-name">{item.title}</div>
              <div>Unidades: {item.quantity}</div>
              <div>R$: {item.price}</div>
              <div>Frete grátis: {item.shipping}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default { Carrinho, adicionaProduto };
