import React from 'react';
import './styles.scss'
import {Card} from '../../molecules'
import history from '../../../history'

const ListPokemon = props => {
  const handleClick = () => {
    history.push('/detail')
  }
  return (
    <div className="listPokemonContainer">
      <Card handleClick={handleClick}/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
};

export default ListPokemon;