// src/components/SpecialOffers.jsx

// Importing React
import React from 'react';

// Array of special offers with their details
const offers = [
  {
    name: "Winter Wonderland",
    image: "https://images.pexels.com/photos/3810971/pexels-photo-3810971.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Save 20% on winter trips."
  },
  {
    name: "Summer Getaway",
    image: "https://images.pexels.com/photos/6040266/pexels-photo-6040266.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Enjoy exclusive summer deals."
  },
  {
    name: "Customizable Package Discounts",
    image: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Savings on bundled flights, hotels, and activities."
  },
  // Add more offers as needed
];

// Main component for displaying special offers
const SpecialOffers = () => {
  return (
    // Section for special offers
    <section className="py-12 bg-earth-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-earth-dark">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src={offer.image} alt={offer.name} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold text-earth-dark">{offer.name}</h3>
                <p className="text-earth-accent">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Exporting the SpecialOffers component
export default SpecialOffers;
