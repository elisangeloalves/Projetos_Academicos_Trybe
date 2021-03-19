import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
// import { createMemoryHistory as historic } from 'history';

describe('Requirement 1: testing the App.js file', () => {
  afterEach(cleanup);
  test('renders a Navbar with (Home, About and Favorite Pokémons) on the Page and checks if there is a text `Pokédex` in it', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const heading = getByText(/Pokédex/i);
    expect(heading).toBeInTheDocument();

    const links = ['Home', 'About', 'Favorite Pokémons'];
    links.forEach((link) => {
      expect(getByText(link)).toBeInTheDocument();
    });
  });

  test('renders the `Encountered pokémons` Home Page on the default routePath.', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const route = getByText('Home').pathname;
    expect(route).toBe('/');
    const heading = getByText(/Encountered pokémon/i);
    expect(heading).toBeInTheDocument();
  });

  test('Sets the routePath to `/about` by clicking on the `About link` and renders `About Pokédex` Page.', () => {
    const { getAllByRole, queryByText, getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const home = getByText(/Encountered pokémon/i);
    expect(home).toBeInTheDocument();

    const rota = getAllByRole('link');
    expect(rota[1].getAttribute('href')).toBe('/about');

    fireEvent.click(rota[1]);
    const about = queryByText(/About Pokédex/);
    expect(about).toBeInTheDocument();
    expect(getByText('About').pathname).toBe('/about');
  });

  test('Sets routePath to `/favorites` by clicking on the `Favorite Pokémons link` and renders `Favorite Pokémons` Page.', () => {
    const { getAllByRole, queryByText, getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    const favorite = queryByText(/Favorite pokémons/);
    expect(favorite).not.toBeInTheDocument();

    const rota = getAllByRole('link');
    expect(rota[2].getAttribute('href')).toBe('/favorites');

    fireEvent.click(rota[2]);
    const heading = getByText('Favorite Pokémons');
    expect(heading).toBeInTheDocument();
    expect(heading.pathname).toBe('/favorites');
  });

  test('renders the `Not Found` Page if the routePath gets into an unknown path', () => {
    const { container, queryByText } = render(
      <MemoryRouter initialEntries={['buddy batatinha']}>
        <App />
      </MemoryRouter>,
    );

    const teste = container.querySelector('h2').innerHTML;
    expect(teste).toContain('Page requested not found');

    const h2 = queryByText('Page requested not found');
    expect(h2).toBeInTheDocument();
  });
});
