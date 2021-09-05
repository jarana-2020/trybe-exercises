import './App.css';
import React from 'react';
// import Button from './Button';

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
  
  handleClick1() {
    this.setState((state) => ({
      cliquesBotao1: state.cliquesBotao1 + 1,
    }))
    console.log(this.getColor(this.state.cliquesBotao1));
  }

  handleClick2() {
    this.setState((state) => ({
      cliquesBotao2: state.cliquesBotao2 + 1,
    }))
    console.log(this.getColor(this.state.cliquesBotao2));
  }
  handleClick3(){
   this.setState((state) => ({
     cliquesBotao3: state.cliquesBotao3 + 1,
   }))
   console.log(this.getColor(this.state.cliquesBotao3));
  }

  

  render() {
    const {cliquesBotao1, cliquesBotao2, cliquesBotao3} = this.state;
    return (
      <div>
          <button onClick= {()=> this.handleClick1()} style={{backgroundColor: this.getColor(cliquesBotao1)}}>Button 1</button>
          {/* <Button onClick= {()=> this.handleClick1()}>Button 1</Button> */}
          <button onClick= {()=> this.handleClick2()} style={{backgroundColor: this.getColor(cliquesBotao2)}}>Button 2</button>
          {/* <Button onClick= {this.handleClick2}>Button 2</Button> */}
          <button onClick= {()=> this.handleClick3()} style={{backgroundColor: this.getColor(cliquesBotao3)}}>Button 3</button>
          {/* <Button onClick= {this.handleClick3}>Button 3</Button> */}
      </div>
      
    )
  }
  
}

export default App;
