import React, { useEffect, useState } from 'react'
import style from '../../styles/carousel.module.css'
import colorFill from '../../images/colofill.png'
import eCommerce from '../../images/commerce.png'
import yhm from '../../images/slate.png'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import pictures from '../../images/colofill.png'

const Carousel = () => {
    
    let track, slides, slideWidth, dotsNav, dots;

    //Data for the Carousel 
    const [carouselData, setCarouselData] = useState([
        {
            image: "quote_generator.png",
            title: "Quote Generator",
            description: "Pulls from Fit Quotes API to render random quotes. Allows you to tweet a quote that you like using a Twitter query string.",
            tools: "React, Twitter Query, Fit API",
            link: "/projects/quote_generator"
        },
        {
            image: "infinite_scroll.png",
            title: "Infinite Scroll",
            description: "The goal for this project is to mimic social media scrolling. It uses the Unsplash API to pull the photos and descrptions. Unfortunately, the Unsplash API limits free users to 50 requests per hour.",
            tools: "React, Unsplash API",
            link: "/projects/infinite_scroll"
        },
        {
            image: "pictureInPicture.png",
            title: "Picture In Picture",
            description: "The goal of this project is to mimic screen sharing typically found in conference call apps.",
            tools: "React",
            link: "/projects/in_picture"
        },
        {
            image: "slate.png",
            title: "Your Harmonius Mind",
            description: "My first site in which you can find various information about the goals and researching involving Your Harmonius Mind. ",
            tools: "Docker, React, AWS BeanStalk, SQLite, Strapi, Google/Facbook API",
            link: ""
        }
    ])



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
            <FaArrowLeft
                className={style.carouselButton + ' ' + style.left}
                onClick={e => {slideMovement(false, false)}}
            />
            <FaArrowRight 
                className={style.carouselButton + ' ' + style.right}
                onClick={e => {slideMovement(true, false)}}
            />
            
            <div className={style.trackContainer} >

                <ul className={style.track} >
                {
                    carouselData.map((index, id) =>{
                        console.log(index.image);
                        return(
                            <li id={id} className={id==0 ? 'current' : style.slide} >
                                <div className={style.imageContainer} >
                                    <img  src={require('../../images/' + index.image).default} alt={index.title} />
                                </div>
                                <h1>{index.title}</h1>
                                <p>Description:  {index.description}</p>
                                <p>Tools: {index.tools}</p>
                                <p>
                                    Link: 
                                    <a href={index.link ? index.link : ""}> {index.link ? index.link : "In Progress"} </a>
                                </p>
                                
                            </li>
                        )
                    })
                }
                </ul>
               
            </div>

            <div 
                className={style.nav}
                onClick={e => {navigator(e)}}
            >
                {
                    carouselData.map((index, id) => {
                        return(
                            <button className={id == 0 ? style.indicator+" "+style.currentIndicator: style.indicator} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Carousel
