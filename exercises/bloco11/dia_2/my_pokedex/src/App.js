import './App.css';
import Pokemon from './components/pokemon';
import pokemons from './data';

function App() {
  return (
    <Pokemon pokemon = {pokemons[0]}/>
  );
}

export default App;
