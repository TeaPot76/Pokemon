import React from 'react';

const Pokemon = (pokemon) => {
  if (pokemon === null){
      return(
        <p>Select Pokemon From The List</p>
      )
    }
  return(
    <h4>{pokemon.name}</h4>
  );
}

export default Pokemon;
