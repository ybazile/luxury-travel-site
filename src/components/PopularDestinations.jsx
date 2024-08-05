// src/components/PopularDestinations.jsx

// Importing necessary modules and styles
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PopularDestinations.css'; // Import custom CSS for the slider

// Array of popular destinations with their details
const destinations = [
  {
    name: "Paris, France",
    image: "https://images.pexels.com/photos/4560444/pexels-photo-4560444.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "The City of Light."
  },
  {
    name: "Maldives, Indian Ocean",
    image: "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Tropical island paradise."
  },
  {
    name: "New York City, USA",
    image: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Fast-paced urban jungle."
  },
  {
    name: "Tokyo, Japan",
    image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Futuristic city vibes."
  },
  {
    name: "Bali, Indonesia",
    image: "https://images.pexels.com/photos/1477310/pexels-photo-1477310.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Tropical paradise beaches."
  },
  {
    name: "Santorini, Greece",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Caldera island views."
  },
  // Add more destinations as needed
];

// Main component for displaying popular destinations
const PopularDestinations = () => {
  // Slider settings for responsiveness and autoplay
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite loop sliding
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for tablet and small desktop screens
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
          slidesToScroll: 1, // Scroll 1 slide at a time
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600, // Breakpoint for mobile screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1, // Scroll 1 slide at a time
          initialSlide: 1 // Start with the first slide
        }
      }
    ]
  };

  return (
    // Section for popular destinations
    <section className="py-12 bg-earth-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-earth-dark">Popular Destinations</h2>
        <Slider {...settings}>
          {destinations.map((destination, index) => (
            <div key={index} className="carousel-item">
              <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative h-48">
                  <img src={destination.image} alt={destination.name} className="w-full h-full object-cover"/>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-earth-dark">{destination.name}</h3>
                  <p className="text-earth-accent">{destination.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularDestinations;
