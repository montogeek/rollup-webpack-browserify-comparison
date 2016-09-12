import pokemon from './pokemon';

export function firstPokemon() {
  return pokemon[0];
}

export function lastPokemon() {
  return pokemon[pokemon.length -1];
}