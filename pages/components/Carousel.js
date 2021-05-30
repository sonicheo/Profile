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
        <div className="mt-5 relative overflow-hidden text-center" style={{height: "460px"}} >
            <FaArrowAltCircleLeft 
                className="text-5xl absolute z-10 top-2/4 left-0" 
                onClick={prevSlide}
            />
            <FaArrowAltCircleRight 
                className="text-5xl absolute z-10 top-2/4 right-0"
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
                                        className="w-full"
                                    />
                                <h1>{data.Title}</h1>
                                <p>{data.Body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Carousel;