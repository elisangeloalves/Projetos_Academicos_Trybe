import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

describe('Requirement 4: testing the NotFound.js file', () => {
  afterEach(cleanup);

  test('renders the `Not Found` Page with a heading <h2> containing `Page requested not found 😭` text in i.t', () => {
    const { container, getByText } = render(
      <MemoryRouter initialEntries={['buddy batatinha']}>
        <App />
      </MemoryRouter>,
    );

    const heading = getByText(/Page requested not found/);
    expect(heading).toBeInTheDocument();

    const h2 = container.querySelector('h2').innerHTML;
    expect(h2).toContain('Page requested not found', '😭');
  });

  test('The `Not Found` Page should have a image with the following attribute: `src:"https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"`', () => {
    const { getAllByRole, getByText } = render(
      <MemoryRouter initialEntries={['buddy batatinha']}>
        <App />
      </MemoryRouter>,
    );

    const heading = getByText(/Page requested not found/);
    expect(heading).toBeInTheDocument();

    const img = getAllByRole('img')[1];
    expect(img.getAttribute('src')).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
