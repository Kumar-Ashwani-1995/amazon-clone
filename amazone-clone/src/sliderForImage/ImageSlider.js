import React, { useEffect, useState } from 'react'
import './ImageSlider.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
//https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif
const ImageSlider = ({slides}) => {
const [current , setCurrent] = useState(0);
const [bool , setBool] = useState(false);
const length = slides.length
const nextSlide = ()=>{
    setCurrent(current===length - 1 ? 0:current+1)
}

const prevSlide = ()=>{
    setCurrent(current=== 0 ? length-1:current-1)
}
useEffect(() => {
    let isSubscribed = true;
        setTimeout(()=>{
            
            if (isSubscribed) {
                nextSlide();
                setBool(!bool)
            }
            },6000)

    return () => isSubscribed = false
},[bool]);


if(!Array.isArray(slides) || slides.length<=0){
    return null
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
