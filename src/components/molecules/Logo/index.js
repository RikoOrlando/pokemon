import React from 'react';
import {Avatar, H3} from '../../atoms'
import './styles.scss'

const Logo = props => {
  return (
    <div className="logoContainer">
      <Avatar urlImage={'https://img.pngio.com/pokeball-icon-png-web-icons-png-pokeball-icon-png-300_300.png'} classname="logo"/>
      <H3>Pokedex</H3>
    </div>
  );
};

export default Logo