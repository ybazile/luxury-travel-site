// Importing React library
import React from 'react';

// Importing the HomePage component
import HomePage from './pages/HomePage';

// Importing the Footer component
import Footer from './components/Footer';

// Defining the main App component
function App() {
  return (
    <div>
      {/* Rendering the HomePage component */}
      <HomePage />
      
      {/* Rendering the Footer component */}
      <Footer />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
