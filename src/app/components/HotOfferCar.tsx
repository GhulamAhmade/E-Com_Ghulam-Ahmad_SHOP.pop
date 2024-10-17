import Image from 'next/image';
import React from 'react';
import { IoStarOutline, IoStarSharp } from 'react-icons/io5';

// Define the props type for ProductCard
interface PropsType {
  img: string;     // Image source
  title: string;   // Product title
  desc: string;    // Product description
  rating: number;  // Product rating (1 to 5)
  price: number;   // Product price
}

// Functional component to render a product card
export const ProductCard: React.FC<PropsType> = ({ img, title, desc, rating, price }) => {
  
  // Function to generate star ratings based on the rating number
  const generateRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <IoStarSharp key={i} className='text-[#FF9529]' /> : <IoStarOutline key={i} className='text-[#FF9529]' />);
    }
    return <div className='flex gap-1 text-[20px]'>{stars}</div>;
  };

  return (
    <div className='transition-transform transform duration-200 ease-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1 px-2 border border-gray-200 rounded-xl max-w-[400px] shadow-md'>
      {/* Product Image */}
      <div className='mt-2'>
        <Image className='w-full h-auto' src={img} width={200} height={300} alt={title} />
      </div>
      <div className='space-y-2 py-2'>
        {/* Product Title */}
        <h2 className='text-accent font-medium uppercase'>{title}</h2>
        {/* Product Description */}
        <p className='text-gray-500 max-w-[150px]'>{desc}</p>
        {/* Generated Rating */}
        <div>{generateRating(rating)}</div> 

        {/* Price and Add to Cart Button */}
        <div className='flex justify-between items-center space-x-2'>
          <div className='flex flex-col text-left sm:flex-row sm:items-center sm:space-x-2'>
            {/* Display current price */}
            <span className='font-bold text-lg'>${price.toFixed(2)}</span>
            {/* Display original price with a strikethrough */}
            <del className='text-gray-400 text-sm'>${(price + 100).toFixed(2)}</del>
          </div>
          {/* Button to add the product to the cart */}
          <button className='bg-black text-white rounded-md px-3 py-1 text-xs sm:text-sm hover:bg-gray-700 transition duration-300 w-full sm:w-auto'>
            {/* Show "Add" on small screens and "Add to Cart" on larger screens */}
            <span className="block sm:hidden">Add</span> {/* Visible on mobile only */}
            <span className="hidden sm:block">Add to Cart</span> {/* Visible on larger screens */}
          </button>
        </div>
      </div>
    </div>
  );
};
