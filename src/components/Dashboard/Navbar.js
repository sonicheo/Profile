import React from 'react'
import { Link } from 'react-scroll';
import styles from '../../styles/navbar.module.css'

const Navbar = () => {



    window.addEventListener('scroll', (e) =>{
        var scrolled = window.pageYOffset;
        var target = null;
        
        if(scrolled >= 0 && scrolled < 1088){
            target = document.querySelector('#navHome')
            target.style.color = 'green'
        }
        else{
            target = document.querySelector('#navHome')
            target.style.color = 'white'
        }

        if(scrolled >= 1088 && scrolled < 2256){
            target = document.querySelector('#navAboutMe')
            target.style.color = 'green'
        }
        else{
            target = document.querySelector('#navAboutMe')
            target.style.color = 'white'
        }

        if(scrolled >= 2256 && scrolled < 3424){
            target = document.querySelector('#navPortfolio')
            target.style.color = 'green'
        }
        else{
            target = document.querySelector('#navPortfolio')
            target.style.color = 'white'
        }

        if(scrolled >= 3424){
            target = document.querySelector('#navContact')
            target.style.color = 'green'
        }
        else{
            target = document.querySelector('#navContact')
            target.style.color = 'white'
        }

    } )

    


    return (
        <div className={styles.container}>
                
                <ul>
                    <li><Link style={{color: "green"}}  id="navHome" to="home" smooth="true" >Home</Link></li>
                    <li><Link id="navAboutMe" to="aboutMe" smooth="true">About Me</Link></li>
                    <li><Link id="navPortfolio" to="portfolio" smooth="true">Portfolio</Link></li>
                    <li><Link id="navContact" to="contact" smooth="true">Contact Me</Link></li>
                </ul>
        </div>
    )
}

export default Navbar
