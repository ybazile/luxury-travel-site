// src/components/Footer.jsx
import React from 'react'; // Importing React library for creating components

// Functional component for the footer section
const Footer = () => {
  return (
    // Footer element with dark background and light text
    <footer className="bg-earth-dark text-earth-light py-6">
      <div className="container mx-auto px-4 text-center"> {/* Centering the content with a maximum width */}
        <h4 className="text-lg font-bold mb-4">Contact Us</h4> {/* Section title for contact information */}
        <p className="mb-2">Email: support@wanderlust.com</p> {/* Email address */}
        <p className="mb-2">Phone: +1 (954) 567-890</p> {/* Phone number */}
        <div className="mt-4"> {/* Container for navigation links */}
          <a href="#" className="mx-2 hover:text-earth-accent">Home</a> {/* Link to Home */}
          <a href="#" className="mx-2 hover:text-earth-accent">Destinations</a> {/* Link to Destinations */}
          <a href="#" className="mx-2 hover:text-earth-accent">Trips</a> {/* Link to Trips */}
          <a href="#" className="mx-2 hover:text-earth-accent">Offers</a> {/* Link to Offers */}
          <a href="#" className="mx-2 hover:text-earth-accent">Contact</a> {/* Link to Contact */}
        </div>
        <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} WANDERLUST. All rights reserved.</p> {/* Copyright notice with current year */}
      </div>
    </footer>
  );
};

export default Footer; // Exporting the Footer component for use in other parts of the application
