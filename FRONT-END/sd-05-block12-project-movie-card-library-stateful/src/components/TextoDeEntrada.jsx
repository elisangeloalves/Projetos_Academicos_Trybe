import React from 'react';


class TextoEntrada extends React.Component {
  render() {
    const { value, onChange, DH } = this.props;
    return (
      <label htmlFor={DH}>
        {DH}
        <input onChange={onChange} name={DH} value={value} type="text" />
      </label>
    );
  }
}

export default TextoEntrada;
