import React from 'react'; // Importing React
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importing icons from react-icons

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4"> {/* Modern dark background and reduced padding */}
            <div className="container mx-auto flex flex-col items-center"> {/* Centering content using flexbox */}
                
                {/* Social Media Links */}
                <div className="flex justify-center space-x-4 mb-4"> {/* Icons centered and smaller */}
                    {/* LinkedIn Link */}
                    <a 
                        href="https://www.linkedin.com/in/ghulam-ahmad-2484452b7?"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-blue-400 transition duration-300" 
                    >
                        <FaLinkedin size={22} /> {/* Smaller LinkedIn Icon */}
                    </a>

                    {/* Instagram Link */}
                    <a 
                        href="https://www.instagram.com/ahmad__chachar/profilecard/?igsh=aGdlcWJwcmZpamVt"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-pink-400 transition duration-300" 
                    >
                        <FaInstagram size={22} /> {/* Smaller Instagram Icon */}
                    </a>

                    {/* WhatsApp Link */}
                    <a 
                        href="https://wa.me/+92 330 8681055"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-green-400 transition duration-300" 
                    >
                        <FaWhatsapp size={22} /> {/* Smaller WhatsApp Icon */}
                    </a>
                </div>

                {/* Subtle Divider */}
                <div className="w-full border-t border-gray-700 mb-4"></div> {/* Divider for cleaner look */}
                
                {/* Copyright Section */}
                <p className="text-xs text-center text-gray-400">&copy; {new Date().getFullYear()} Ghulam Ahmad ♥ SHOP.pop .All rights reserved.</p> {/* Centered and more modern copyright */}
            </div>
        </footer>
    );
};

export default Footer; // Exporting the Footer component
