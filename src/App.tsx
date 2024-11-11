import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedListings from './components/FeaturedListings';
import Stats from './components/Stats';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <FeaturedListings />
        <Stats />
      </main>
    </div>
  );
}

export default App;