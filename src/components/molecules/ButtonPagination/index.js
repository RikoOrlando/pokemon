import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import {ArrowButton} from '../../atoms'
import {useSpring, animated} from 'react-spring'
import './styles.scss'

const ButtonPagination = props => {
  const {pagination} = useSelector(state => state)
  const [trigger, setTrigger] = useState(false)
  const [value, setValue] = useState(1)
  const {handleNext, handlePrev} = props
  const anim = useSpring(
      {
        to: {
            marginTop: trigger ? 40 : 15,
            opacity: trigger ? 0 : 1
        }, 
        from: {
            // marginTop: trigger ? '1000px' : '1000px',
        }
      })
  useEffect(() => {
    setTrigger(true)
    setTimeout(() => {
        setTrigger(false)
        setValue(pagination.page)
    }, 300);

  },[pagination.page])
  
  return (
    <div className={`buttonPaginationContainer`}>
        {
            pagination.page > 1 &&(
                <ArrowButton classname='reverse' handleClick={handlePrev}/> 
            )
        }
        <animated.p style={anim}>{value}</animated.p>
        <ArrowButton handleClick={handleNext}/>
    </div>
  );
};

export default ButtonPagination