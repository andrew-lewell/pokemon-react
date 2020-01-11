import React from "react";
import Pokemon from "./Pokemon.js";

const Card = ({ trainer, releasePokemon, addNewPokemon }) => {
  return (
    <div className="card">
      <p>{trainer.name}</p>
      <button onClick={() => addNewPokemon(trainer.id)}>Add Pokemon</button>
      <ul>
        {trainer.pokemons.map(pokemon => {
          return (
            <Pokemon
              pokemon={pokemon}
              key={pokemon.id}
              releasePokemon={() => releasePokemon(trainer.id, pokemon.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
