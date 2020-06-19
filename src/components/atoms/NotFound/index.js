import React, {useEffect} from 'react';
import {useSpring, animated} from 'react-spring'
import Closed from '../Closed/index'
import './styles.scss'
import {useSelector, useDispatch} from 'react-redux'
import { closedNotFound } from '../../../store/actions/action'

const NotFound = props => {
  const icon = require('../../../assets/images/page-not-found.svg')
  const dispatch = useDispatch()
  const {notFound} = useSelector(state => state)
  const anim = useSpring({transform: 'scale(1)', from: {transform: 'scale(0)'}})
  useEffect(() => {
    if(notFound){
      document.body.classList.add('scrolloff')
    } else {
      document.body.classList.remove('scrolloff')
    }
  },[notFound])
  return (
    <>
      {
        notFound ?
        <animated.div className="notFoundContainer" style={anim}>
            <div>
                <Closed classname='floatRightTop bgWhite' onclick={() => dispatch(closedNotFound())}/>
                <img alt="not Found" className="iconNotFound" src={icon}/>
            </div>
        </animated.div>: <></>
      }
    </>
  );
};

export default NotFound;