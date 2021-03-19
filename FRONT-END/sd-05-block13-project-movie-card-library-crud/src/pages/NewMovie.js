import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '',
      shouldRedirect: false,
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.alteraEstado = this.alteraEstado.bind(this);
  }

  componentDidMount() {
    this.alteraEstado();
  }

  alteraEstado() {
    this.setState({ movie: {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      bookmarked: false,
      genre: '',
    },
      status: false });
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
    .then(() => this.setState({ shouldRedirect: true }));
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
