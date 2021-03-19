import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { string, object } from 'prop-types';


let filteredPlanets = [];

const renderingTable = (array) => (
  <tbody>
    {/* {planets.map((planet) => ( */}
    {array.map((planet) => (
      <tr key={planet.name}>
        <td>{planet.name}</td>
        <td>{planet.climate}</td>
        <td>{planet.population}</td>
        <td>{planet.created}</td>
        <td>{planet.diameter}</td>
        <td>{planet.edited}</td>
        <td>{planet.gravity}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.rotation_period}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.terrain}</td>
        <td>{planet.url}</td>
        <td>
          {planet.films.map((film) => (
            <li key={film}>{film}</li>
          ))}
        </td>
      </tr>
    ))}
  </tbody>
);

class TableBody extends Component {
  render() {
    const { error, filterSetUp } = this.props;
    let { planets } = this.props;
    if (filteredPlanets.length > 0) planets = filteredPlanets;

    let planetsToBeRendered = [];
    if (filterSetUp.length > 0) {
      filterSetUp.forEach((eachOne) => {
        const { column, comparison, value } = eachOne;
        filteredPlanets = planets.filter((planet) => {
          switch (comparison) {
            // neste switch, em algumas comparacoes dava saidas inesperadas pra alguns filtros,
            // pois eu fazia comparacao de numero com string sem perceber
            // ==> planet[column] === parseInt(value, 10)  <==
            // depois de consultar o repositório do Projeto do Felipe
            // eu conseguir  tirar uma duvida e identificar o erro e corrigi-lo para o modo correto
            // ====> parseInt(planet[column], 10) === parseInt(value, 10) <=====
            case 'igual a':
              return parseInt(planet[column], 10) === parseInt(value, 10);
            case 'maior que':
              return parseInt(planet[column], 10) > parseInt(value, 10);
            case 'menor que':
              return parseInt(planet[column], 10) < parseInt(value, 10);
            default:
              return null;
          }
        });
      });
    }
    planetsToBeRendered = (filteredPlanets.length > 0) ? filteredPlanets : planets;

    return (!error) ? renderingTable(planetsToBeRendered)
      : <div>Houve um erro no Servidor e os dados não puderão ser carregados!</div>;
  }
}

const mapStateToProps = (state) => {
  const { filters: { filterByName: { name }, filterByNumericValues: filterSetUp } } = state;
  const { fetchReducer: { data, error } } = state;
  return {
    name,
    planets: (name) ? data.filter((planet) => planet.name.includes(name)) : data,
    error,
    filterSetUp,
  };
};

export default connect(mapStateToProps)(TableBody);

// validacao de propTypes seguindo exemplos do conteudo do course.
// duvidas tiradas na validacao da chave 'data:' junto ao PR no repositorio do Felipe Vieira

TableBody.propTypes = {
  error: PropTypes.string,
  planets: PropTypes.arrayOf(object).isRequired,
  // name: PropTypes.string.isRequired,
  filterSetUp: PropTypes.arrayOf(string).isRequired,
};

TableBody.defaultProps = {
  error: 'Erro no servidor',
};
