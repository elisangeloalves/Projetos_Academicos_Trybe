import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { PokemonDetails } from '../components';
import pokemons from '../data';
import { updateFavoritePokemons } from '../services/pokedexService';

const isPokemonFavoriteById = { [`${pokemons[0].id}`]: 'checked', [`${pokemons[1].id}`]: true };
const match = { params: { id: `${pokemons[0].id}` } };
const pokemon = pokemons[0];

console.log(isPokemonFavoriteById);
const SuperComponent = () => (
  <MemoryRouter initialEntries={['/']}>
    <App>
      <PokemonDetails
        isPokemonFavoriteById={isPokemonFavoriteById}
        match={match}
        pokemons={pokemons}
        onUpdateFavoritePokemons={(pokemonId, isFavorite) => (
          updateFavoritePokemons(pokemonId, isFavorite))}
      />
    </App>
  </MemoryRouter>
);

describe('Requirement 7: testing the PokemonDetails.js file', () => {
  afterEach(cleanup);

  test('Should have more info only from the selected Pokemon', () => {
    const { getByText } = render(<SuperComponent />);

    const linkDetails = getByText(/More details/i);
    fireEvent.click(linkDetails);

    const h2 = getByText('Summary');
    expect(h2).toBeInTheDocument();
    expect(getByText(`${pokemon.name} Details`).innerHTML).toBe('Pikachu Details');
    expect(linkDetails).not.toBeInTheDocument();
  });

  test('Should have a section with a paragraph containing info about that pokemon', () => {
    const { container, getByText } = render(<SuperComponent />);

    const linkDetails = getByText(/More details/i);
    fireEvent.click(linkDetails);

    const paragraph = container.querySelectorAll('p')[3];
    // console.log(paragraph.innerHTML);

    expect(paragraph).toBeInTheDocument();
    expect(paragraph.innerHTML).toBe(pokemon.summary);

    expect(getByText(`${pokemon.name} Details`).innerHTML).toBe('Pikachu Details');
  });

  test('It should contain a section with a <h2> with the text `Game Locations of the selected pokemon', () => {
    const { container, getByText } = render(<SuperComponent />);

    const linkDetails = getByText(/More details/i);
    fireEvent.click(linkDetails);
    const h2 = container.querySelectorAll('section')[2].firstChild;

    expect(h2.innerHTML).toBe(`Game Locations of ${pokemon.name}`);
  });

  test('It should have a section containing all locations and  location`s names of the selected pokemon', () => {
    const { renderHabitat } = PokemonDetails;
    const { container } = render(renderHabitat(pokemon));

    const local = container.querySelectorAll('img');
    expect(container).toBeInTheDocument();

    const paragraph = container.querySelectorAll('em');

    pokemon.foundAt.forEach(({ location, map }, index) => {
      expect(local[index]).toBeInTheDocument();
      expect(local[index].getAttribute('alt')).toBe(`${pokemon.name} location`);
      expect(local[index].getAttribute('src')).toBe(map);

      expect(paragraph[index]).toBeInTheDocument();
      expect(paragraph[index].innerHTML).toBe(location);
    });
  });

  test('It should contain a section with a <h2> with the text `Game Locations of the selected pokemon', () => {
    const { container, getByText } = render(<SuperComponent />);

    const linkDetails = getByText(/More details/i);
    fireEvent.click(linkDetails);

    const pokemonFavoritado = getByText('Pokémon favoritado?');
    expect(pokemonFavoritado).toBeInTheDocument();

    fireEvent.click(pokemonFavoritado);

    const icoFavorite = container.querySelector('.favorite-icon');
    expect(icoFavorite).toBeInTheDocument();
  });
});
