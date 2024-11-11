import React from 'react';
import { Users, Truck, Star, ShieldCheck } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Active Listings',
    value: '10,000+',
    icon: Truck,
    description: 'Trucks available now'
  },
  {
    id: 2,
    name: 'Monthly Views',
    value: '7M+',
    icon: Users,
    description: 'Page views per month'
  },
  {
    id: 3,
    name: 'Verified Sellers',
    value: '2,500+',
    icon: ShieldCheck,
    description: 'Trusted partners'
  },
  {
    id: 4,
    name: 'Success Rate',
    value: '95%',
    icon: Star,
    description: 'Satisfaction guaranteed'
  }
];

export default function Stats() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="relative bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <dt className="text-lg font-semibold text-gray-900">{stat.name}</dt>
              <dd className="mt-1">
                <span className="text-3xl font-bold tracking-tight text-blue-600">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-gray-500">{stat.description}</span>
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}