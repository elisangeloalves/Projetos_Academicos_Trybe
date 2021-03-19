import React, { Component } from 'react';

const columns = ['Planeta', 'Clima', 'Populacao', 'Criado', 'Diâmetro', 'Editado',
  'Gravidade', 'Período Orbital', 'Periodo rotacional',
  'Superfice molhada', 'Superfice terrena', 'Rota URL', 'Films'];

export default class LineTable extends Component {
  render() {
    return (
      <tr>
        {columns.map((column) => (<td key={column}>{column}</td>))}
      </tr>
    );
  }
}
