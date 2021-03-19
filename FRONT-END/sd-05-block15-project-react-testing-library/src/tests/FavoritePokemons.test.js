import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FavoritePokemons from '../components/FavoritePokemons';
import pokemons from '../data';

const pokemonsTest = [pokemons[0], pokemons[1]];
const pokemonsZero = [];

describe('Requirement 3: testing the FavoritePokemons.js file', () => {
  afterEach(cleanup);

  test('Renders the `Favorite Pokémons` Page and checks if there`s no favorite Pokemon on the screen.', () => {
    const { getByText } = render(

      <MemoryRouter initialEntries={['/favorites']}>
        <FavoritePokemons pokemons={pokemonsZero} />
      </MemoryRouter>,
    );
    const noFavoritePokemon = getByText(/No favorite pokemon found/);
    expect(noFavoritePokemon).toBeInTheDocument();
  });

  test('Renders the `Favorite Pokémons` Page and checks if there`s at least one favorite Pokemon on the screen.', () => {
    const { getAllByRole, queryByText } = render(

      <MemoryRouter initialEntries={['/favorites']}>
        <FavoritePokemons pokemons={pokemonsTest} />
      </MemoryRouter>,
    );
    const noFavoritePokemon = queryByText(/No favorite pokemon found/);
    expect(noFavoritePokemon).not.toBeInTheDocument();

    const numeroDeFavoritos = getAllByRole('link').length;
    expect(numeroDeFavoritos).toBeGreaterThan(0);
  });
});
