"use client";

import { useState } from 'react';

interface LocationPoint {
  name: string;
  type: 'port' | 'highway' | 'airport' | 'tenant';
  distance: string;
  description?: string;
}

const locationData: LocationPoint[] = [
  {
    name: "International Airport",
    type: "airport",
    distance: "15 miles",
    description: "Major international hub with cargo facilities"
  },
  {
    name: "Interstate 95",
    type: "highway",
    distance: "0.5 miles",
    description: "Major north-south freight corridor"
  },
  {
    name: "Deep Water Port",
    type: "port",
    distance: "12 miles",
    description: "Container and bulk cargo facilities"
  },
  {
    name: "Amazon Fulfillment Center",
    type: "tenant",
    distance: "2.5 miles",
    description: "1M sq ft facility"
  },
  {
    name: "FedEx Ground Hub",
    type: "tenant",
    distance: "5 miles",
    description: "Regional sorting facility"
  }
];

const getIconForType = (type: LocationPoint['type']) => {
  switch (type) {
    case 'airport':
      return '✈️';
    case 'highway':
      return '🛣️';
    case 'port':
      return '🚢';
    case 'tenant':
      return '🏢';
    default:
      return '📍';
  }
};

export default function ProximityInsights() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedType, setSelectedType] = useState<LocationPoint['type'] | 'all'>('all');

  const filteredLocations = selectedType === 'all' 
    ? locationData 
    : locationData.filter(loc => loc.type === selectedType);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Proximity Insights</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 hover:text-gray-700"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      {isExpanded && (
        <div>
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedType === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {['airport', 'highway', 'port', 'tenant'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as LocationPoint['type'])}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedType === type
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredLocations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">{getIconForType(location.type)}</span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{location.name}</h3>
                    <p className="text-sm text-gray-500">{location.description}</p>
                    <div className="mt-2 flex items-center">
                      <span className="text-sm font-medium text-blue-600">
                        Distance: {location.distance}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}