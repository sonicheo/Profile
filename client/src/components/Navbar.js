import React from 'react'
import { Container, Col } from 'react-bootstrap'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <Container fluid className={styles.container}>
                <ul>
                    <li><a href="#home" >Home</a></li>
                    <li><a href="#aboutMe" >About Me</a></li>
                    <li><a href="#portfolio" >Portfolio</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
        </Container>
    )
}

export default Navbar
