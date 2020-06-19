import React from 'react';
import './styles.scss'
import {Card} from '../../molecules'
import {useSelector, useDispatch} from 'react-redux'
import {fetchDetailPokemon} from '../../../store/actions/action'
import {useHistory} from 'react-router-dom'

const ListPokemon = props => {
  const {listPokemon} = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleClick = (id) => {
    dispatch(fetchDetailPokemon(id, history))
  }
  return (
    <div className="listPokemonContainer">
      {
        listPokemon.map(el => <Card data={el} key={el.id} handleClick={handleClick}/>)
      }
    </div>
  );
};

export default ListPokemon;