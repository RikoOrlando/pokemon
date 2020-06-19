import React from 'react';
import './styles.scss'


const Status = props => {
  let icon = ''
  let value = ''
  const {data, flag} = props 
  if(flag[0] === 'weight'){
    value = data[flag[0]]
    icon = require('../../../assets/images/weight-scale.svg')
  }else if( flag[0] === 'exp'){
    value = data[flag[0]]
    icon = require('../../../assets/images/strength.svg')
  }
  else{
    value = data[flag[0]]
    icon = require('../../../assets/images/height.svg')

  }
  return (
    <div className="statusContainer">
        <img className="statusImage" src={icon} alt="status"/>
        <p>{value}</p>
    </div>
  );
};

export default Status