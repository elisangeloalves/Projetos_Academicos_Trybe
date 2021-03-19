import React from 'react';

class CadastraMovie extends React.Component {
  render() {
    const texto = ['Título', 'Subtítulo', 'Imagem'];// , 'Sinopse', 'Avaliação', 'Gênero'
    const { contador, campo, estado, mudaEstado } = this.props;
    return (
      <fieldset key={contador}>
        <label htmlFor={campo}>{texto[contador]}</label>
        <input key={contador} name={campo} type="text" value={estado} onChange={mudaEstado} />
      </fieldset>
    );
  }
}

export default CadastraMovie;
