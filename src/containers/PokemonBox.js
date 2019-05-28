import React from 'react';
import PokemonSelect from '../components/PokemonSelect.js';
import Pokemon from '../components/Pokemon.js';


class PokemonBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      currentPokemon: null,
      currentPokemonSpecies: null,

    };
    this.changePokemon = this.changePokemon.bind(this);

  }

  componentDidMount(){
    const url='http://pokeapi.co/api/v2/pokemon/?limit=151';
    fetch(url)
    .then((res)=> res.json())
    .then((allPokemons) => {
    this.setState({pokemons: allPokemons.results})
   });
  }

  changePokemon(selectedIndex){
    const currentPokemon = this.state.pokemons[selectedIndex];
    const currentPokemonUrl = currentPokemon.url;

    fetch(currentPokemonUrl)
    .then((res) => res.json())
    .then((pokemonObject) => {
      this.setState({currentPokemon: pokemonObject})

      const speciesUrl = pokemonObject.species.url;
      fetch(speciesUrl)
      .then((res)=> res.json())
      .then((speciesObject) =>{
        this.setState({currentPokemonSpecies: speciesObject})
      })
    })

  }

  render(){
    return(
      <div>
      <PokemonSelect
      pokemons={this.state.pokemons}
      onChangePokemon ={this.changePokemon}/>
      <Pokemon
       pokemon = {this.state.currentPokemon}
       pokemonSpecies = {this.state.currentPokemonSpecies}
       />
      </div>
    )
  }

}
export default PokemonBox;
