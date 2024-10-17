'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';  // Assuming you're using react-slick
import "slick-carousel/slick/slick.css";  // Import slick styles
import "slick-carousel/slick/slick-theme.css";

// Functional component to display customer testimonials
export const Testimonial = () => {
    // Array of testimonial data
    const testimonialsData = [
        {
            name: "Ahmed Khan",
            role: "Pakistani Customer",
            quote: "Shopping here has been a delightful experience! Great quality and swift service.",
        },
        {
            name: "Emily Johnson",
            role: "American Buyer",
            quote: "Absolutely love the variety and the easy checkout process. I'll shop here again for sure!",
        },
        {
            name: "Selim Yilmaz",
            role: "Turkish Shopper",
            quote: "The products are amazing, and the customer service is unbeatable. Highly recommend!",
        },
    ];

    // Slider settings
    const settings = {
        dots: true,             // Show dots at the bottom for navigation
        infinite: true,         // Infinite loop
        slidesToShow: 1,        // Show one slide at a time
        slidesToScroll: 1,      // Scroll one slide at a time
        autoplay: true,         // Automatically transition between slides
        pauseOnHover: false,    // Don't stop autoplay on hover
        autoplaySpeed: 3000,    // Delay before auto-slide (3 seconds)
    };

    return (
        <div className='bg-[#fdf2e9] py-16 mt-10'>
            <div className='container mx-auto px-4'> 
                <h2 className='text-center text-4xl font-bold text-gray-700 mb-12 font-serif'>
                    What Our <span className='text-red-500 font-mono'>Customers</span> Say
                </h2>

                {/* Slider for testimonials */}
                <Slider {...settings}>  
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="w-full flex justify-center items-center">
                            <div 
                                className='bg-white border border-gray-200 rounded-xl p-8 shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-102 hover:shadow-2xl duration-300 ease-in-out max-w-lg mx-auto'
                            >
                                {/* Name and Role */}
                                <div className='text-center mb-6'>
                                    <h3 className='font-semibold text-2xl text-red-600 transition-colors duration-300'>
                                        {testimonial.name}
                                    </h3>
                                    <p className='text-pink-500 text-lg'>{testimonial.role}</p>
                                </div>
                                {/* Testimonial Quote */}
                                <p className='text-gray-700 italic text-lg text-center transition-opacity duration-300 hover:opacity-80'>
                                    "{testimonial.quote}"
                                </p>
                            </div>
                        </div>  
                    ))}
                </Slider>
            </div>
        </div>
    );
};
