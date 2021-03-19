import React, { Component } from 'react';

const columns = ['Planeta', 'Clima', 'Populacao', 'Diâmetro', 'Criado', 'Editado',
  'Gravidade', 'Período Orbital', 'Periodo rotacional',
  'Superfice molhada', 'Superfice terrena', 'Rota URL', 'Films'];

export default class Header extends Component {
  render() {
    return (
      <tr>
        {columns.map((column) => (<th key={column}>{column}</th>))}
      </tr>
    );
  }
}
