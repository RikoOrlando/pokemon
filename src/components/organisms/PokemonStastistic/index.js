import React from 'react';
import {Bar} from '../../molecules'
import './styles.scss'

const PokemonStatistic = props => {
  const {data} = props
  return (
    <div className="statisticContainer">
        <h1>Statistics</h1>
        {
          data.map((el,i) => {return <Bar name={el.name} value={el.value} key={i} index={i}/>})
        }
    </div>
  );
};

export default PokemonStatistic;