'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegUserCircle, FaSearch } from 'react-icons/fa'; // Importing necessary icons
import { IoCartOutline } from 'react-icons/io5';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'; // Menu icon for mobile
import { AiOutlineClose } from 'react-icons/ai'; // Close icon for mobile menu

export const HeaderMain = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  return (
    <div className='border-b border-gray-300 py-3'>
      <div className='container flex justify-between items-center mx-auto px-4'>

        {/* Menu icon for mobile */}
        <div className='sm:hidden'>
          <HiOutlineMenuAlt3 
            size={24} 
            className="text-black cursor-pointer" 
            onClick={() => setMobileMenuOpen(true)} // Open mobile menu
          />
        </div>

        {/* Logo section */}
        <div className='font-bold text-xl sm:text-2xl text-black'>
          SHOP.<span className="text-red-600">pop</span>
        </div>

        {/* Navigation Links (responsive on medium screens) */}
        <div className='hidden md:flex flex-grow justify-center gap-4 lg:gap-6 font-medium text-black'>
          <Link className='navbar__link relative' href="/">Shop</Link>
          <Link className='navbar__link relative' href="/">On Sale</Link>
          <Link className='navbar__link relative' href="/">New Arrivals</Link>
          <Link className='navbar__link relative' href="/">Brands</Link>
        </div>

        {/* Search bar and icons */}
        <div className='flex items-center gap-4 lg:gap-6'>
          {/* Search bar (hidden on mobile) */}
          <div className='hidden sm:flex w-full max-w-[200px] md:max-w-[250px] lg:max-w-[350px] relative'>
            <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' size={18} />
            <input 
              className='border-gray-300 bg-gray-100 p-2 pl-12 pr-4 rounded-full w-full' 
              type="text" 
              placeholder='Search for products...'
            />
          </div>

          {/* User and cart icons */}
          <div className='flex gap-2 lg:gap-5 text-black items-center'>
            <div className='relative'>
              <IoCartOutline size={25} /> {/* Cart icon */}
              <span className='bg-red-600 rounded-full absolute top-[-4px] right-[-4px] w-[12px] h-[12px] text-[8px] text-white grid place-items-center'>
                0
              </span>
            </div>
            <FaRegUserCircle size={23} /> {/* User icon */}
          </div>
        </div>
      </div>

      {/* Mobile search bar below logo on small screens */}
      <div className='flex sm:hidden px-4 mt-3'>
        <div className='flex w-full max-w-[350px] relative'>
          <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500' size={18} />
          <input 
            className='border-gray-300 bg-gray-100 p-2 pl-12 pr-4 rounded-full w-full' 
            type="text" 
            placeholder='Search for products...'
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 left-0 bg-white z-50 w-2/3 max-w-sm p-4 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out`}>
        {/* Close button */}
        <div className='flex justify-between '>
          <div className='font-bold text-xl'>
            SHOP.<span className="text-red-600">pop</span>
          </div>
          <AiOutlineClose 
            size={24} 
            className="text-black cursor-pointer" 
            onClick={() => setMobileMenuOpen(false)} // Close mobile menu
          />
        </div>

        {/* Mobile Navigation Links */}
        <nav className='flex flex-col mt-8 space-y-4'>
          <Link href="/" className='navbar__link relative'>Shop</Link>
          <Link href="/" className='navbar__link relative'>On Sale</Link>
          <Link href="/" className='navbar__link relative'>New Arrivals</Link>
          <Link href="/" className='navbar__link relative'>Brands</Link>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setMobileMenuOpen(false)} />}
    </div>
  );
};
