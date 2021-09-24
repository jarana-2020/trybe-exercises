import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;
        return (
            <div>
                <header className = 'header'><h1>Pokedex</h1></header>
                <div className = 'div-pokedex'>
                    {pokemons.map((pokemon) => <Pokemon key = {pokemon.id} pokemon = {pokemon}/>)}
                </div>
            </div>   
        )
    }
}

export default Pokedex;

