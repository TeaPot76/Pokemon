import React from 'react';
import PokemonSelect from '../components/PokemonSelect';
import Pokemon from '../components/Pokemon';


class PokemonBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      currentPokemon: null
    };
    this.changePokemon = this.changePokemon.bind(this);

  }

  componentDidMount(){
    const url='http://pokeapi.co/api/v2/pokemon/?limit=151';
    fetch(url)
    .then((res)=> res.json())
    .then((pokemons) => {
    this.setState({pokemons: pokemons.results})
   });
  }

  changePokemon(selectedIndex){
    const selectedPokemon = this.state.pokemons[selectedIndex];
    this.setState({selectedPokemon});
  }

  render(){
    return(
      <div>
      <PokemonSelect
      pokemons={this.state.pokemons}
      onChangePokemon ={this.changePokemon}/>
      <Pokemon pokemon = {this.state.currentPokemon}
      />
      </div>
    )
  }

}
export default PokemonBox;
