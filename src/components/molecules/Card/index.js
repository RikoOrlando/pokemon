import React from 'react';
import {Avatar, H3} from '../../atoms'
import './styles.scss'

const Card = props => {
  const clicked = 'unClick'
  const {handleClick, data} = props
  return (
    <div className={`detail ${clicked}`}>
      <div className="cardContainer" onClick={() => handleClick(data.id)}>
        <Avatar urlImage={data.imageUrl} classname="CardImage"/>
        <div className="cardInformationWrapper">
          <H3 classname="name">{data.name}</H3>
          <p>#{data.id}</p>
        </div>
      </div>
    </div>
  );
};

export default Card