import React from "react";

const Card = props => {
  return (
    <div className={`listItem ${props.pokemon.type}`}>
      <img src={props.pokemon.image} alt={props.pokemon.name} />
      <h3 className="listItem__name">{props.pokemon.name}</h3>
      <h3 className="listItem__name">Pokemon Type: {props.pokemon.type}</h3>
      <div className="listItem__price">
        <div className="listItem__priceTxt">{props.pokemon.price}</div>
      </div>
    </div>
  );
};

export default Card;
