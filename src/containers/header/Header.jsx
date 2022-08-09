import React from 'react'
import { bat01 } from './imports'
import './header.css'

const Header = () => {
    return (
        <div className='hlwn__header'>
            <div className='hlwn__header-content'>
                <h1>Hall <img src={bat01} /> ween Products <br /> for your party</h1>
                <div className='hlwn__header-content_p'>
                    <p>Search anything for your party and <br /> get it fast and fast</p>
                </div>

                <div className='hlwn__header-container'>
                    <div className='hlwn__header-signup'>
                        <button type='button'>
                            <a href="#signup">Sign up</a>
                        </button>
                    </div>
                    <div className='hlwn__header-viewproducts'>
                        <button type='button'>
                            <a href="#viewproducts">View products</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header