import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import ShoppingCart from './Shopping-Cart';

const ButtonC = (props) => (
  <div>
    <button
      data-testid="product-add-to-cart"
      onClick={() => ShoppingCart.adicionaProduto(props.item)}
      type="button"
    >
      adicinar
    </button>
  </div>
);

const FreteGratis = (props) => (
  (props.isFree) ? <p data-testid="free-shipping">frete grátis</p> : null
);

const Card = (props) => (
  props.items.map((item) => (
    <div key={item.id} data-testid="product" className="card-info">
      <Link
        data-testid="product-detail-link"
        to={{
          pathname: `/details/${item.id}`,
          state: {
            detailsId: item.id,
            detailsTitle: item.title,
            detailsThumbnail: item.thumbnail,
            detailsPrice: item.price,
            isFreeShipping: item.shipping.free_shipping,
          },
        }}
      >
        <img src={item.thumbnail} alt={item.title} />
        <p>{`${item.title} - $ ${item.price}`}</p>
        <FreteGratis isFree={item.shipping.free_shipping} />

      </Link>
      <ButtonC item={item} />
    </div>
  ))
);

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detailsProduct: '' };
  }

  render() {
    return (
      <div className="card-container">
        <Card items={this.props.items} />
      </div>
    );
  }
}
export default ProductCard;
