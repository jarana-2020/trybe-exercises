import './App.css';
import React from 'react';
import Button from './Button';

const handleClick1 = () => {
  console.log('Clicou 1');
}
const handleClick2 = () => {
  console.log('Clicou 2');
}
const handleClick3 = () => {
  console.log('Clicou 3');
}

class App extends React.Component {
  
  render() {
    return (
      <div>
          <Button>Button 1</Button>
          <button onClick= {handleClick2}>Button 2</button>
          <button onClick= {handleClick3}>Button 3</button>
      </div>
      
    )
  }
  
}

export default App;
