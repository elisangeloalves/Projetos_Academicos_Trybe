import React, { Component } from 'react';
import './DetailedView.css';
import Review from './Review';
import ShoppingCart from './Shopping-Cart';

class DetailedView extends Component {
  constructor(props) {
    super(props);
    const {
      detailsId,
      detailsTitle,
      detailsThumbnail,
      detailsPrice,
      isFreeShipping,
    } = props.location.state;
    this.state = {
      id: detailsId,
      title: detailsTitle,
      thumbnail: detailsThumbnail,
      price: detailsPrice,
      shipping: isFreeShipping,
    };
    // this.state = {
    //   id: detailsId,
    //   title: detailsTitle,
    //   thumbnail: detailsThumbnail,
    //   price: detailsPrice,
    // };
    console.log(detailsTitle);
  }

  render() {
    return (
      <div className="detailed-view-page">
        <div className="shopping-cart-link">
          <button>Placeholder: para levar ao carrinho de compras</button>
          <button
            data-testid="product-add-to-cart"
            onClick={() => ShoppingCart.adicionaProduto(this.state)}
            type="button"
          >
            adicinar
          </button>
        </div>
        <div key={this.state.id} className="card-info-details">
          <img
            src={this.state.thumbnail}
            alt={this.state.title}
          />
          <div>
            <strong>
              <p data-testid="product-detail-name">{this.state.title}</p>
            </strong>
            <p>${this.state.price}</p>
          </div>
        </div>
        <Review />
      </div>
    );
  }
}

export default DetailedView;
