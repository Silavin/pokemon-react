import React from "react";
import Card from "../Card/Card";

const List = props => {
  return (
    <div className="list">
      {props.listOfPokemon.map((pokemonData, i) => (
        <Card pokemon={pokemonData} key={i} />
      ))}
    </div>
  );
};

export default List;
