import React from 'react';
import {useDispatch} from 'react-redux'
import {Navbar, ListPokemon} from '../../components'
import {fetchRandomdata} from '../../store/actions/action'
import './styles.scss'

function Home() {
  const dispatch = useDispatch()
  dispatch(fetchRandomdata())
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
