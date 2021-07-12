import React from 'react'
import Navbar from '../components/static/Navbar'
import Home from '../components/Home'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <AboutMe/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}

export default Main
