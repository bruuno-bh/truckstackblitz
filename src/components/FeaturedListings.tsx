import React from 'react';
import { Star } from 'lucide-react';

const trucks = [
  {
    id: 1,
    title: "Volvo FH 540 6x4",
    year: 2023,
    price: "R$ 850.000",
    location: "São Paulo, SP",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=400",
    sponsored: true
  },
  {
    id: 2,
    title: "Scania R450 6x2",
    year: 2022,
    price: "R$ 720.000",
    location: "Rio de Janeiro, RJ",
    image: "https://images.unsplash.com/photo-1586191582056-b5d6147dcd1e?auto=format&fit=crop&q=80&w=400",
    sponsored: true
  },
  {
    id: 3,
    title: "Mercedes-Benz Actros 2651",
    year: 2023,
    price: "R$ 890.000",
    location: "Curitiba, PR",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=400",
    sponsored: false
  }
];

export default function FeaturedListings() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Listings</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            View all listings →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trucks.map((truck) => (
            <div key={truck.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative">
                <img
                  src={truck.image}
                  alt={truck.title}
                  className="w-full h-48 object-cover"
                />
                {truck.sponsored && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full flex items-center text-sm font-medium">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{truck.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">{truck.year}</span>
                  <span className="text-blue-600 font-bold">{truck.price}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <span>{truck.location}</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}