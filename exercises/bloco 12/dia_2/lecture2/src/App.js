import './App.css';
import React from 'react';
import Button from './Button';

class App extends React.Component {

  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }
  
  handleClick1() {
    console.log(this);
    console.log('Clicou 1');
  }

  handleClick2() {
    console.log('Clicou 2');
  }
  handleClick3(){
    console.log('Clicou 3');
  }

  render() {
    return (
      <div>
          <Button onClick= {this.handleClick1}>Button 1</Button>
          <Button onClick= {this.handleClick2}>Button 2</Button>
          <Button onClick= {this.handleClick3}>Button 3</Button>
      </div>
      
    )
  }
  
}

export default App;
