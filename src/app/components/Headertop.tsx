import Link from 'next/link';
import React from 'react';

const Headertop = () => {
  return (
    <div className='border-b border-black bg-black'> {/* Top header container with borders and background color */} 
      <div className='container py-2'> {/* Container for padding */}
        <div className='flex justify-center items-center'> {/* Flexbox for centering the content */}
          {/* Shipping offer text centered */}
          <div className='text-gray-100 text-[12px] sm:text-[14px] font-semibold text-center'> {/* Responsive text styling */}
            Sign up and get 25% off your first order. 
            <Link href="/" className='text-gray-300 underline'> Sign Up</Link> {/* Bold offer statement */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headertop;
