// implement MovieLibrary component here
import React from 'react';
// import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
// import LocalStorage from './LocalStorage';
// import movies from '../data';
// import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.cadastraMovie = this.cadastraMovie.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filtraSaida = this.filtraSaida.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  cadastraMovie(filme) {
    const { movies } = this.state;
    // movies.push(filme);
    // this.setState({ movies: movies });
    //
    // this.setState({ movies: this.state.movies.push(filme) });
    //
    // this.setState((state) => ({ movies: [...state.movies, filme] }));
    this.setState({ movies: [...movies, filme] });
  }

  filtraSaida() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (bookmarkedOnly === true) {
      return movies.filter((filme) => filme.bookmarked === bookmarkedOnly);
    }
    if (selectedGenre !== '') {
      return movies.filter((filme) => filme.genre === selectedGenre);
    }
    if (searchText !== '') {
      return movies.filter((filme) => filme.title.includes(searchText)
      || filme.subtitle.includes(searchText)
      || filme.storyline.includes(searchText));
    }
    // console.log(resultado);
    return movies;
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filtraSaida()} />
        <AddMovie onClick={this.cadastraMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
// const { name, value } = event.target;
// onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
