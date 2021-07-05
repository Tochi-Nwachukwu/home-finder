import React, { useState } from 'react'
import './CardCarousel.css'
import '../Cards.css'

function CardCarousel({ slide }) {
    const [current] = useState(1)

    return (
        <div className="card__carousel--container">
            <div className="card__carousel--cantainer-image">
                <div className="">
                    <img className="carousel__main-img" src={slide} />
                </div>
            </div>
        </div>
    )
}

export default CardCarousel
