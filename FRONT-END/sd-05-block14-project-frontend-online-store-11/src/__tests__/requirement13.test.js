import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';
import * as api from '../services/api';
import mockedCategoriesResult from '../__mocks__/categories';
import mockedQueryResult from '../__mocks__/query';

jest.mock('../services/api');
api.getCategories.mockImplementation(
  () => Promise.resolve(mockedCategoriesResult)
);
api.getProductsFromCategoryAndQuery.mockImplementation(
  () => Promise.resolve(mockedQueryResult)
);

describe('Ver junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece', () => {
  it('should see the size of shopping cart from product list page', async () => {
    render(<App />);
    await waitFor(() => expect(api.getCategories).toHaveBeenCalled());
    fireEvent.click(screen.getAllByTestId('category')[0]);
    await waitFor(() => expect(api.getProductsFromCategoryAndQuery).toHaveBeenCalled());
    fireEvent.click(screen.getAllByTestId('product-add-to-cart')[0]);
    fireEvent.click(screen.getAllByTestId('product-add-to-cart')[1]);
    expect(screen.getByTestId('shopping-cart-size')).toHaveTextContent('2');
  });

  it('should see the size of shopping cart from product detail list page', async () => {
    render(<App />);
    await waitFor(() => expect(api.getCategories).toHaveBeenCalled());
    fireEvent.click(screen.getAllByTestId('category')[0]);
    await waitFor(() => expect(api.getProductsFromCategoryAndQuery).toHaveBeenCalled());
    fireEvent.click(screen.getAllByTestId('product-add-to-cart')[0]);
    fireEvent.click(screen.getAllByTestId('product-add-to-cart')[1]);
    fireEvent.click(screen.getAllByTestId('product-detail-link')[0]);
    expect(screen.getByTestId('shopping-cart-size')).toHaveTextContent('4');
  });
});
