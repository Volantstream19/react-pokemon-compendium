import React from 'react';
import { usePokemon } from '../../hooks/pokemon.js';

export default function Main() {
  const { pokemon } = usePokemon();
  return (
    <div>
      {pokemon.map((poke) => (
        <>
          <img src={poke.url_image} />
          <p key={poke._id}>
            {poke.pokemon}
            {poke.type_1}
            Hp: {poke.hp}
            Attack: {poke.attack}
            Defense: {poke.defense}
          </p>
        </>
      ))}
    </div>
  );
}
