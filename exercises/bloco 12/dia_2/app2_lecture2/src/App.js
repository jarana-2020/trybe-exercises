import './App.css';
import React from 'react';
import PersonalInformation from './components/Personal.Fieldset';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      stateName: '',
      typeAdress: '',
      resume: '',
      description: '',
      office: '',
  }
  
  this.handleChange = this.handleChange.bind(this)
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
        [name]: value,
    });

}
  render() {
    return (
      <main>
        <header className="App-header">
          <h1>Form Curriculum</h1>
        </header>
        <PersonalInformation 
          handleChange={this.handleChange} 
          namePerson={this.state.name.toUpperCase()} 
          email={this.state.email} adress={this.state.adress}
          cpf={this.state.cpf} state={this.state.stateName}
          description={this.state.description} 
          resume={this.state.resume} office={this.state.office}/>
      </main>
    );
  }  
}

export default App;
