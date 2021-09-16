import React, { useState } from 'react'
import './ImageSlider.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const ImageSlider = ({slides}) => {
const [current , setCurrent] = useState(0);
const length = slides.length
if(!Array.isArray(slides) || slides.length<=0){
    return null
}
const nextSlide = ()=>{
    setCurrent(current===length - 1 ? 0:current+1)
}
const prevSlide = ()=>{
    setCurrent(current=== 0 ? length-1:current-1)
}

    return (
        <section className="slider">
            <ChevronLeftIcon className="slider__left" onClick={prevSlide}></ChevronLeftIcon>
            {slides.map((slide,index)=>{
                return(
                    <div  className={index === current ? 'slide active' : 'slide'}
            key={index}>{index === current && (              
                        <img className="home__image" src={slide.image} alt="Amazon adv"></img>
                    )}
                    </div>
                    
                )
            })}
            <ChevronRightIcon className="slider__right" onClick={nextSlide} ></ChevronRightIcon>
        </section>
    )
}

export default ImageSlider
