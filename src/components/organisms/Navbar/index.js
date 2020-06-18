import React from 'react';
import {Logo} from '../../molecules'
import './styles.scss'

const Navbar = props => {
  return (
    <div className="navbarContainer">
      <div className="navbarLink"><Logo/></div>
      <div className="navbarLink">elemt</div>
    </div>
  );
};

export default Navbar;