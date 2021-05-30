import { useEffect, useState } from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Carousel = ()  =>{
    const couraselData = require('../../public/carouselData.json')
    const [current, setCurrent] = useState(0)
    const length = couraselData.length

    console.log(current)

    const nextSlide = () =>{
        setCurrent(current === length-1 ? 0 : current + 1)
        console.log(current)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length-1 : current - 1)
        console.log(current)
    }

    useEffect(() => {
        var interval;
        interval = setInterval(function(){setCurrent(current === length-1 ? 0 : current + 1)}, 5000)
        return () => clearInterval(interval)
    },[current])

   

    return(
        <div className="mt-5 flex relative justify-center items-center">
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
                        "hidden transition-opacity " : 
                        "transition-opacity"} >
                                    <img 
                                        src={data.Image}
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