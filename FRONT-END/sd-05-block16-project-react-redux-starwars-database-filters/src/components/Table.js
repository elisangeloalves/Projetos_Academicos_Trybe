import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { filterByName } from '../reducers/createActions';
import SelectColumn from './SelectColumn';
import SelectOrder from './SelectOrder';
import SelectComparison from './SelectComparison';
import Button from './Button';
import Header from './HeaderTable';
import RadioSort from './RadioSort';
import TableBody from './TableBody';
import SelectValue from './SelectValue';

const InputProcurar = (callback) => (
  <div>
    <label htmlFor="filterByName">Procurar</label>
    <input
      data-testid="name-filter"
      name="filterByName"
      type="text"
      onChange={(e) => callback(e.target.value)}
    />
  </div>
);

function Table({
  filter,
  isFetching,
}) {
  return (
    isFetching ? <div className="loading">Loading...</div>
      : (
        <div className="body">
          <p>StarWars Datatable with Filters</p>
          {/* implementacao de formulario seguindo conteudo encontrado no site W3Schools */}
          <form>
            <div className="head">
              {InputProcurar(filter)}
              <SelectOrder />
              <RadioSort value="ASD" />
              <RadioSort value="DESC" />
              <Button data="column-sort-button" />
              <SelectColumn />
              <SelectComparison />
              <SelectValue />
              <Button data="button-filter" />
            </div>
          </form>
          <div className="table">
            <table className="border">
              <thead>
                <Header />
              </thead>
              <TableBody />
            </table>
          </div>
        </div>
      )
  );
}

// implementacoes de funcoes relacionado ao store baseado no conteudo
//  e exercicios da Trybe do bloco de redux.

const mapStateToProps = (state) => {
  const { fetchReducer: { isFetching } } = state;
  return {
    isFetching,
  };
};

const mapDispatchToProps = (dispatch) => ({
  filter: (str) => dispatch(filterByName(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

// validacao de propTypes seguindo exemplos do conteudo do course.
// duvidas tiradas na validacao da chave 'data:' junto ao PR no repositorio do Felipe Vieira

Table.propTypes = {
  filter: propTypes.func.isRequired,
  isFetching: propTypes.bool.isRequired,
};
