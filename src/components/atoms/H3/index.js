import React from 'react';
import './styles.scss'

const H3 = props => {
  const {classname, children} = props
//   const icon = require('../../../assets/images/icon.png')  
  return (
    <h3 className={classname}>{children}</h3>
  );
};

export default H3;