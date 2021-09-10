import './App.css';
import React from 'react';
import PersonalInformation from './components/Personal.Fieldset';
import LastJobInformation from './components/Last.Job.Filedset';
import DataConsolidated from './components/Consolidated.Data';


const initialValue = {
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
  submited: false,
}
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = initialValue;
  
  this.handleChange = this.handleChange.bind(this);
  this.mouseEnter = this.mouseEnter.bind(this);
  this.sendData = this.sendData.bind(this);
  this.resetData = this.resetData.bind(this);
  }

  mouseEnter() {
    if (this.state.enterMouse === false) alert('Carefully fill in this information')
    this.setState({
      enterMouse: true,
    })
  }

  handleChange({target}) {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    if (name === 'name') value = value.toUpperCase();
    this.setState({
        [name]: value,
    });
  }

  sendData (event) {
    event.preventDefault();
    this.setState({
      submited: true
    });
  }

  resetData(event){
    event.preventDefault();
    this.setState(initialValue);
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
          namePerson={this.state.name} 
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
              id='submit' name='button-submit' 
              onClick={ (event) => this.sendData(event)}>Submit
            </button>
            <button type='reset' className='button-form'
              id='clear' name='button-clear'
              onClick={this.resetData}>
                Reset
            </button>
          </div>  
        </form>
        <DataConsolidated 
          name={this.state.name} email={this.state.email}
          cpf={this.state.cpf} adress={this.state.adress}
          state={this.state.stateName} typeHome={this.state.typeAdress}
          display={this.state.submited}/>
      </main>
    );
  }  
}

export default App;
