export async function fetchPokemon() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
  const data = await resp.json();

  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await resp.json();

  return data;
}

export async function fetchPokemonType(type) {
  const resp = new URLSearchParams();
  resp.set('type', type);
  const data = await fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?${resp.toString()}`);
  const res = await data.json();
  return res.results;
}

export async function fetchPokemonSearch(searchTerm) {
  //   const resp = new URLSearchParams();
  //   resp.set('pokemon', searchTerm);
  //   let search = `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${resp.toString()}`;
  let search = `https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${searchTerm}`;
  //   if (types) {
  //     search += `&type=${types}`;
  //   }
  const response = await fetch(search);
  const data = await response.json();

  return data.results;
}
