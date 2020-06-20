import React, {useEffect, useState} from 'react';
import {useSpring, animated} from 'react-spring'
import Closed from '../Closed/index'
import './styles.scss'
import {useSelector, useDispatch} from 'react-redux'
import { closedNotFound } from '../../../store/actions/action'

const NotFound = props => {
  const icon = require('../../../assets/images/page-not-found.svg')
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const {notFound} = useSelector(state => state)
  const anim = useSpring({transform: notFound ? 'scale(1)' : 'scale(0)', from: {transform: notFound ? 'scale(0)' : 'scale(1)'}, config:{duration: 300}})
  useEffect(() => {
    if(notFound){
      setShow(true)
      document.body.classList.add('scrolloff')
    } else {
      setTimeout(() => {
        setShow(false)
      }, 300);
      document.body.classList.remove('scrolloff')
    }
  },[notFound])
  return (
    <>
      {
        show ?
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