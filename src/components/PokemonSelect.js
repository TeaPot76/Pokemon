import React from 'react';

const PokemonSelect = (props) => {
  const options = props.pokemons.map((pokemon, index) =>{
    return <option value={index}
    key={index}>
    {pokemon.name}</option>
  })

function handleChange(evt){
  props.onChangePokemon(evt.target.value);
  console.log(evt.target.value)
}

return (
  <select id="pokemon-selector"
  onChange={handleChange}
  defaultValue="default">
  <option disabled value = "default">Choose a Pokemon </option>
  {options}
  </select>
)}


export default PokemonSelect;
