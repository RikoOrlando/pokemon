import React from 'react';
import './styles.scss'

const ArrowButton = props => {
    const {classname, handleClick} = props
  return ( 
      <div className={`arrowButtonContainer ${classname}`} onClick={handleClick}>
          <div className="one"></div>
          <div className="two"></div>
      </div> 
  );
};

export default ArrowButton;