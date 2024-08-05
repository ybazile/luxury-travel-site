// src/components/BookingSection.jsx
import React, { useState } from 'react'; // Importing React and useState hook for managing component state
import { FaPlane, FaHotel, FaCar, FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa'; // Importing icons for visual representation

// Functional component for the booking section
const BookingSection = () => {
  // State variable to keep track of the currently active tab (flights, hotels, or cars)
  const [activeTab, setActiveTab] = useState('flights');

  // Function to handle changes in the active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab); // Update the active tab state to the selected tab
  };

  return (
    // Main section for booking options with styling
    <section className="bg-white shadow-md rounded-lg p-2 mx-auto -mt-12 relative z-10 max-w-screen-sm">
      {/* Container for tab buttons to switch between flights, hotels, and cars */}
      <div className="flex justify-center mb-2">
        {/* Button for Flights tab */}
        <button
          className={`px-3 py-1 ${activeTab === 'flights' ? 'bg-earth-dark text-white' : 'bg-earth-light text-earth-dark'} rounded-l-lg`}
          onClick={() => handleTabChange('flights')} // Change to flights tab on click
        >
          Flights
        </button>
        {/* Button for Hotels tab */}
        <button
          className={`px-3 py-1 ${activeTab === 'hotels' ? 'bg-earth-dark text-white' : 'bg-earth-light text-earth-dark'}`}
          onClick={() => handleTabChange('hotels')} // Change to hotels tab on click
        >
          Hotels
        </button>
        {/* Button for Cars tab */}
        <button
          className={`px-3 py-1 ${activeTab === 'cars' ? 'bg-earth-dark text-white' : 'bg-earth-light text-earth-dark'} rounded-r-lg`}
          onClick={() => handleTabChange('cars')} // Change to cars tab on click
        >
          Cars
        </button>
      </div>

      {/* Conditional rendering for the Flights tab when it's active */}
      {activeTab === 'flights' && (
        <div className="space-y-2"> {/* Space between inputs */}
          {/* Input for departure location */}
          <div className="flex items-center border rounded-lg p-2">
            <FaMapMarkerAlt className="text-earth-dark mr-2" /> {/* Icon for location */}
            <input
              type="text"
              placeholder="Leaving from" // Placeholder text for the input field
              className="w-full p-1" // Full width with padding
            />
          </div>
          {/* Input for destination location */}
          <div className="flex items-center border rounded-lg p-2">
            <FaMapMarkerAlt className="text-earth-dark mr-2" /> {/* Icon for location */}
            <input
              type="text"
              placeholder="Going to" // Placeholder text for the input field
              className="w-full p-1" // Full width with padding
            />
          </div>
          {/* Input for travel dates */}
          <div className="flex items-center border rounded-lg p-2">
            <FaCalendarAlt className="text-earth-dark mr-2" /> {/* Icon for calendar */}
            <input
              type="text"
              placeholder="Dates" // Placeholder text for the input field
              className="w-full p-1" // Full width with padding
            />
          </div>
          {/* Input for number of travelers */}
          <div className="flex items-center border rounded-lg p-2">
            <FaUser className="text-earth-dark mr-2" /> {/* Icon for user */}
            <input
              type="text"
              placeholder="Traveler(s)" // Placeholder text for the input field
              className="w-full p-1" // Full width with padding
            />
          </div>
          {/* Button to search for flights */}
          <button className="w-full p-2 bg-earth-dark text-white rounded-lg">
            Search Flights
          </button>
        </div>
      )}

      {/* Conditional rendering for the Hotels tab when it's active */}
      {activeTab === 'hotels' && (
        <div className="space-y-2"> {/* Space between inputs */}
          {/* Input for hotel location */}
          <div className="flex items-center border rounded-lg p-2">
            <FaMapMarkerAlt className="text-earth-dark mr-2" /> {/* Icon for location */}
            <input
              type="text"
              placeholder="Where to?" // Placeholder text for the input field
              className="w-full p-1" // Full width with padding
            />
          </div>
          {/* Input for hotel dates */}
          <div className="flex items-center border rounded-lg p-2">
            <FaCalendarAlt className="text-earth-dark mr-2" /> {/* Icon for calendar */}
            <input
              type="text"
              placeholder="Dates" // Placeholder text for the input field
              className="w-full p-1" // Full width with padding
            />
          </div>
          {/* Input for number of guests */}
          <div className="flex items-center border rounded-lg p-2">
            <FaUser className="text-earth-dark mr-2" /> {/* Icon for user */}
            <input
              type="text"
              placeholder="Guest" // Placeholder text for the input field
              className="w-full p-1" // Full width with padding
            />
          </div>
          {/* Button to search for hotels */}
          <button className="w-full p-2 bg-earth-dark text-white rounded-lg">
            Search Hotels
          </button>
        </div>
      )}

      {/* Conditional rendering for the Cars tab when it's active */}
      {activeTab === 'cars' && (
        <div className="space-y-2"> {/* Space between inputs */}
          {/* Input for car pick-up location */}
          <div className="flex items-center border rounded-lg p-2">
            <FaMapMarkerAlt className="text-earth-dark mr-2" /> {/* Icon for location */}
            <input
              type="text"
              placeholder="Pick-up" // Placeholder text for the input field
              className="w-full p-1" // Full width with padding
            />
          </div>
          {/* Input for car drop-off location */}
          <div className="flex items-center border rounded-lg p-2">
            <FaMapMarkerAlt className="text-earth-dark mr-2" /> {/* Icon for location */}
            <input
              type="text"
              placeholder="Drop-off" // Placeholder text for the input field
              className="w-full p-1" // Full width with padding
            />
          </div>
          {/* Input for car rental dates */}
          <div className="flex items-center border rounded-lg p-2">
            <FaCalendarAlt className="text-earth-dark mr-2" /> {/* Icon for calendar */}
            <input
              type="text"
              placeholder="Dates" // Placeholder text for the input field
              className="w-full p-1" // Full width with padding
            />
          </div>
          {/* Button to search for cars */}
          <button className="w-full p-2 bg-earth-dark text-white rounded-lg">
            Search Cars
          </button>
        </div>
      )}
    </section>
  );
};

export default BookingSection; // Exporting the BookingSection component for use in other parts of the application
