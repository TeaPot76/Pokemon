import React, {Component} from 'react';

const PokemonSelect = (props) => {
  const options = props.pokemons.map((pokemon, index) =>{
    return(
      <option key={index} value={index}>
    {pokemon.name}</option>
  )
  });

function handleChange(evt){
  const selectedIndex = evt.target.value;
  props.onChangePokemon(selectedIndex);
}

return (
  <select id="pokemon-selector"
  defaultValue="default"
  onChange={handleChange}>
  <option disabled value ="default">Choose a Pokemon </option>
  {options}
  </select>
)}


export default PokemonSelect;
