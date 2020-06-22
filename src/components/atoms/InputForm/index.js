import React from 'react';
import './styles.scss'

const InputForm = props => {
  const icon = require('../../../assets/images/Search.svg')
  const {classname, handleSubmit} = props
//   const icon = require('../../../assets/images/icon.png')  
  return (
      <>
      <form onSubmit={handleSubmit}>
        <input {...props} className={classname} id="textInput"/>
        <label for="textInput">
            <img src={icon} className="imageInput" alt="search"/>
        </label>
      </form>
      </>
  );
};

export default InputForm;