import React from 'react'
import style from '../../styles/contact.module.css'
import file from '../../data/Resume_JuanG.pdf'

const Contact = () => {

    function onclickEmail(e){
        e.preventDefault()
        window.location.href = "mailto:juan.a.gomez.villanueva@gmail.com";
    }

    return (
        <div className={style.container} id="contact" >
            <h1>Contact Me Through Here</h1>
             <div className={style.iconContainter}>
                <a className={style.linkedinA}  href="https://www.linkedin.com/in/juan-gomez-077135172/">
                <img 
                    className={style.linkedin} 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"/>
                </a>
                <a className={style.gMailA}  onClick={e => {onclickEmail(e)}}>
                <img 
                    className={style.gMail} 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png" />
                </a>
             </div>
             
            <h1>Check Out My Github and Resume!</h1>
            <div className={style.iconContainter}>
                <a className={style.gitHubA}  href="https://github.com/sonicheo">
                <img 
                    className={style.gitHub} 
                    src="https://www.pngkey.com/png/full/178-1787243_github-icon-png-github-icon-white-png.png"/>
                </a>
                <a className={style.downloadA} href={file} download='JuanG_Resume.pdf' >
                <img 
                    className={style.download} 
                    src="https://www.stouffvilletoyota.com/wp-content/uploads/2019/08/download-logo-png-image-77292.png"/>
                </a>
            </div>
        </div>
    )
}

export default Contact
