import React from 'react'
import { TbGift } from 'react-icons/tb'
import { Go } from './imports'

import './card.css'

const Card = () => {
    return (
        <div className='hlwn__card'>
            <div className='hlwn__card-content'>
                <TbGift className="hlwn__card-content_icon" />
                <div className='hlwn__card-content_container'>
                    <h1>Rewards & Bonus</h1>
                    <img src={Go} alt="go" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla </p>
            </div>
        </div>
    )
}

export default Card