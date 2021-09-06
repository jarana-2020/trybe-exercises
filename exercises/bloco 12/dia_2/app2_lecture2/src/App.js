import './App.css';
import React from 'react';
import PersonalInformation from './components/Personal.Fieldset';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Form Curriculum</h1>
        </header>
        <PersonalInformation />
      </div>
    );
  }  
}

export default App;
