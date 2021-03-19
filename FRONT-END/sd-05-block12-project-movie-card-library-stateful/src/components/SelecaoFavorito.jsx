import React from 'react';


class SelecaoFavorito extends React.Component {
  render() {
    const { checked, onChange, DH } = this.props;
    return (
      <label htmlFor={DH}>
        {DH}
        <input onChange={onChange} name={DH} checked={checked} type="checkbox" />
      </label>
    );
  }
}

export default SelecaoFavorito;
