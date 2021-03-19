import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';
import renderWithRouter from '../service/renderwithrouter';
import RecipeProvider from '../context/RecipeProvider';
// with both renderWithRouter and MemoryRouter, just to remember

afterEach(cleanup);

test('A página deve conter um titulo h1 Login', () => {
  const { getByText } = renderWithRouter(
    <RecipeProvider>
      <Login />
    </RecipeProvider>
  );
  const textLogin = getByText('Login');
  expect(textLogin).toBeInTheDocument();
  expect(document.querySelector('h1')).toBeInTheDocument();
  expect(textLogin.tagName).toBe('H1');
});

test('A página deve conter dois inputs para email e senha', () => {
  const { getByPlaceholderText } = render(
    <MemoryRouter>
      <RecipeProvider>
        <Login />
      </RecipeProvider>
    </MemoryRouter>
  );
  const inputEmail = getByPlaceholderText('Email');
  const inputSenha = getByPlaceholderText('Senha');
  expect(inputEmail).toBeInTheDocument();
  expect(inputSenha).toBeInTheDocument();
});

test('A página deve conter um button Entrar', () => {
  const { getByText } = render(
    <MemoryRouter>
      <RecipeProvider>
        <Login />
      </RecipeProvider>
    </MemoryRouter>
  );
  const entrar = getByText('Entrar');
  expect(entrar).toBeInTheDocument();
  expect(document.querySelector('button')).toBeInTheDocument();
  expect(entrar.tagName).toBe('BUTTON');
});

describe('Até ter ambos input e senha corretos, button fica disabled', () => {
  test('com email correto e senha incorreta', () => {
    const { getByText, getByPlaceholderText } = renderWithRouter(
      <RecipeProvider>
        <Login />
      </RecipeProvider>
    );
    const buttonEntrar = getByText('Entrar');
    const inputEmail = getByPlaceholderText('Email');
    const inputSenha = getByPlaceholderText('Senha');
    fireEvent.change(inputEmail, { target: { value: 'myemail@emailprovider.com' } });
    fireEvent.change(inputSenha, { target: { value: 'bla' } });
    expect(buttonEntrar).toBeDisabled();
  });

  test('com email correto e senha incorreta', () => {
    const { getByText, getByPlaceholderText } = renderWithRouter(
      <RecipeProvider>
        <Login />
      </RecipeProvider>
    );
    const buttonEntrar = getByText('Entrar');
    const inputEmail = getByPlaceholderText('Email');
    const inputSenha = getByPlaceholderText('Senha');
    fireEvent.change(inputEmail, { target: { value: 'blathisisnotanemail' } });
    fireEvent.change(inputSenha, { target: { value: 'blabla7goodpassword' } });
    expect(buttonEntrar).toBeDisabled();
  });
});

test('Ao clickar no Entrar, redireciona para MainFood', () => {
  const { getByText, getByPlaceholderText, history } = renderWithRouter(
    <RecipeProvider>
      <Login />
    </RecipeProvider>
  );
  const buttonEntrar = getByText('Entrar');
  const inputEmail = getByPlaceholderText('Email');
  const inputSenha = getByPlaceholderText('Senha');
  fireEvent.change(inputEmail, { target: { value: 'myemail@emailprovider.com' } });
  fireEvent.change(inputSenha, { target: { value: 'blabla7' } });
  expect(buttonEntrar).toBeEnabled();

  fireEvent.click(buttonEntrar);
  const path = history.location.pathname;
  expect(path).toEqual('/comidas');
});

// dica para proximos testes RTL: pegar diretamente requisitos do repositorio e testar eles um por um.
