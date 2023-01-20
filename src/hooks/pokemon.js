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
  const [loading, setLoading] = useState(true);
  // Fetching pokemon names and data from api
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetchPokemon();

      setPokemon(data);
      setLoading(false);
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
    setLoading(true);
    const data = await fetchPokemonType(type);
    setPokemon(data);
    setLoading(false);
  };

  const handleSearch = async (e, searchTerm) => {
    e.preventDefault();
    const data = await fetchPokemonSearch(searchTerm);
    setPokemon(data);
  };
  return {
    pokemon,
    types,
    handleTypeChange,
    searchTerm,
    handleSearch,
    setSearchTerm,
    loading,
  };
}
