var pokemon = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Volcanion"
];

function firstPokemon() {
  return pokemon[0];
}

function lastPokemon() {
  return pokemon[pokemon.length -1];
}

console.log(firstPokemon(), lastPokemon());

export { firstPokemon, lastPokemon };