import React from 'react';
import {Status} from '../../molecules'
import './styles.scss'

const PokemonStatus = props => {
  const{data} = props
  return (
    <div className="pokemonStatusContainer">
      {
        data.map((el, indx) => {return <Status data={el} key={indx} flag={Object.keys(el)}/>})
      }
    </div>
  );
};

export default PokemonStatus;