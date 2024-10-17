import React from 'react';
import Image from 'next/image';

// Define the props type for the Slide component
interface PropsType {
    img: string;  // Image source for each slide
}

// Functional component to render a slide with an image and a button
export const Slide: React.FC<PropsType> = ({ img }) => {
    return (
        <div className='relative'>  {/* Slide container with relative positioning */}
            {/* Dynamic image with specified width and height */}
            <Image
                className='w-full h-[300px] md:h-auto rounded-xl object-cover md:object-left-bottom'
                src={img}  // Image source
                alt="banner"  // Alt text for accessibility
                width={2000}  // Image width
                height={2000} // Image height
            />
            {/* Button centered at the bottom of the image */}
            <div className='absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-2'>
                <button className="relative px-3 py-1 text-white font-bold border-2 border-white rounded-full overflow-hidden group transition-transform duration-500 ease-in-out group-hover:scale-105">
                    {/* Gradient background animation for button */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#6d4939] via-[#50c050] to-[#a57435] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                    {/* Button text */}
                    <span className="relative z-10 group-hover:text-black text-sm">Shop Now</span>
                </button>
            </div>
        </div>
    );
};
