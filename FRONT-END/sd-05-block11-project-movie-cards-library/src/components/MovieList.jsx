// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((movie) => {
          const lista = <MovieCard key={movie.title} movie={movie} />;
          return lista;
        })}
      </section>
    );
  }
}
export default MovieList;
