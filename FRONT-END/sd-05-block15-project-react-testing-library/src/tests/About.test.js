import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
// import { createMemoryHistory as historic } from 'history';

describe('Requirement 2: testing the About.js component', () => {
  afterEach(cleanup);

  test('About page should show information about Pókedex.', () => {
    const { getAllByRole, queryByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const rota = getAllByRole('link');
    expect(rota[1].getAttribute('href')).toBe('/about');

    fireEvent.click(rota[1]);

    const infoPokedex = queryByText('About Pokédex');
    expect(infoPokedex).toBeInTheDocument();
  });

  test('About page should have a heading <h2>  containing a `about Pókedex` text.', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const rota = getAllByRole('link');
    fireEvent.click(rota[1]);
    expect(getAllByRole('heading')[1].innerHTML).toBe('About Pokédex');
  });

  test('The About page should have 2 paragraphs relative to `Pókedex`', () => {
    const { getAllByRole, queryByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const rota = getAllByRole('link');
    fireEvent.click(rota[1]);

    const infoPokedex = queryByText(/About Pokédex/);
    expect(infoPokedex).toBeInTheDocument();

    const p = getAllByRole('region')[1].getElementsByTagName('p');
    expect(p.length).toBe(2);
  });

  test('About page should have a image with the following attribute: `src:"https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png"`', () => {
    const { getAllByRole, getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const rota = getAllByRole('link');
    fireEvent.click(rota[1]);

    const img = getByRole('img');
    expect(img.getAttribute('src')).toBe('https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
