import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tela de inserção de e-mail', () => {
  it('Verifica se existe um input de email na tela', () => {
    // Acessar os elementos da tela
    const {getByLabelText} = render(<App />)
    const inputEmail = getByLabelText('Email')
  
    // Fezer teste
    expect(inputEmail).toBeInTheDocument()
    expect(inputEmail.type).toBe('email')
  });
  
  it('Verifica se existem dois botoes na tela', () => {
    // Acessar os elementos da tela
    const {getAllByRole} = render(<App />)
    const getButtons = getAllByRole('button')
  
    // Fezer teste
    expect(getButtons.length).toBe(2)
  });
  
  it('Verifica se existe o botao enviar na tela', () => {
    // Acessar os elementos da tela
    const {queryByText} = render(<App />)
    const btnSend = queryByText('Enviar')
  
    // Fezer teste
    expect(btnSend).toBeInTheDocument()
    expect(btnSend).toHaveValue('Enviar')
  });

  it('Verifica que , ao inserir o e-mail e clicar em Enviar, o e-mail aparece na tela', () => {
    const {getByLabelText, queryByText, getByTestId} = render(<App />)
    const inputEmail = getByLabelText('Email')
    const btnSend = queryByText('Enviar')
    const h2Result = getByTestId('id-email-user')
    fireEvent.change(inputEmail, {target: { value: 'julioaranabr@yahoo.com.br' }})
    fireEvent.click(btnSend)
    expect(inputEmail).toHaveValue('')
    expect(h2Result.textContent).toBe('Valor: julioaranabr@yahoo.com.br')
  });
  
})



