import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe um input de email na tela', () => {
  // Acessar os elementos da tela
  const {getByLabelText} = render(<App />)
  const inputEmail = getByLabelText('Email')
  
  // Fezer teste
  expect(inputEmail).toBeInTheDocument()
  expect(inputEmail.type).toBe('email')
});
