// implement AddMovie component here
import React from 'react';
// import MovieCard from './MovieCard';
import CadastraMovie from './CadastraMovie';
import Genero from './FilmeGenero';
// import movies from '../data';

// const checkType = (tipo) => {
//   let texto;
//   if (tipo === 4) texto = 'number';
//   else if (tipo === 3) texto = 'textarea';
//   else texto = 'text';
//   return texto;
// };

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      // bookmarked: 'false',
    };
    this.addMovie = this.addMovie.bind(this);
    this.onClickMovie = this.onClickMovie.bind(this);
    this.limpaEstado = this.limpaEstado.bind(this);
  }

  onClickMovie(callback) {
    callback(Object.assign(this.state));
    this.limpaEstado();
  }

  limpaEstado() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      //  bookmarked: '',
      genre: 'action',
    });
  }

  addMovie(event) {
  // console.log(event.target);
    const { name, value } = event.target;
    this.setState(() => ({ [name]: (name !== 'rating') ? value : parseFloat(value) }));
  }


  render() {
    // const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const cadastroDeFilme = Object.keys(this.state).slice(0, 3);
    const { onClick } = this.props;
    // console.log(cadastroDeFilme);
    return (
      <form>
        {cadastroDeFilme.map((input, index) => (
          <CadastraMovie
            key={input}
            campo={input}
            contador={index}
            estado={this.state[input]}
            mudaEstado={this.addMovie}
          />
        ))}
        <label htmlFor="storyline">Sinopse</label>
        <textarea name="storyline" onChange={this.addMovie} value={this.state.storyline} />
        <label htmlFor="rating">Avaliação</label>
        <input name="rating" type="number" value={(this.state.rating)} onChange={this.addMovie} />
        {/* <label htmlFor="title">Título</label>
        <input name="title" type="text" value={title} onChange={this.addMovie} />
        */}
        <Genero onChange={this.addMovie} DH="Gênero:" valor={this.state.genre} />
        <button type="button" onClick={() => { this.onClickMovie(onClick); }}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
