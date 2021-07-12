import React from 'react'
import styles from '../../styles/navbar.module.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className={styles.container} >
            <ul>
                <li><Link to="home" smooth={true} duratio={1000}>Home</Link></li>
                <li><Link to="aboutMe" smooth={true} duratio={1000}>About Me</Link></li>
                <li><Link to="portfolio" smooth={true} duratio={1000}>Portfolio</Link></li>
                <li><Link to="contact" smooth={true} duratio={1000}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
