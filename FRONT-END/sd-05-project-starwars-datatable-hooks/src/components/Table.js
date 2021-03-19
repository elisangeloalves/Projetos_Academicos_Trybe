import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import propTypes from 'prop-types';
import Header from './HeaderTable';
import TableBody from './TableBody';
// import FilterBar from './FilterBar';
import StarWarsContext from '../context/StarWarsContext';

const Table = () => {
  const { error } = useContext(StarWarsContext);
  return (
    <div>
      {error && (
        <div>
          Houve um erro no Servidor e os dados não puderão ser carregados!
          <span>
            {error}
          </span>
        </div>
      )}
      {!error && (
        <div className="table">
          <table className="border">
            <thead>
              <Header />
            </thead>
            <TableBody />
          </table>
        </div>)}
    </div>
  );
};

// validacao de propTypes seguindo exemplos do conteudo do course.

// Table.propTypes = {
//   isFetching: propTypes.bool.isRequired,
// };

export default Table;
