import React from 'react';
import {Bar} from '../../molecules'
import './styles.scss'

const PokemonStatistic = props => {
  const {data} = props
  return (
    <div className="statisticContainer">
        <h1>Statistics</h1>
        {
          data.map(el => <Bar name={el.name} value={el.value}/>)
        }
    </div>
  );
};

export default PokemonStatistic;