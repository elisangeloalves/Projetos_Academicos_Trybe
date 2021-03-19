// implement SearchBar component here
import React from 'react';
import TextoDeEntrada from './TextoDeEntrada';
import SelecaoFavorito from './SelecaoFavorito';
import Genero from './FilmeGenero';
import '../App.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: '',
  //     selectedGenre: '',
  //   };
  //   this.onSearchTextChange = this.onSearchTextChange.bind(this);
  //   this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  //   this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  // }

  // onSearchTextChange(event) {
  //   // const { name, value } = event.target;
  //   this.setState({ searchText: event.target.value });
  // }

  // onSelectedGenreChange(event) {
  //   this.setState({ selectedGenre: event.target.value });
  // }

  // onBookmarkedChange(event) {
  //   this.setState({ bookmarkedOnly: event.target.value });
  // }

  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;

    // DH => texto que vai aparecer nas labels, e tambem a identificacao entre label seu input
    return (
      <fieldset className="searchBar">
        <form className="searchBar">
          <TextoDeEntrada onChange={onSearchTextChange} DH="Inclui o texto" value={searchText} />
          <SelecaoFavorito
            onChange={onBookmarkedChange}
            DH="Mostrar somente favoritos"
            checked={bookmarkedOnly}
          />
          <Genero onChange={onSelectedGenreChange} DH="Filtrar por gênero:" valor={selectedGenre} />
        </form>
      </fieldset>
    );
  }
}

export default SearchBar;
