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
          <Button onClick= {handleClick1}>Button 1</Button>
          <Button onClick= {handleClick2}>Button 2</Button>
          <Button onClick= {handleClick3}>Button 3</Button>
      </div>
      
    )
  }
  
}

export default App;
