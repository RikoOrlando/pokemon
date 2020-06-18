import React from 'react';
import './styles.scss'

const Avatar = props => {
  const {urlImage, classname} = props
//   const icon = require('../../../assets/images/icon.png')  
  return (
    <img alt="icon" src={urlImage} className={classname}/>
  );
};

export default Avatar;