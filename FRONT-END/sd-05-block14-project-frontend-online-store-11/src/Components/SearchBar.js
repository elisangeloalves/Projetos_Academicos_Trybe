import React, { Component } from 'react';
import './Searchbar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-area">
        <input
          data-testid="query-input"
          onChange={this.props.change}
          type="text"
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
        />
        <button
          type="button"
          onClick={this.props.click}
          data-testid="query-button"
        >
          Buscar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default SearchBar;
