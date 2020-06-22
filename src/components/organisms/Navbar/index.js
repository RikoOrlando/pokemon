import React, {useState} from 'react';
import {Logo} from '../../molecules'
import {InputForm} from '../../atoms'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {findPokemon} from '../../../store/actions/action'
import './styles.scss'

const Navbar = props => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const handleSubmit = (prop) => {
    prop.preventDefault()
    dispatch(findPokemon(search, history))
    setSearch('')
  }
  const onchange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="navbarContainer">
      <div className="navbarLink"><Logo/></div>
      <div className="navbarLink"><InputForm handleSubmit={handleSubmit} value={search} onChange={onchange} name='search' classname="inputSearch" type="text" placeHolder="Find Pokemon"/></div>
    </div>
  );
};

export default Navbar;