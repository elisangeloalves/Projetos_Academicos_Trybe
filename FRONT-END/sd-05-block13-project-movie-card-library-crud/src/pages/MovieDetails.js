import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import EditMovie from './EditMovie';
import NotFound from './NotFound';

// import movies from '../components/data';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      loading: true,
      id: this.props.match.params.id,
      path: this.props.location.pathname,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.alteraEstado = this.alteraEstado.bind(this);
  }
  componentDidMount() {
    const { id } = this.state;
    movieAPI.getMovie(id)
      .then((movie) => this.alteraEstado(movie));
  }

  alteraEstado(parametro) {
    this.setState(() => ({ movie: parametro, loading: false }));
  }

  handleSubmit(newMovie) {
    movieAPI.deleteMovie(newMovie)
   this.setState({ shouldRedirect: true });
  }

  render() {
    const { movie, loading, id, shouldRedirect } = this.state; // movieAPI; // acrescentei aqui
    const path = this.props.location.pathname;

    // if (path ==='/movies/' && movie === undefined){
    //   return <Redirect to="*" />
    // }
    if (!id) return <NotFound /> ;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    // Change the condition to check the state
    if (shouldRedirect) return <Redirect to="/" />;
    if (loading) return <Loading />;
    if (path === `/movies/${id}/edit`) return <EditMovie movie={movie} />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Título: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/" onClick={() => this.handleSubmit(id)}>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  // movie: PropTypes.shape({
  //   imagePath: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   subtitle: PropTypes.string.isRequired,
  //   storyline: PropTypes.string.isRequired,
  //   rating: PropTypes.number.isRequired,
  // }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
