import React, { Component } from "react";
import List from "./Components/List/List";
import { getPokemons } from "./Data/pokemonData";

class App extends Component {
  state = {
    pokemonList: getPokemons()
  };

  filterListOfPokemon = (originalList, searchingText) => {
    return originalList.filter(pokemon => {
      const name = pokemon.name.toLowerCase();
      const type = pokemon.type.toLowerCase();
      if (name.includes(searchingText) || type.includes(searchingText)) {
        return true;
      }
      return false;
    });
  };

  search = event => {
    const searchingText = event.target.value.toLowerCase();
    this.setState({
      pokemonList: this.filterListOfPokemon(getPokemons(), searchingText)
    });
  };

  render() {
    const { pokemonList } = this.state;
    return (
      <div className="wrapper">
        <div className="filterInput wrapper">
          <input placeholder="Seach your Pokedex!" onChange={this.search} />
        </div>

        <List listOfPokemon={pokemonList} />
      </div>
    );
  }
}

export default App;
