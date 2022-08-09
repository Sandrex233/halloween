import React from 'react'

import { Ghost01, Ghost02, CombinedShape } from './imports';
import './navbar.css'

const Navbar = () => {


    return (
        <div className='hlwn__navbar'>
            <div className='hlwn__navbar-links'>
                <div className='hlwn__navbar-links-category'>
                    <img src={CombinedShape} />
                </div>
                <div className='hlwn__navbar-ghost-one'>
                    <img src={Ghost01} />
                </div>
                <div className='hlwn__navbar-links_container'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#services">Services</a></p>
                    <p><a href="#successStories">Success Stories</a></p>
                    <p><a href="#blog">Blog</a></p>
                </div>
                <div className='hlwn__navbar-signup'>
                    <p><a href="#signup">Sign up</a></p>
                </div>
                <div className='hlwn__navbar-ghost-two'>
                    <img src={Ghost02} />
                </div>

            </div>
        </div>
    )
}

export default Navbar