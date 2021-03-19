import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import newMovie from '../components/card0';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.alteraEstado = this.alteraEstado.bind(this);
  }

  componentDidMount() {
    newMovie()
    .then(filme => this.alteraEstado(filme));
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
    .then(() => this.setState({ shouldRedirect: true }));
  }
  
  alteraEstado(movie) {
    this.setState({ movie, status: false });
  }

  render() {
    const { shouldRedirect, movie, status } = this.state;
    if (status === 'loading') return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
