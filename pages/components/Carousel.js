import { useEffect, useState } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Carousel = ()  =>{
    const couraselData = require('../../public/carouselData.json')
    const [current, setCurrent] = useState(0)
    const length = couraselData.length

    
    //Constrols slides through arrows
    const nextSlide = () =>{
        setCurrent(current === length-1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length-1 : current - 1)
    }

    //This is the interval of changing slides
    useEffect(() => {
        var interval;
        interval = setInterval(function(){setCurrent(current === length-1 ? 0 : current + 1)}, 5000)
        return () => clearInterval(interval)
    },[current])


    return(
        <div className ="mt-15">
        <div className="mt-5 relative overflow-hidden text-center h-screen min-h-full">
            <FaArrowAltCircleLeft 
                className="text-5xl absolute z-10 top-1/4 left-0" 
                onClick={prevSlide}
            />
            <FaArrowAltCircleRight 
                className="text-5xl absolute z-10 top-1/4 right-0"
                onClick={nextSlide}
            />
            {
                couraselData.map((data, index) => {
                    return(
                        <div 
                        key = {index}
                        className={index != current ? 
                        "absolute transition-all ease-in-out duration-1000 transform translate-x-full" : 
                        "absolute transition-all ease-in-out duration-1000 transform translate-x-0"} >
                                    <img 
                                        src={data.Image}
                                    />
                                <h1 className="text-xl font-bold" >{data.Title}</h1>
                                <p className="">{data.Body}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Carousel;