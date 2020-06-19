import React from 'react';
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import './styles.scss';
import {PokemonDescription, PokemonStatistic, PokemonMovement, PokemonStatus, Closed} from '../../components'

function Detail() {
  const history = useHistory()
  const {detailPokemon} = useSelector(state => state)
  const onclick = () => {
    history.push('/')
  }
  return (
    <div className="detailContainer">
      <div className="detailWraper">
        <Closed classname='floatRightTop' onclick={onclick}/>
        <PokemonDescription data={detailPokemon}/>
        <PokemonStatus data={detailPokemon.baseStatus}/>
        <PokemonStatistic data={detailPokemon.statistic}/>
        <PokemonMovement data={detailPokemon.moves}/>
      </div>
    </div>
  );
}

export default Detail;
