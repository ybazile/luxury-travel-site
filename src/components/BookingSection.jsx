// src/components/BookingSection.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaPlane, FaHotel, FaCar, FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';

const BookingSection = () => {
  // State for the active tab, start date, and end date
  const [activeTab, setActiveTab] = useState('flights');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Handler to change the active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-white shadow-md rounded-lg p-2 mx-auto -mt-12 relative z-10 max-w-screen-sm">
      {/* Tab buttons */}
      <div className="flex justify-center mb-2">
        <button
          className={`px-3 py-1 flex items-center ${activeTab === 'flights' ? 'bg-earth-dark text-white' : 'bg-earth-light text-earth-dark'} rounded-l-lg`}
          onClick={() => handleTabChange('flights')}
        >
          <FaPlane className="mr-1" />
          Flights
        </button>
        <button
          className={`px-3 py-1 flex items-center ${activeTab === 'hotels' ? 'bg-earth-dark text-white' : 'bg-earth-light text-earth-dark'}`}
          onClick={() => handleTabChange('hotels')}
        >
          <FaHotel className="mr-1" />
          Hotels
        </button>
        <button
          className={`px-3 py-1 flex items-center ${activeTab === 'cars' ? 'bg-earth-dark text-white' : 'bg-earth-light text-earth-dark'} rounded-r-lg`}
          onClick={() => handleTabChange('cars')}
        >
          <FaCar className="mr-1" />
          Cars
        </button>
      </div>

      {/* Flights tab content */}
      {activeTab === 'flights' && (
        <div className="space-y-2">
          <div className="flex items-center border rounded-lg p-2">
            <FaMapMarkerAlt className="text-earth-dark mr-2" />
            <input type="text" placeholder="Leaving from" className="w-full p-1" />
          </div>
          <div className="flex items-center border rounded-lg p-2">
            <FaMapMarkerAlt className="text-earth-dark mr-2" />
            <input type="text" placeholder="Going to" className="w-full p-1" />
          </div>
          <div className="flex items-center border rounded-lg p-2 space-x-2">
            <div className="flex items-center border rounded-lg p-2 w-1/2">
              <FaCalendarAlt className="text-earth-dark mr-2" />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Start Date"
                className="w-full p-1 focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg p-2 w-1/2">
              <FaCalendarAlt className="text-earth-dark mr-2" />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="End Date"
                className="w-full p-1 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center border rounded-lg p-2">
            <FaUser className="text-earth-dark mr-2" />
            <input type="text" placeholder="Traveler(s)" className="w-full p-1" />
          </div>
          <button className="w-full p-2 bg-earth-dark text-white rounded-lg">
            Search Flights
          </button>
        </div>
      )}

      {/* Hotels tab content */}
      {activeTab === 'hotels' && (
        <div className="space-y-2">
          <div className="flex items-center border rounded-lg p-2">
            <FaMapMarkerAlt className="text-earth-dark mr-2" />
            <input type="text" placeholder="Where to?" className="w-full p-1" />
          </div>
          <div className="flex items-center border rounded-lg p-2 space-x-2">
            <div className="flex items-center border rounded-lg p-2 w-1/2">
              <FaCalendarAlt className="text-earth-dark mr-2" />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Start Date"
                className="w-full p-1 focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg p-2 w-1/2">
              <FaCalendarAlt className="text-earth-dark mr-2" />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="End Date"
                className="w-full p-1 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center border rounded-lg p-2">
            <FaUser className="text-earth-dark mr-2" />
            <input type="text" placeholder="Guest" className="w-full p-1" />
          </div>
          <button className="w-full p-2 bg-earth-dark text-white rounded-lg">
            Search Hotels
          </button>
        </div>
      )}

      {/* Cars tab content */}
      {activeTab === 'cars' && (
        <div className="space-y-2">
          <div className="flex items-center border rounded-lg p-2">
            <FaMapMarkerAlt className="text-earth-dark mr-2" />
            <input type="text" placeholder="Pick-up" className="w-full p-1" />
          </div>
          <div className="flex items-center border rounded-lg p-2">
            <FaMapMarkerAlt className="text-earth-dark mr-2" />
            <input type="text" placeholder="Drop-off" className="w-full p-1" />
          </div>
          <div className="flex items-center border rounded-lg p-2 space-x-2">
            <div className="flex items-center border rounded-lg p-2 w-1/2">
              <FaCalendarAlt className="text-earth-dark mr-2" />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Start Date"
                className="w-full p-1 focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg p-2 w-1/2">
              <FaCalendarAlt className="text-earth-dark mr-2" />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="End Date"
                className="w-full p-1 focus:outline-none"
              />
            </div>
          </div>
          <button className="w-full p-2 bg-earth-dark text-white rounded-lg">
            Search Cars
          </button>
        </div>
      )}
    </section>
  );
};

export default BookingSection;
