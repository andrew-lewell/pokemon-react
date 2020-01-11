import React from "react";

const Pokemon = ({ pokemon, releasePokemon }) => {
  return (
    <li>
      {pokemon.nickname} ({pokemon.species})
      <button
        className="release"
        onClick={releasePokemon}
      >
        Release
      </button>
    </li>
  );
};

export default Pokemon;
