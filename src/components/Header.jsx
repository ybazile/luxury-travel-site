// src/components/Header.jsx
import React, { useState } from 'react'; // Importing React and useState for managing state

// Functional component for the header section
const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track whether the mobile menu is open or closed

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the value of isOpen
  };

  return (
    // Header element with dark background and light text
    <header className="bg-earth-dark text-earth-light py-3">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between"> {/* Flex container for layout */}
        <div className="flex items-center justify-center w-full md:w-auto"> {/* Logo container */}
          <img src="/images/logo.png" alt="Logo" className="h-20 w-20 object-contain" /> {/* Logo image */}
        </div>
        <div className="md:hidden"> {/* Only visible on mobile screens */}
          <button onClick={toggleMenu} className="focus:outline-none"> {/* Button to toggle menu */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Hamburger icon */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <nav className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'} md:items-center md:justify-between`}> {/* Navigation links */}
          <a href="#" className="my-2 md:my-0 mx-2 hover:text-earth-accent">Home</a> {/* Home link */}
          <a href="#" className="my-2 md:my-0 mx-2 hover:text-earth-accent">Destinations</a> {/* Destinations link */}
          <a href="#" className="my-2 md:my-0 mx-2 hover:text-earth-accent">Trips</a> {/* Trips link */}
          <a href="#" className="my-2 md:my-0 mx-2 hover:text-earth-accent">Offers</a> {/* Offers link */}
          <a href="#" className="my-2 md:my-0 mx-2 hover:text-earth-accent">Contact</a> {/* Contact link */}
        </nav>
      </div>
    </header>
  );
};

export default Header; // Exporting the Header component for use in other parts of the application
