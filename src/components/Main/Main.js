import React from 'react';
import { usePokemon } from '../../hooks/pokemon.js';
import Select from '../Select/Select.js';
import Search from '../Search/Search.js';

export default function Main() {
  const { pokemon, types, handleTypeChange, handleSearch, setSearchTerm, searchTerm, loading } =
    usePokemon();
  if (loading) return <p>Loading..</p>;
  return (
    <div>
      <Search {...{ handleSearch, setSearchTerm, searchTerm }} />
      <Select types={types} handleTypeChange={handleTypeChange} />
      {pokemon.map((poke) => (
        <>
          <img src={poke.url_image} />
          <p key={poke._id}>
            {poke.pokemon}
            {poke.type_1}
            Hp: {poke.hp}
            Attack: {poke.attack}
            Defense: {poke.defense}
            loading={loading}
          </p>
        </>
      ))}
    </div>
  );
}
