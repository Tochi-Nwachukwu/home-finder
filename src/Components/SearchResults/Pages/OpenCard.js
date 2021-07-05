import React from 'react'
import CardCarousel from './CardCarousel'
import './OpenCard.css'
import OpenCardDetails from './OpenCardDetails'
import { useLocation } from 'react-router-dom';


function OpenCard() {
  const location = useLocation()
  const item = location.state;
  console.log(location.state);
    return (
        <div className = 'open_card__container'>
          <CardCarousel slide={item.imgSrc}/> 
          <OpenCardDetails item={item} /> 
        </div>
    )
}

export default OpenCard
