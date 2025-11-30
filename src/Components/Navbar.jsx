import React, { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi"; // Import HiX for the close icon

export default function Navbar() {
    // 1. State to manage the visibility of the mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Navigation links data
    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Features", href: "#features" },
        { name: "How it Works", href: "#howitworks" },
        { name: "Testimonials", href: "#testimonials" },
        // Add CTA/Pricing if you have them
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Reusable Nav Link List component for both desktop and mobile
    const NavLinkList = ({ isMobile = false }) => (
        <ul className={`flex ${isMobile ? 'flex-col space-y-4' : 'items-center gap-5'}`}>
            {navLinks.map((link) => (
                <li 
                    key={link.name} 
                    className="hover:text-blue-700 transition duration-150"
                >
                    <a 
                        href={link.href}
                        // Close menu on mobile click
                        onClick={isMobile ? toggleMenu : undefined} 
                        className={isMobile ? 'text-xl font-medium' : 'text-sm lg:text-base font-normal'}
                    >
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );


    return(
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Logo */}
                    <div>
                        <a href="#home" className="text-xl lg:text-3xl font-bold">
                            Study<span className="text-indigo-600">Hub</span>
                        </a>
                    </div>

                    {/* Desktop Navigation Links (Hidden on Mobile) */}
                    <nav className="hidden lg:block text-gray-600">
                        <NavLinkList />
                    </nav>
                    
                    {/* Desktop Auth Buttons (Hidden on Mobile) */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button className="border border-gray-300 py-2 px-4 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 transition duration-150">
                            Login
                        </button>
                        <a href="#register" className="text-white bg-indigo-600 border border-indigo-600 py-2 px-4 rounded-lg text-base font-bold cursor-pointer hover:bg-indigo-700 transition duration-150"
                        >
                            Register
                        </a>
                    </div>

                    {/* Mobile Menu Icon (Hamburger/Close) */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-3xl text-gray-800 p-2 focus:outline-none">
                            {isOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Dropdown (Conditionally Rendered) */}
            {isOpen && (
                <div className="lg:hidden absolute inset-x-0 top-20 bg-white shadow-xl py-6 px-4 sm:px-6 z-40 border-t border-gray-200">
                    
                    {/* Mobile Navigation Links */}
                    <nav className="text-gray-700 mb-6">
                        <NavLinkList isMobile={true} />
                    </nav>

                    {/* Mobile Auth Buttons */}
                    <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                        <button className="w-full border border-gray-300 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 transition duration-150">
                            Login
                        </button>
                        <a 
                            href="#register"
                            onClick={toggleMenu} // Close after clicking Register
                            className="w-full text-center text-white bg-indigo-600 border border-indigo-600 py-2 rounded-lg text-base font-bold cursor-pointer hover:bg-indigo-700 transition duration-150"
                        >
                            Register
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}