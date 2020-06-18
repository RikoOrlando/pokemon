import React from 'react';
import {Navbar, ListPokemon} from '../../components'
import './styles.scss'

function Home() {
  return (
    <div className="Home">
      <Navbar/>
      <div className="mainContainer">
        <ListPokemon/>
      </div>
    </div>
  );
}

export default Home;
