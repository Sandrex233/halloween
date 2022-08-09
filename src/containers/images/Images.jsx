import React from 'react'

import { Image1, Image2, Image3, bat02, Web02, Web03 } from './imports'

const Images = () => {
    return (
        <div className='hlwn__images'>
            <img src={bat02} alt="bat" />
            <img src={Image1} alt="boogeyman" />
            <img src={Image2} alt="frankenstein" />
            <img src={Image3} alt="wolverine" />
            <img src={Web02} alt="web2" />
            <img src={Web03} alt="web3" />
        </div>
    )
}

export default Images