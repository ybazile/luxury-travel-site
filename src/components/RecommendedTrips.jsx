// src/components/RecommendedTrips.jsx

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const trips = [
  {
    name: "Luxury Safari",
    image: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Experience the wild in luxury.",
    rating: "9.2",
    reviewCount: 1002,
    costPerNight: 181,
  },
  {
    name: "Mediterranean Cruise",
    image: "https://images.pexels.com/photos/913112/pexels-photo-913112.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Sail through beautiful seas.",
    rating: "8.8",
    reviewCount: 850,
    costPerNight: 200,
  },
  {
    name: "Japanese Onsen Retreat",
    image: "https://images.pexels.com/photos/208321/pexels-photo-208321.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Tranquility, nature, wellness.",
    rating: "9.5",
    reviewCount: 1200,
    costPerNight: 230,
  },
  {
    name: "French Riviera Yacht Cruise",
    image: "https://images.pexels.com/photos/5074833/pexels-photo-5074833.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Sun, sea, and glamour.",
    rating: "9.0",
    reviewCount: 600,
    costPerNight: 250,
  },
  {
    name: "Monaco Grand Prix Experience",
    image: "https://images.pexels.com/photos/15350765/pexels-photo-15350765/free-photo-of-charles-leclercs-ferrari-race-car-in-the-pinces-palace-cars-collection-in-monaco.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Adrenaline-fueled luxury.",
    rating: "9.4",
    reviewCount: 750,
    costPerNight: 300,
  },
  {
    name: "Aspen Ski Chalet",
    image: "https://images.pexels.com/photos/7107529/pexels-photo-7107529.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Winter wonderland luxury.",
    rating: "9.1",
    reviewCount: 900,
    costPerNight: 275,
  },
];

const RecommendedTrips = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const calculateTotal = (costPerNight) => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const totalNights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      return (costPerNight * totalNights).toLocaleString();
    }
    return null;
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Recommended Trips</h2>
          <div className="flex items-center space-x-2">
            <div className="flex items-center border rounded-lg p-2">
              <FaCalendarAlt className="text-earth-dark mr-2" />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Start Date"
                className="w-full p-1 focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <FaCalendarAlt className="text-earth-dark mr-2" />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="End Date"
                className="w-full p-1 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <div key={index} className="bg-gray-100 shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src={trip.image} alt={trip.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{trip.name}</h3>
                <p className="text-gray-700">{trip.description}</p>
                <div className="flex items-center mt-4">
                  <div className="bg-earth-accent text-white rounded-full px-2 py-1 text-sm mr-2">{trip.rating}</div>
                  <p className="text-sm text-gray-600">Wonderful ({trip.reviewCount} reviews)</p>
                </div>
                <p className="text-lg font-bold mt-2">
                  {trip.costPerNight.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} per night
                </p>
                {calculateTotal(trip.costPerNight) !== null && (
                  <>
                    <p className="text-lg font-bold">
                      {`$${calculateTotal(trip.costPerNight)} total`}
                    </p>
                    <p className="text-sm text-gray-500">includes taxes & fees</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedTrips;
