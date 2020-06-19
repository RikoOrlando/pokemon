import React from 'react';
import Closed from '../Closed/index'
import './styles.scss'

const NotFound = props => {
  const icon = require('../../../assets/images/page-not-found.svg')
  const {onclick} = props
  return (
    <div className="notFoundContainer">
        <div>
            <Closed classname='floatRightTop bgWhite' onclick={onclick}/>
            <img alt="not Found" src={icon}/>
        </div>
    </div>
  );
};

export default NotFound;