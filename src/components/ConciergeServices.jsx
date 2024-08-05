// src/components/ConciergeServices.jsx
import React from 'react'; // Importing React library for creating components

// Array of service objects, each containing a name and description
const services = [
  {
    name: "Personalized Itinerary Planning",
    description: "Tailored travel experiences designed just for you.", // Description of the service
  },
  {
    name: "24/7 Support",
    description: "We're here to help anytime, anywhere.", // Description of the service
  },
  {
    name: "Exclusive Access",
    description: "Get access to exclusive events and locations.", // Description of the service
  },
  {
    name: "Private Transportation",
    description: "Luxury transport options for your convenience.", // Description of the service
  },
  {
    name: "Dining Reservations",
    description: "Book the best restaurants with ease.", // Description of the service
  },
  // Add more services as needed
];

// Functional component for displaying concierge services
const ConciergeServices = () => {
  return (
    // Main section for concierge services with padding and background color
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4"> {/* Centering the content with a maximum width */}
        <h2 className="text-3xl font-bold text-center mb-8">Concierge Services</h2> {/* Section title */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Grid layout for services */}
          {services.map((service, index) => ( // Mapping over services array to create service cards
            <div key={index} className="bg-gray-100 shadow-md rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"> {/* Card styling with hover effects */}
              <h3 className="text-xl font-bold mb-2">{service.name}</h3> {/* Service name */}
              <p className="text-gray-700">{service.description}</p> {/* Service description */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConciergeServices; // Exporting the ConciergeServices component for use in other parts of the application
