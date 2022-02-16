import React from 'react'
import style from '../../styles/aboutMe.module.css'
import juanImg from '../../images/JuanG.png'

const AboutMe = () => {

    function coordinate(e){
        var yCoordinate = window.pageYOffset;
    }

    window.addEventListener('scroll', (e) =>{
        const target = document.querySelectorAll('.scrollAboutMe');
        var scrolled = window.pageYOffset;
        if(scrolled >= 648 && scrolled < 1296){
            for(var i=0; i < target.length; i++){
                var rate = (scrolled - 648 ) * target[i].dataset.rate;
    
                target[i].style.transform = 'translate3d('+rate+'px, 0px, 0px)';
            }
        }
        else{
            for(var i=0; i < target.length; i++){
                target[i].style.transform = 'translate3d(0px, 0px, 0px)';
            }
        }
    })



    return (
        <div onClick={coordinate} className={style.container} id="aboutMe" >
            <img src={juanImg} />
            <h1>
                My coding experience comes from an apprenticeship opportunity that started with a 14-week coding bootcamp(Coding Dojo), where I learned a plethora of different languages and tools including, Python, Java, Javascript, Spring, and React. The second part of the apprenticeship was through Slate Impact where I developed a web platform for a client using React and NodeJS. Through the apprenticeship I gained a deep familiarity with AWS, CI/CD principles and practice, TravisCI, Docker, Postgres, and various APIs.
            </h1>
        </div>
    )
}

export default AboutMe
