import React from 'react';
import './styles.scss'

const Button = props => {
  const {handleClick} = props
  return (
    <div onClick={handleClick} className="buttonWrap">
        <div className="first"></div>
        <div className="second"></div>
    </div>
  );
};

export default Button;