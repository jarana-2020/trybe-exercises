import './App.css';
import React from 'react';
import PersonalInformation from './components/Personal.Fieldset';
import LastJobInformation from './components/Last.Job.Filedset';

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
      enterMouse: false,
  }
  
  this.handleChange = this.handleChange.bind(this);
  this.mouseEnter = this.mouseEnter.bind(this);
  this.sendData = this.sendData.bind(this);
  }

  mouseEnter() {
    if (this.state.enterMouse === false) alert('Carefully fill in this information')
    this.setState({
      enterMouse: true,
    })
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
        [name]: value,
    });
  }

  sendData (event) {
    event.preventDefault();
  }
 
  render() {
    return (
      <main>
        <header className="App-header">
          <h1>Form Curriculum</h1>
        </header>
        <form>
        <PersonalInformation 
          handleChange={this.handleChange} 
          namePerson={this.state.name.toUpperCase()} 
          email={this.state.email} adress={this.state.adress}
          cpf={this.state.cpf} state={this.state.stateName}
          description={this.state.description} 
          resume={this.state.resume} office={this.state.office}
          mouseEnter={this.mouseEnter}/>
          <LastJobInformation resume={this.state.resume} handleChange={this.handleChange} 
            description={this.state.description} 
            office={this.state.office} mouseEnter={this.mouseEnter}/>
          <div className='container'>
            <button type='submit' className='button-form'
            id='submit' name='button-submit' onClick={ (event) => this.sendData(event)}>Submit</button>
          </div>  
        </form>
      </main>
    );
  }  
}

export default App;
