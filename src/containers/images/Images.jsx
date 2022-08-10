import React from 'react'

import { Image1, Image2, Image3, bat02, Web02, Web03, blur } from './imports'

import './images.css'

const Images = () => {
    return (
        <div className='hlwn__images'>
            <div className='hlwn__images-blur_one'>
                <img src={blur} alt="blur" />
            </div>
            <div className='hlwn__images-blur_two'>
                <img src={blur} alt="blur" />
            </div>
            <div className='hlwn__images-blur_three'>
                <img src={blur} alt="blur" />
            </div>
            <div className='hlwn__images-bat'>
                <img src={bat02} alt="bat" />
            </div>
            <div className='hlwn__images-boogeyman'>
                <img src={Image1} alt="boogeyman" />
            </div>
            <div className='hlwn__images-frankenstein'>
                <img src={Image2} alt="frankenstein" />
            </div>
            <div className='hlwn__images-wolverine'>
                <img src={Image3} alt="wolverine" />
            </div>
            <div className='hlwn__images-web2'>
                <img src={Web02} alt="web2" />
            </div>
            <div className='hlwn__images-web3'>
                <img src={Web03} alt="web3" />
            </div>
        </div>
    )
}

export default Images