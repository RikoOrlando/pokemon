import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Navbar, ListPokemon, NotFound} from '../../components'
import {fetchRandomdata, closedNotFound} from '../../store/actions/action'
import './styles.scss'

function Home() {
  const {notFound} = useSelector(state => state)
  const dispatch = useDispatch()
  dispatch(fetchRandomdata())
  return (
    <>
    {/* {
      notFound && (
        <NotFound onclick={() => dispatch(closedNotFound())}/>
      )
    } */}
      <div className="Home">
        <Navbar/>
        <div className="mainContainer">
          <ListPokemon/>
        </div>
      </div>
    </>
  );
}

export default Home;
