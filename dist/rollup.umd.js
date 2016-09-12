(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.DEMO = global.DEMO || {})));
}(this, function (exports) { 'use strict';

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

  exports.firstPokemon = firstPokemon;
  exports.lastPokemon = lastPokemon;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=rollup.umd.js.map