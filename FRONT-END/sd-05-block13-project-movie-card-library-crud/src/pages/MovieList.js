import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
// import movies from '../components/data';
import * as movieAPI from '../services/movieAPI';
// import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieDetails from './MovieDetails';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: '',
      loading: true,
      error: '',
    };
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    movieAPI.getMovies()
    .then((movies) => this.update(movies));
    // .then(movies => console.log(resposta))
  }

  update(movies) { this.setState({ movies, loading: false });
  }

  // componentWillUpdate(){
  //  movieAPI.getMovies()
  //  .then(resposta => {this.update(resposta); console.log(resposta)});
  // }

  render() {
    const { movies, loading } = this.state;
    const id = this.props.match.params.id;
    if (id) return <MovieDetails id={id} />;

    if (loading) return <Loading />;
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
            {/* acrescentei aqui em cima */}
          </div>))
        }
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.isRequired,
  }).isRequired,
};
