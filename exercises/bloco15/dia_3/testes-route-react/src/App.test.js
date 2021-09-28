import { fireEvent } from '@testing-library/react';
import React from 'react'
import App from './App';
import renderWithRouter from './renderWithRouter';


describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    const {getByText} = renderWithRouter(<App />)
    const home = getByText(/Você está na pagina de Início/)
    expect(home).toBeInTheDocument()
  });
  
  it('Deve renderizar o componente Sobre', () => {
    const {getByText, history} = renderWithRouter(<App />);
    fireEvent.click(getByText(/Sobre/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about')
    const aboutAll = getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument()
  })

  it('Deve renderizar o componente NotFound', () => {
    const{getByText, history} = renderWithRouter(<App />);
    history.push('/pagina/que não existe/');
    const notFound = getByText(/Página não encontrada/i);
    expect(notFound).toBeInTheDocument();
  })
})

