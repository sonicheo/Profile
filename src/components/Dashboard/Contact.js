import React from 'react'
import style from '../../styles/contact.module.css'
import file from '../../data/Resume_JuanG.pdf'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDownload} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    function onclickEmail(e){
        e.preventDefault()
        window.location.href = "mailto:juan.a.gomez.villanueva@gmail.com";
    }

    return (
        <div className={style.container} id="contact" >
            
            <h1>Contact Me Through Here</h1>
             <div className={style.iconTop}>
                <a className={style.linkedinA}  href="https://www.linkedin.com/in/juan-gomez-077135172/">
                    <FaLinkedin/>
                </a>
                <a className={style.gMailA}  onClick={e => {onclickEmail(e)}}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
             </div>
             
            <h1 className={style.textBottom} >Check Out My Github and Resume!</h1>
            <div className={style.iconBottom}>
                <a className={style.gitHubA}  href="https://github.com/sonicheo">
                    <FaGithub/>
                </a>
                <a className={style.downloadA} href={file} download='JuanG_Resume.pdf' >
                    <FontAwesomeIcon icon={faDownload}/>
                </a>
            </div>
        </div>
    )
}

export default Contact
