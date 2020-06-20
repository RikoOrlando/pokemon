import React from 'react';
import './styles.scss'

const PokemonType = props => {
  const listColor = ['grass', 'poison', 'fire', 'flying', 'bug', 'electric', 'water']
  const {children} = props 
  let colour = 'defaultColor'
  if(listColor.includes(children)){
    colour = children
  }
  
  return (
    <div className={`pokemonType ${colour}`}>{children}</div>
  );
};

export default PokemonType;