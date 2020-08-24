import React, {Component} from 'react';
import './Pokecard.css';
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

//Padding number with zeros to the left to form a 3 digit number
//If number is greater than 999 - return it
//Else, add 00 in front of the number and slice at the 3rd position
//from the back to front
let padToThree = (number) => (number<= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component{
    render (){
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return(
        <div className="Pokecard">
            <h1 className='Pokecard-title'>{this.props.name}</h1>
            <img src={imgSrc} alt={this.props.name}/>
            <div className='Pokecard-data'>Type: {this.props.type}</div>
            <div className='Pokecard-data'>Exp: {this.props.exp}</div>

        </div>
        );
    }
}

export default Pokecard;
