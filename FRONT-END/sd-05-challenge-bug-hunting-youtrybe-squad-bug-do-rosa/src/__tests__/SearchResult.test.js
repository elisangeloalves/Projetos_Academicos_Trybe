import React from 'react';
import { render, screen, fireEvent, getByRole, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SearchResult from '../components/content/SearchResult/index';
import App from '../App';
import mockSearchVideo from '../__mocks__/mockSearchVideo';
import mockGetVideoInfo from '../__mocks__/mockGetVideoInfo';
import mockGetVideoComments from '../__mocks__/mockGetVideoComments';
import * as api from '../api/service'
// import * as api from '../api/api'

jest.mock('react-router-dom', () => {
  const moduloOriginal = jest.requireActual('react-router-dom');
  return {
    ...moduloOriginal,
    BrowserRouter: ({ children }) => (<div>{children}</div>),
  };
})

// jest.mock('../api/api');
jest.mock('../api/service');
api.searchVideos.mockImplementation(
  () => Promise.resolve(mockSearchVideo)
);
api.getVideoInfo.mockImplementation(
  () => Promise.resolve(mockGetVideoInfo)
);
api.getVideoComments.mockImplementation(
  () => Promise.resolve(mockGetVideoComments)
);

function renderWithRouter(ui, routeConfigs = {}) {
  const route = routeConfigs.route || '/';
  const history = routeConfigs.history || createMemoryHistory({ initialEntries: [route] });
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

describe('Funcionalidades Componente Search Result', () => {
  it('Renderiza uma lista de videos em cima da busca', async () => {
    renderWithRouter(<SearchResult match={{ params: { searchParam: 'bugs' } }} />);
    await waitFor(() => expect(api.searchVideos).toHaveBeenCalled());
    expect(screen.getAllByRole('link').length).toBeLessThan(mockSearchVideo.items.length);
  })

  it('Ao clicar em um video redireciona a pagina de display', async () => {
    const { history } = renderWithRouter(<App />, { route: '/results/bugs' });
    await waitFor(() => expect(api.searchVideos).toHaveBeenCalled());

    const videoLink = screen.getAllByRole('link')[1];
    fireEvent.click(videoLink);
    expect(history.location.pathname).toMatch(/watch/i);

    await waitFor(() => expect(api.getVideoInfo).toHaveBeenCalled());
    await waitFor(() => expect(api.getVideoComments).toHaveBeenCalled());
  
    expect(screen.getByTestId('videoplayer')).toBeInTheDocument();
  })
})