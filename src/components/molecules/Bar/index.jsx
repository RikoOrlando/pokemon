import React from 'react';
import './styles.scss'
import {useSpring, animated} from 'react-spring'

const Bar = props => {
  const {name, value, index} = props
  const anim = useSpring({width: `${value}%`, from: {width: '0%'}, delay: 200 + (index*30)})
  return (
    <div className="barContainer">
        <h3 className="titleBar">{name}</h3>
        <div className="barWrap">
            <animated.div className="barPower" style={anim}></animated.div>
            <div className="barValue" >{value}</div>
        </div>
    </div>
  );
};

export default Bar