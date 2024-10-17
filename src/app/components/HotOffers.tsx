import React from 'react';
import { ProductCard } from './ProductCards';

// Sample product data for display
const productsData = [
    {
        img: "/image1.png",
        title: "Pant",
        desc: "White Pant",
        rating: 4,
        price: 890.00
    },
    {
        img: "/image2.png",
        title: "Classic Shirt",
        desc: "T-Shirt",
        rating: 5,
        price: 850.00
    },
    {
        img: "/image3.png",
        title: "T-shirt",
        desc: "White Tee",
        rating: 3,
        price: 790.00
    },
    {
        img: "/image5.png",
        title: "T-shirt",
        desc: "Printed Tee",
        rating: 5,
        price: 800.00
    },
    {
        img: "/image7.jpg",
        title: "ZARA Lawn",
        desc: "Lawn Suit",
        rating: 4,
        price: 890.00
    },
    {
        img: "/image5.jpg",
        title: "Polo",
        desc: "Polo Shirt",
        rating: 4,
        price: 890.00
    },
];

export const HotOffers = () => {
    return (
        <div className='container pt-16'>
            {/* Section Title for Hot Offers */}
            <h2 className='flex justify-center font-serif text-4xl pb-6 text-gray-800'>
                <span className='text-2xl text-red-700 font-serif'>HOT</span> OFFER&apos;S  {/* Fixed the apostrophe */}
            </h2>

            {/* Grid Layout for Product Cards */}
            <div className='grid grid-cols-2 place-items-center sm:place-items-start sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                {/* Mapping through productsData to render ProductCard for each product */}
                {productsData.map((item, index) => (
                    <ProductCard
                        key={index} // Unique key for each item
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};
