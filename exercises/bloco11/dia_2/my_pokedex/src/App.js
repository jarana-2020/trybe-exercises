import './App.css';
// import Pokemon from './components/pokemon';
import Pokedex from './components/pokemons';
import pokemons from './data';

function App() {
  return (
    <Pokedex pokemons = {pokemons} />
  );
}

export default App;
