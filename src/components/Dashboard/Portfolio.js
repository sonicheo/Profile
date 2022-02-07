import React from 'react'
import style from '../../styles/portfolio.module.css'  
import Carousel from './Carousel';

const Portfolio = () => {

    function coordinate(e){
        var yCoordinate = window.pageYOffset;
    }

    window.addEventListener('scroll', (e) =>{
        const target = document.querySelectorAll('.scrollPortfolio');
        var scrolled = window.pageYOffset;
        if(scrolled >= 1296 && scrolled < 1944){
            for(let i=0; i < target.length; i++){
                var rate = (scrolled - 1296 ) * target[i].dataset.rate;
    
                target[i].style.transform = 'translate3d('+rate+'px, 0px, 0px)';
            }
        }
        else{
            for(let i=0; i < target.length; i++){
                target[i].style.transform = 'translate3d(0px, 0px, 0px)';
            }
        }
    })


    return (
        <div onClick={coordinate} fluid className={style.container} id="portfolio">
            <div>
                <Carousel/>
            </div>
        </div>
    )
}

export default Portfolio
