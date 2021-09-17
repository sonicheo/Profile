import React from 'react'
import style from '../styles/aboutMe.module.css'
import juanImg from '../images/JuanG.png'

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
                 Hi, my name is Juan and I'm a full stack developer. In addition to web development I like to make processes more efficient through scripts. I'm constantly looking to better myself as a developer and am always open to hearing about new opportunities. Please feel free to contact me directly at juan.a.gomez.villanueva@gmail.com
            </h1>
        </div>
    )
}

export default AboutMe
