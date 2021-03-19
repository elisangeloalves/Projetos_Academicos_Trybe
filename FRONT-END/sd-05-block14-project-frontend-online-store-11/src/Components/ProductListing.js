import React, { Component } from 'react';
import * as api from '../services/api';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import './ProductListing.css';
// import categories from '../__mocks__/categories';

class ProductListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: '',
      searchProduct: '',
      arrayFetch: [],
    };
    this.updateStateCategories = this.updateStateCategories.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
  }

  async componentDidMount() {
    const data = await api.getCategories();
    // Todas as categorias montem em uma lista ao lado esquerdo
    this.updateStateCategories(data);
  }

  async onClickHandler(categoryId) {
    const { searchProduct, selectedCategory } = this.state;
    const produtos = await api.getProductsFromCategoryAndQuery(
      selectedCategory,
      searchProduct,
    );
    // ao clicar numa categoria, sobe um array com os produtos para o state
    console.log(categoryId);
    this.setState({
      selectedCategory: categoryId,
      arrayFetch: produtos.results,
    });
  }

  updateStateCategories(param) {
    this.setState({ categories: param });
  }

  handleInputChange(event) {
    const inputText = event.target.value;
    this.setState({ searchProduct: inputText });
  }

  async handleInputClick() {
    const { searchProduct, selectedCategory } = this.state;
    const buscados = await api.getProductsFromCategoryAndQuery(
      selectedCategory,
      searchProduct,
    );
    this.setState({ arrayFetch: buscados.results });
  }

  render() {
    const { categories, arrayFetch } = this.state;
    return (
      <div className="left-side">
        <div className="categories-list">
          {categories.map((element) => (
            <button
              data-testid="category"
              type="button"
              key={element.id}
              onClick={() => this.onClickHandler(element.id)}
            >
              {element.name}
            </button>
          ))}
        </div>
        <div className="right-side">
          <SearchBar
            change={this.handleInputChange}
            click={this.handleInputClick}
          />

          {this.state.searchProduct}

          <ProductCard items={arrayFetch} />
        </div>
      </div>
    );
  }
}

export default ProductListing;
