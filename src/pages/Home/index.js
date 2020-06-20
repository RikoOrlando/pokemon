import React from 'react';
import {useDispatch} from 'react-redux'
import {Navbar, ListPokemon, NotFound, ButtonPagination} from '../../components'
import {fetchRandomdata, nextPage, prevPage} from '../../store/actions/action'
import './styles.scss'

function Home() {
  const dispatch = useDispatch()
  dispatch(fetchRandomdata())
  const handleNext = () => {
    dispatch(nextPage())
  }
  const handlePrev = () => {
    dispatch(prevPage())
  }
  
  return (
    <>
      <NotFound/>
      <div className="Home">
        <Navbar/>
        <div className="mainContainer">
          <ButtonPagination handleNext={handleNext} handlePrev={handlePrev}/>
          <ListPokemon/>
        </div>
      </div>
    </>
  );
}

export default Home;
