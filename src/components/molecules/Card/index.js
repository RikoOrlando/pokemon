import React, {useState} from 'react';
import {Avatar, H3, Button} from '../../atoms'
import './styles.scss'

const Card = props => {
  const clicked = 'unClick'
  const {handleClick} = props
  return (
    <div className={`detail ${clicked}`}>
      <div className="cardContainer" onClick={handleClick}>
        <Avatar urlImage={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'} classname="CardImage"/>
        <div className="cardInformationWrapper">
          <H3>Dhito</H3>
          <p>Type</p>
        </div>
      </div>
    </div>
  );
};

export default Card