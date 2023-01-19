export async function fetchPokemon() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
  const data = await resp.json();
  console.log(data);

  return data.results;
}
