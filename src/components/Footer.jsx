// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-earth-dark text-earth-light py-6">
      <div className="container mx-auto px-4 text-center">
        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
        <p className="mb-2">Email: support@wanderlust.com</p>
        <p className="mb-2">Phone: +1 (954) 567-890</p>
        <div className="mt-4">
          <a href="#" className="mx-2 hover:text-earth-accent">Home</a>
          <a href="#" className="mx-2 hover:text-earth-accent">Destinations</a>
          <a href="#" className="mx-2 hover:text-earth-accent">Trips</a>
          <a href="#" className="mx-2 hover:text-earth-accent">Offers</a>
          <a href="#" className="mx-2 hover:text-earth-accent">Contact</a>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-bold mb-2">Payments Accepted</h4>
          <div className="flex justify-center space-x-4">
            <img src="/images/icons8-visa-96.png" alt="Visa" className="h-8" />
            <img src="/images/icons8-mastercard-96.png" alt="MasterCard" className="h-8" />
            <img src="images/icons8-american-express-96.png" alt="American Express" className="h-8" />
            <img src="images/icons8-discover-card-96.png" alt="Discover" className="h-8" />
            <img src="images/icons8-apple-pay-96.png" alt="Applt Pay" className="h-8" />
            <img src="images/icons8-google-pay-96.png" alt="Google Pay" className="h-8" />
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-earth-accent">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-earth-accent">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-earth-accent">
              <FaInstagram />
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm">&copy; {new Date().getFullYear()} WANDERLUST. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
