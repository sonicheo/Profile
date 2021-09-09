import React from 'react'
import style from '../styles/aboutMe.module.css'
import juanImg from '../images/JuanG.png'

const AboutMe = () => {

    function coordinate(e){
        var yCoordinate = window.pageYOffset;
        console.log(yCoordinate)
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
                Irure veniam deserunt velit ullamco reprehenderit labore amet deserunt incididunt qui. Qui consequat aliqua est duis ea ipsum sunt est ipsum. Deserunt aliquip aute aliqua ipsum reprehenderit proident fugiat nisi incididunt adipisicing ad eiusmod quis. Cillum amet proident voluptate qui magna velit tempor anim. Commodo sint pariatur dolore ipsum.
            </h1>
        </div>
    )
}

export default AboutMe
