import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

describe('Criar página do carrinho de compras', () => {
  it('should have shopping cart button', () => {
    render(<App />);
    expect(screen.getByTestId('shopping-cart-button')).toBeDefined();
  });

  it('should visit and render message in shopping cart page', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('shopping-cart-button'));
    await waitFor(() => screen.getByTestId('shopping-cart-empty-message'));
    expect(screen.getByTestId('shopping-cart-empty-message')).toHaveTextContent('Seu carrinho está vazio')
  });
});

