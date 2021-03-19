import React from 'react';
// import AddMovie from './AddMovie';

// const funcao = new AddMovie();
class FilmeGenero extends React.Component {
  render() {
    const { valor, onChange, DH } = this.props;
    const opcao = [
      { key: 'Todos', value: '' },
      { key: 'Ação', value: 'action' },
      { key: 'Comédia', value: 'comedy' },
      { key: 'Suspense', value: 'thriller' },
    ];
    if (onChange.name === 'bound addMovie') { opcao.shift(); }
    return (
      <label htmlFor={DH}>
        {DH}
        {/* name="genre" onChange={onChange} key={opt.value} value={opt.value} */}
        <select name="genre" onChange={onChange} value={valor}>
          {opcao.map((opt) => (<option key={opt.value} value={opt.value}>{opt.key}</option>))}
        </select>
      </label>
    );
  }
}

export default FilmeGenero;
