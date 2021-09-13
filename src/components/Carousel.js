import React, { useEffect } from 'react'
import style from '../styles/carousel.module.css'
import colorFill from '../images/Colorfill.PNG'
import eCommerce from '../images/E-Commerse.PNG'
import yhm from '../images/YHM.PNG'


const Carousel = () => {
    
    let track, slides, slideWidth, dotsNav, dots;

    //Wait for page to load before assigning
    useEffect(() => {
        //Slides
        track = document.querySelector("."+ style.track);
        slides = Array.from(track.children);
        
        //Dot Navigator
        dotsNav = document.querySelector('.'+ style.nav);
        dots = Array.from(dotsNav.children);

        //Assigns style base on current width
        slideWidth = slides[0].getBoundingClientRect().width;
        slides.forEach((slide, i) =>{
            slide.style.left = slideWidth * i + 'px';
        })
        
    }, [])

    //Updates which dot is currently selected
    function updateDots(currentDot, targetDot){
        currentDot.classList.remove(style.currentIndicator)
        targetDot.classList.add(style.currentIndicator)
    }

    //Button functions
    function slideMovement(direction, targetSlide){
        const currentSlide = track.querySelector('.current')
        const currentDot = dotsNav.querySelector("."+ style.currentIndicator)

        let amountToMove, targetDot;
        
        if(targetSlide){
            amountToMove = targetSlide.style.left;

        }
        //If right button is clicked
        else if(direction){
            targetSlide = currentSlide.nextElementSibling;
            targetDot = currentDot.nextElementSibling;
            if(!targetSlide){
                targetSlide = slides[0];
                targetDot = dots[0];
            }
            amountToMove = targetSlide.style.left;
            updateDots(currentDot, targetDot);
        }
        //If left button is clicked
        else{
            targetSlide = currentSlide.previousElementSibling;
            targetDot = currentDot.previousElementSibling;
            if(!targetSlide){
                targetSlide = slides[slides.length-1];
                targetDot = dots[dots.length-1];
            }
            amountToMove = targetSlide.style.left;
            updateDots(currentDot, targetDot);
        }

        track.style.transform = 'translate(-' + amountToMove + ')';
        currentSlide.classList.remove('current');
        targetSlide.classList.add('current');

        
    }

    //For the circle buttons
    function navigator(e){
        const targetDot = e.target.closest('button');
        
        //Only if you click on a dot
        if(targetDot){
            const currentDot = dotsNav.querySelector("."+ style.currentIndicator)
            const targetIndex = dots.findIndex(dot => dot === targetDot)
            const targetSlide = slides[targetIndex];

            slideMovement(null, targetSlide);
            updateDots(currentDot, targetDot);
        }
    }    


    return (
        <div className={style.carousel}>
            <button 
                className={style.carouselButton + ' ' + style.left}
                onClick={e => {slideMovement(false, false)}}
            >Left</button>
            <button 
                className={style.carouselButton + ' ' + style.right}
                onClick={e => {slideMovement(true, false)}}
            >Right</button>
            
            <div className={style.trackContainer} >
                <ul className={style.track} >
                    <li className={style.slide} class="current">
                        <img src={yhm}/>
                        <h1>Est sunt occaecat cillum nulla veniam proident.</h1>
                        <p> Nulla sit aliquip consectetur eu ullamco eiusmod proident culpa exercitation magna amet. Tempor laboris cillum mollit ipsum laborum ipsum irure Lorem Lorem Lorem amet exercitation aliqua nostrud. Proident in fugiat sunt aute dolore qui ullamco. In enim voluptate excepteur laborum ea. Dolor dolor fugiat deserunt velit occaecat nulla pariatur deserunt dolor sit sit commodo est eu. Do velit cupidatat et voluptate qui cupidatat consectetur incididunt duis id amet cillum nostrud. </p>
                    </li>
                    <li className={style.slide}>
                        <img src={colorFill} />
                        <h1>Est sunt occaecat cillum nulla veniam proident.</h1>
                        <p> Nulla sit aliquip consectetur eu ullamco eiusmod proident culpa exercitation magna amet. Tempor laboris cillum mollit ipsum laborum ipsum irure Lorem Lorem Lorem amet exercitation aliqua nostrud. Proident in fugiat sunt aute dolore qui ullamco. In enim voluptate excepteur laborum ea. Dolor dolor fugiat deserunt velit occaecat nulla pariatur deserunt dolor sit sit commodo est eu. Do velit cupidatat et voluptate qui cupidatat consectetur incididunt duis id amet cillum nostrud. </p>
                    </li>
                    <li className={style.slide}>
                        <img src={eCommerce} />
                        <h1>Est sunt occaecat cillum nulla veniam proident.</h1>
                        <p> Nulla sit aliquip consectetur eu ullamco eiusmod proident culpa exercitation magna amet. Tempor laboris cillum mollit ipsum laborum ipsum irure Lorem Lorem Lorem amet exercitation aliqua nostrud. Proident in fugiat sunt aute dolore qui ullamco. In enim voluptate excepteur laborum ea. Dolor dolor fugiat deserunt velit occaecat nulla pariatur deserunt dolor sit sit commodo est eu. Do velit cupidatat et voluptate qui cupidatat consectetur incididunt duis id amet cillum nostrud. </p>
                    </li>
                </ul>
            </div>

            <div 
                className={style.nav}
                onClick={e => {navigator(e)}}
            >
                <button className={style.indicator+" "+style.currentIndicator} />
                <button className={style.indicator}/>
                <button className={style.indicator}/>
            </div>
        </div>
    )
}

export default Carousel
