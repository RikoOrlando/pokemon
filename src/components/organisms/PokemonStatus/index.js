import React from 'react';
import {Status} from '../../molecules'
import './styles.scss'

const PokemonStatus = props => {
  const{data} = props
  return (
    <div className="pokemonStatusContainer">
      {
        data.map(el => <Status data={el} flag={Object.keys(el)}/>)
      }
    </div>
  );
};

export default PokemonStatus;