import React from 'react';
import {PokemonType} from '../../atoms/index'
import './styles.scss'

const PokemonMovement = props => {
  const {data} = props
  return (
    <div className="movementContainer">
        <h1>Movement</h1>
        <div className="movementList">
            {
              data.map(el => <PokemonType>{el}</PokemonType>)
            }
        </div>
    </div>
  );
};

export default PokemonMovement;