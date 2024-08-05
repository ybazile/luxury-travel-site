// src/pages/HomePage.jsx

// Importing React library
import React from 'react';

// Importing components used in the HomePage
import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import BookingSection from '../components/BookingSection';
import PopularDestinations from '../components/PopularDestinations';
import RecommendedTrips from '../components/RecommendedTrips';
import SpecialOffers from '../components/SpecialOffers';
import ConciergeServices from '../components/ConciergeServices';

// HomePage component that renders the homepage of the website
const HomePage = () => {
  return (
    <div>
      {/* Header component, typically containing the navigation menu */}
      <Header />
      
      {/* MainBanner component, showing the main promotional banner */}
      <MainBanner />
      
      {/* BookingSection component, for booking trips or accommodations */}
      <BookingSection />
      
      {/* PopularDestinations component, showcasing popular travel destinations */}
      <PopularDestinations />
      
      {/* RecommendedTrips component, displaying a list of recommended trips */}
      <RecommendedTrips />
      
      {/* SpecialOffers component, highlighting special offers and discounts */}
      <SpecialOffers />
      
      {/* ConciergeServices component, detailing available concierge services */}
      <ConciergeServices />
    </div>
  );
};

// Exporting HomePage component as the default export
export default HomePage;
