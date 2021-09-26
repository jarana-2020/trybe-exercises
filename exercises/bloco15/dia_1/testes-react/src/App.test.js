import { render, fireEvent } from '@testing-library/react';
import App from './App';
import ValidEmail from './ValidEmail';

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

  it('Verifica se o Email informado é valido', () => {
    const EMAIL_USER = 'julioaranabr@yahoo.com.br'
    const isSend = true
    const {queryByText} = render(<ValidEmail email={EMAIL_USER} isSend={isSend} />)
    const isValid = queryByText('Email Valido')
    expect(isValid).toBeInTheDocument()
  });

  it('Verifica se o componente não aparece caso o e-mail esteja vazio', () => {
   const {queryByText} = render(<ValidEmail email='' />)
   const isInValidEmail = queryByText('Email Inválido')
   const isValidEmail = queryByText('Email Valido')
   expect(isInValidEmail).not.toBeInTheDocument()
   expect(isValidEmail).not.toBeInTheDocument()
  });

  it('Verifica se o componente tem a cor verde caso o e-mail seja valido', () => {
    const EMAIL_USER = 'julioaranabr@yahoo.com.br'
    const {queryByText} = render(<ValidEmail email={EMAIL_USER} />)
    const isValidEmail = queryByText('Email Valido')
    expect(isValidEmail).toHaveAttribute('class', 'green-text')
   });

   it('Verifica se o componente tem a cor vermelha caso o e-mail seja invalido', () => {
    const EMAIL_USER = 'julioaranabr@'
    const {queryByText} = render(<ValidEmail email={EMAIL_USER} />)
    const isInValidEmail = queryByText('Email Inválido')
    expect(isInValidEmail).toHaveAttribute('class', 'red-text')
   });
  
})





