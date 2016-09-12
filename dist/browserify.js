(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastPokemon = exports.firstPokemon = undefined;

var _mypokemon = require('./mypokemon.js');

console.log((0, _mypokemon.firstPokemon)(), (0, _mypokemon.lastPokemon)());

exports.firstPokemon = _mypokemon.firstPokemon;
exports.lastPokemon = _mypokemon.lastPokemon;

},{"./mypokemon.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firstPokemon = firstPokemon;
exports.lastPokemon = lastPokemon;

var _pokemon = require('./pokemon');

var _pokemon2 = _interopRequireDefault(_pokemon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function firstPokemon() {
  return _pokemon2.default[0];
}

function lastPokemon() {
  return _pokemon2.default[_pokemon2.default.length - 1];
}

},{"./pokemon":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Volcanion"];

},{}]},{},[1]);
