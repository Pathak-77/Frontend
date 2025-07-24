import React from "react";
import Slider from "react-slick";
import CarouselImage from "./CarouselImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide2 from '../assets/Images/1.jpg'
import slide1 from '../assets/Images/2.jpg'
import slide3 from '../assets/Images/3.jpeg'
import slide4 from '../assets/Images/4.jpg'
import slide5 from '../assets/Images/5.jpg'
import slide6 from '../assets/Images/6.jpg'



const slides = [
  {
            path: slide1,
            alt: "slide1",
            text:"2024- snowleopard conservation awareness",
        },
        {
            path: slide2,
            alt: "slide2",
            text:"2018- Koshi Tappu Wildlife Reserve",
        },
        {
            path: slide3,
            alt: "slide3",
            text:"2016- Koshi Tappu Wildlife Reserve",
        },
        {
            path: slide4,
            alt: "slide4",
            text:"2015- clean tapwater program",
        },
        {
            path: slide5,
            alt: "slide5",
            text:"2012- awareness of HIV-AIDS",
        }, 
        {
            path: slide6,
            alt: "slide6",
            text:"2013- women for forest",
        },
]

const HeroSection = () => {
   const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4400,
    cssEase: "linear"

  };
  return (
    <div className="block overflow-hidden content-center h-[600px] w-full mb-3">
      <Slider {...settings}>
        {slides.map((slide) =>{
          return(
            <div>
              <CarouselImage image={slide.path} alt={slide.path} text={slide.text} />
            </div>
          )
        } 
        )}
        
      </Slider>
    </div>
  );
}

export default HeroSection