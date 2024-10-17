"use client";

import React from 'react';
import Slider from 'react-slick';  // Importing the Slider component
import { Slide } from './Slide';  // Importing the custom Slide component

export const Hero = () => {
    // Slider settings configuration
    const settings = {
        dots: true,  // Show navigation dots
        infinite: true,  // Loop through slides infinitely
        slidesToShow: 1,  // Number of slides visible at a time
        slidesToScroll: 1,  // Number of slides to scroll per click
        autoplay: true,  // Enable automatic slide transition
        pauseOnHover: false,  // Do not pause autoplay on hover
    };

    // Array of slide data (images for the banner)
    const slideData = [
        { id: 0, img: "/banner1.jpeg" },  // Slide 1
        { id: 1, img: "/banner2.jpeg" },  // Slide 2
        { id: 2, img: "/banner3.jpeg" },  // Slide 3
    ];

    return (
        <div className='container pt-6 lg:pt-2 mt-8'>  {/* Hero section container */}
            <Slider {...settings}>  {/* Slider component with the settings */}
                {slideData.map(item => (
                    <div key={item.id} className="w-full flex justify-center items-center">
                    <img 
                        src={item.img} 
                        alt={`Slide ${item.id}`} 
                        className="w-full h-auto object-cover rounded-lg"  // Ensures image covers the container with no cropping
                    />
                </div>  
                ))}
            </Slider>
        </div>
    );
};
