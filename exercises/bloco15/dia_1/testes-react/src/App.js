import './App.css';
import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      saveEmail: '',
    }
  }

changeEmail = (value) => {
  this.setState({email: value});
}

changeSaveEmail = (value) => {
  this.setState({saveEmail: value, email: ''})
}

  render() {
    const {email, saveEmail} = this.state;
    return (
      <div className="App">
        <label htmlFor="id-e-mail">
          Email
          <input 
          id="id-e-mail"
          value={email}
          type="email"
          onChange= {(e) => this.changeEmail(e.target.value)} />
        </label>
        <input 
          type="button"
          id="btn-enviar"
          data-testid="id-send"
          value="Enviar"
          onClick={() => this.changeSaveEmail(email)}
          />
        <input type="button" id="btn-id" value="Voltar" />
        <ValidEmail email={saveEmail} isSend={saveEmail}/>
      </div>
    )
  }
}
export default App;
