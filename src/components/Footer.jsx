// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaCcApplePay, FaGooglePay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-earth-dark text-earth-light py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Contact Information */}
        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
        <p className="mb-2">Email: support@wanderlust.com</p>
        <p className="mb-2">Phone: +1 (954) 567-890</p>
        
        {/* Navigation Links */}
        <div className="mt-4">
          <a href="#" className="mx-2 hover:text-earth-accent">Home</a>
          <a href="#" className="mx-2 hover:text-earth-accent">Destinations</a>
          <a href="#" className="mx-2 hover:text-earth-accent">Trips</a>
          <a href="#" className="mx-2 hover:text-earth-accent">Offers</a>
          <a href="#" className="mx-2 hover:text-earth-accent">Contact</a>
        </div>

        {/* Payment Methods */}
        <div className="mt-6">
          <h4 className="text-lg font-bold mb-2">Payments Accepted</h4>
          <div className="flex justify-center space-x-4 text-3xl">
            <FaCcVisa aria-label="Visa" />
            <FaCcMastercard aria-label="MasterCard" />
            <FaCcAmex aria-label="American Express" />
            <FaCcDiscover aria-label="Discover" />
            <FaCcApplePay aria-label="Apple Pay" />
            <FaGooglePay aria-label="Google Pay" />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6">
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <div className="flex justify-center space-x-4 text-3xl">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-earth-accent">
              <FaFacebook aria-label="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-earth-accent">
              <FaTwitter aria-label="Twitter" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-earth-accent">
              <FaInstagram aria-label="Instagram" />
            </a>
          </div>
        </div>

        {/* Copyright Information */}
        <p className="mt-6 text-sm">&copy; {new Date().getFullYear()} WANDERLUST. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
