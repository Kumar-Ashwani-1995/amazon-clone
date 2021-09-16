import React, { useState } from 'react'
import './ImageSlider.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
            <ArrowBackIosIcon className="slider__left" onClick={prevSlide}/>
            {slides.map((slide,index)=>{
                return(
                    <div  className={index === current ? 'slide active' : 'slide'}
            key={index}>{index === current && (              
                        <img className="image" src={slide.image} alt="Amazon adv"></img>
                    )}
                    </div>
                    
                )
            })}
            <ArrowForwardIosIcon className="slider__right" onClick={nextSlide} />
        </section>
    )
}

export default ImageSlider
