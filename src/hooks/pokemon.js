import { useEffect, useState } from 'react';
import {
  fetchPokemon,
  fetchPokemonType,
  fetchTypes,
  fetchPokemonSearch,
} from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetching pokemon names and data from api
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();

      setPokemon(data);
    };
    fetchData();
  }, []);
  // fetching types from API
  useEffect(() => {
    const fetchType = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };
    fetchType();
  }, []);
  //
  const handleTypeChange = async (type) => {
    const data = await fetchPokemonType(type);
    setPokemon(data);
  };

  const handleSearch = async (e, searchTerm) => {
    e.preventDefault();
    const data = await fetchPokemonSearch(searchTerm);
    setPokemon(data);
  };
  return { pokemon, types, handleTypeChange, searchTerm, handleSearch, setSearchTerm };
}
