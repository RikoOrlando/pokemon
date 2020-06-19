import React from 'react';
import './styles.scss'

const Closed = props => {
  const {onclick, classname} = props 
  const icon = require('../../../assets/images/close.svg')
  return (
    <div onClick={onclick} className={`closedContainer ${classname}`}>
        <img src={icon} alt='close'/>
    </div>
  );
};

export default Closed;