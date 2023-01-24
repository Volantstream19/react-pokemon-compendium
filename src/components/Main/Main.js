import React from 'react';
import { usePokemon } from '../../hooks/pokemon.js';
import Select from '../Select/Select.js';
import Search from '../Search/Search.js';

import './Main.css';

export default function Main() {
  const { pokemon, types, handleTypeChange, handleSearch, setSearchTerm, searchTerm, loading } =
    usePokemon();
  if (loading) return <div className="loader"></div>;
  return (
    <div>
      <Search {...{ handleSearch, setSearchTerm, searchTerm }} />
      <Select types={types} handleTypeChange={handleTypeChange} />
      {searchTerm !== '' && <div>Searching by {searchTerm}</div>}
      <>
        <div className="pokeMons">
          {pokemon.map((poke) => (
            <div key={poke._id} className="pokemonCard">
              <img src={poke.url_image} />
              <div className="words">
                <h1>{poke.pokemon.toUpperCase()}</h1>
                <ul>
                  <li>{poke.type_1.toUpperCase()}</li>
                  <li>Health: {poke.hp}</li>
                  <li>Attack: {poke.attack}</li>
                  <li> Defense: {poke.defense}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}
