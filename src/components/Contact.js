import React from 'react'
import style from '../styles/contact.module.css'

const Contact = () => {

    return (
        <div className={style.container} id="contact" >
            <h1>Contact Me Through Here</h1>
             <div className={style.iconContainter}>
                <a className={style.linkedinA}  href="https://www.linkedin.com/in/juan-gomez-077135172/">
                <img 
                    className={style.linkedin} 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"/>
                </a>
                <a className={style.gMailA}  href="https://www.linkedin.com/in/juan-gomez-077135172/">
                <img 
                    className={style.gMail} 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png" />
                </a>
             </div>
             
            <h1>Check Out My Github and Resume!</h1>
            <div className={style.iconContainter}>
                <a className={style.gitHubA}  href="https://www.linkedin.com/in/juan-gomez-077135172/">
                <img 
                    className={style.gitHub} 
                    src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"/>
                </a>
                <a className={style.downloadA}  href="https://www.linkedin.com/in/juan-gomez-077135172/">
                <img 
                    className={style.download} 
                    src="https://www.stouffvilletoyota.com/wp-content/uploads/2019/08/download-logo-png-image-77292.png"/>
                </a>
            </div>
        </div>
    )
}

export default Contact