import React from 'react'

import { Card, Header, Images } from './containers'
import { Navbar } from './components'


import './App.css';


const App = () => {
    return (
        <div className='App'>
            <div>
                <Navbar />
                <Header />
            </div>
            <Card />
            <Images />
        </div>
    )
}


export default App