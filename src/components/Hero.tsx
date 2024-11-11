import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-[600px]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80"
          alt="Truck background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full pt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect Truck
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Browse thousands of trucks from verified sellers across Brazil. Your next truck is just a few clicks away.
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                  <option value="">All Brands</option>
                  <option value="volvo">Volvo</option>
                  <option value="scania">Scania</option>
                  <option value="mercedes">Mercedes-Benz</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                  <option value="">Price Range</option>
                  <option value="100000">Up to R$100,000</option>
                  <option value="200000">Up to R$200,000</option>
                  <option value="300000">Up to R$300,000</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                  <option value="">Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 flex items-center justify-center">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}