import React from 'react';
import {Avatar, H3, PokemonType} from '../../atoms'
import './styles.scss'

const PokemonDescription = props => {
  const {data} = props
  return (
    <div className="descriptionContainer">
        <div className="infoWrapper">
            <Avatar urlImage={data.imageUrl} classname="CardImage"/>
            <div className="nameWrapper">
                <p>#{data.id}</p>
                <H3 classname="noMargin">{data.name}</H3>
                <div>
                  {
                    data.tipe.map(el => <PokemonType>{el}</PokemonType>)
                  }
                </div>
            </div>
        </div>
        <div className="descript">
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
        </div>
    </div>
  );
};

export default PokemonDescription;