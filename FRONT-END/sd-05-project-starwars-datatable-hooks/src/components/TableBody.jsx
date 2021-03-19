import React, { useContext } from 'react';
// import PropTypes, { object } from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const comparingTable = (filteredPlanets, arrayOfFilter) => {
  let planets = filteredPlanets;
  arrayOfFilter.forEach((filter) => {
    const { column, comparison, value } = filter;
    planets = planets.filter((planet) => {
      switch (comparison) {
        case 'igual a':
          return parseInt(planet[column], 10) === parseInt(value, 10);
        case 'maior que':
          return parseInt(planet[column], 10) > parseInt(value, 10);
        case 'menor que':
          return parseInt(planet[column], 10) < parseInt(value, 10);
        default:
          return planet;
      }
    });
  });
  return planets;
};

const TableBody = () => {
  const { data, filterByNumericValues, filterByName: { name } } = useContext(StarWarsContext);
  let filteredPlanets = [...data];
    // Filtro que compara dados da tabela
  filteredPlanets = comparingTable(filteredPlanets, filterByNumericValues);
    // Filtro que procura por um nome  de planeta na tabela
  filteredPlanets = filteredPlanets.filter((planet) => planet.name.toLowerCase()
  .includes(name.toLowerCase()));
  return (
    <tbody>
      {filteredPlanets.map((planet) => (
        <tr key={planet.name}>
          <td data-testid="planet-name">{planet.name}</td>
          <td>{planet.climate}</td>
          <td>{planet.population}</td>
          <td>{planet.diameter}</td>
          <td>{planet.created}</td>
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
};

export default TableBody;

// validacao de propTypes seguindo exemplos do conteudo do course.
// duvidas tiradas na validacao da chave 'data:' junto ao PR no repositorio do Felipe Vieira

// TableBody.propTypes = {
//   error: PropTypes.string,
//   data: PropTypes.arrayOf(object).isRequired,
//   // name: PropTypes.string.isRequired,
//   filterByNumericValues: PropTypes.arrayOf(object).isRequired,
// };

// TableBody.defaultProps = {
//   error: 'Erro no servidor',
// };
