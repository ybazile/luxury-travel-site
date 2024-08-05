// src/components/MainBanner.jsx
import React from 'react'; // Importing React
import Slider from 'react-slick'; // Importing the Slider component from react-slick for the carousel functionality
import 'slick-carousel/slick/slick.css'; // Importing styles for the slider
import 'slick-carousel/slick/slick-theme.css'; // Importing theme styles for the slider

// Array of banner image URLs
const bannerImages = [
  "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&w=1200", // Image 1
  "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1200", // Image 2
  "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1200"  // Image 3
];

// Functional component for the main banner
const MainBanner = () => {
  // Settings for the slider
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed between slides
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll on each action
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000 // Speed of autoplay in milliseconds
  };

  return (
    <div className="relative h-96 md:h-[500px]"> {/* Container for the banner, responsive height */}
      <Slider {...settings} className="h-full"> {/* Slider component with the specified settings */}
        {bannerImages.map((image, index) => ( // Loop through bannerImages to create each slide
          <div key={index} className="relative h-96 md:h-[500px]"> {/* Individual slide container */}
            <img src={image} alt={`Banner ${index + 1}`} className="w-full h-full object-cover"/> {/* Image for the slide */}
            <div className="absolute inset-0 bg-earth-dark opacity-50"></div> {/* Overlay for darkening the image */}
            <div className="absolute inset-0 flex items-center justify-center text-earth-light p-4"> {/* Centered content container */}
              <h1 className="text-2xl md:text-4xl font-bold text-center"> {/* Title with responsive font size */}
                Discover Luxury Destinations
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainBanner; // Exporting the MainBanner component for use in other parts of the application
