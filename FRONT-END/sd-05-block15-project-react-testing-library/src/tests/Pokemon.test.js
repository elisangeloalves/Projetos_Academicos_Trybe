import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
// import FavoritePokemons from '../components/FavoritePokemons';
import pokemons from '../data';
import { Pokemon, Pokedex } from '../components';
import App from '../App';

// const pokemonsTest = [pokemons[0], pokemons[1]];
const pokemon = pokemons[0];
const ComponenteRenderizado = () => (
  <MemoryRouter initialEntries={['/']}>
    <App>
      <Pokedex pokemons={pokemons} isPokemonFavoriteById={{}}>
        <Pokemon pokemon={pokemon} isFavorite />
      </Pokedex>
    </App>
  </MemoryRouter>
);
describe('Requirement 6: testing the Pokemon.js file', () => {
  afterEach(cleanup);

  test('Renders the `Pokémon Card` with all the information of a Pokemon on the screen.', () => {
    const { container } = render(

      <MemoryRouter initialEntries={['/']}>
        <Pokemon pokemon={pokemon} isFavorite={false} />
      </MemoryRouter>,
    );

    const pokemonInfo = container.querySelector('.pokemon');
    expect(pokemonInfo).toBeInTheDocument();
  });

  test('Should render the correct Pokémon`s name and type, on the screen.', () => {
    const { getByTestId } = render(

      <MemoryRouter initialEntries={['/']}>
        <Pokemon pokemon={pokemon} isFavorite={false} />
      </MemoryRouter>,
    );

    const name = getByTestId('pokemon-name').innerHTML;
    expect(name).toMatch(pokemon.name);

    const type = getByTestId('pokemonType').innerHTML;
    expect(type).toMatch(pokemon.type);
  });

  test('Renders the Pokémon`s Average Weigth by text, at the right way: (value: _ measurementUnit: _) on the screen.', () => {
    const { getByTestId } = render(

      <MemoryRouter initialEntries={['/']}>
        <Pokemon pokemon={pokemon} isFavorite={false} />
      </MemoryRouter>,
    );

    const weight = getByTestId('pokemon-weight').innerHTML;
    const { value, measurementUnit } = pokemon.averageWeight;

    expect(weight).toMatch(`Average weight:${value}${measurementUnit}`);
  });

  test('Renders the Pokémon`s image`s src attribute with its URl image, and the alt attribute should be its name following by the text `sprite`', () => {
    const { getByRole } = render(

      <MemoryRouter initialEntries={['/']}>
        <Pokemon pokemon={pokemon} isFavorite={false} />
      </MemoryRouter>,
    );

    const image = getByRole('img');
    expect(image.getAttribute('alt')).toMatch(pokemon.name);
    expect(image.getAttribute('src')).toMatch(pokemon.image);
  });

  test('Renders the Pokémon`s Card with a link which leads to Pokemon`s Details page. The link should have  the route: `/pokemons/<id>` as URl , where <id> would be the Pokemon`s id`', () => {
    const { getByText } = render(

      <ComponenteRenderizado />,
    );

    const initialPage = getByText('Encountered pokémons');
    expect(initialPage).toBeInTheDocument();

    const link = getByText('More details');
    fireEvent.click(link);

    const h2 = getByText(`${pokemon.name} Details`);
    expect(h2).toBeInTheDocument();
    expect(link.pathname).toBe(`/pokemons/${pokemon.id}`);
  });

  test(' It should render Favorite Pokémons with a star icon besides it. SRC attribute should be = /star-icon.svg & AlT attribute should contain `is marked as favorite`', () => {
    const { getByRole, getAllByRole, queryByText } = render(

      <ComponenteRenderizado />,
    );

    const link = queryByText('More details');
    fireEvent.click(link);

    const h2 = queryByText(`${pokemon.name} Details`);
    expect(h2).toBeInTheDocument();

    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);

    const teste = getAllByRole('img').find((attribute) => attribute.alt === `${pokemon.name} is marked as favorite`);
    expect(teste).toBeInTheDocument();
    expect(teste.getAttribute('src')).toBe('/star-icon.svg');
  });
});
