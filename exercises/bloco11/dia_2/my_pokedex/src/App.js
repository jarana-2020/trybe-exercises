import './App.css';
import Pokemon from './components/Pokemon';
import pokemons from './Data';

function App() {
  return (
    <Pokemon pokemon = {pokemons[0]}/>
  );
}

export default App;
