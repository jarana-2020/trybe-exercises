import './App.css';
import React from 'react';
import Button from './Button';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      cliquesBotao1: 0,
      cliquesBotao2: 0,
      cliquesBotao3: 0,
    }

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  getColor(num) {
    return (num % 2 === 0) ? 'green' : 'white';
  }
  
  handleClick1(event, num) {
    this.setState((state) => ({
      cliquesBotao1: state.cliquesBotao1 + 1,
    }));
    (num % 2 === 0) 
    ? event.target.style.backgroundColor = 'green' 
    : event.target.style.backgroundColor = 'white'
    console.log(this.getColor(this.state.cliquesBotao1));
  }

  handleClick2(event, num) {
    this.setState((state) => ({
      cliquesBotao2: state.cliquesBotao2 + 1,
    }));
    (num % 2 === 0) 
    ? event.target.style.backgroundColor = 'green' 
    : event.target.style.backgroundColor = 'white'
    console.log(this.getColor(this.state.cliquesBotao2));
  }
  handleClick3(event, num){
   this.setState((state) => ({
     cliquesBotao3: state.cliquesBotao3 + 1,
   }));
   (num % 2 === 0) 
   ? event.target.style.backgroundColor = 'green' 
   : event.target.style.backgroundColor = 'white'
   console.log(this.getColor(this.state.cliquesBotao3));
  }

  

  render() {
    const {cliquesBotao1, cliquesBotao2, cliquesBotao3} = this.state;
    return (
      <div>
          <Button onClick= {(event)=> this.handleClick1(event, cliquesBotao1 )} >Button 1</Button>
          <Button onClick= {(event)=> this.handleClick2(event, cliquesBotao2 )} >Button 2</Button>
          <Button onClick= {(event)=> this.handleClick3(event, cliquesBotao3 )} >Button 3</Button>
      </div>
      
    )
  }
  
}

export default App;
