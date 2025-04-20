"use client";

import { useState } from 'react';

interface Development {
  name: string;
  type: string;
  timeline: string;
  status: string;
  sqft: string;
}

const mockData: Development[] = [
  {
    name: "Amazon Distribution Center",
    type: "Industrial",
    timeline: "Q4 2024",
    status: "Under Construction",
    sqft: "850,000",
  },
  {
    name: "Tech Park Phase II",
    type: "Office",
    timeline: "Q2 2025",
    status: "Planned",
    sqft: "325,000",
  },
  {
    name: "Logistics Hub",
    type: "Industrial",
    timeline: "Q3 2024",
    status: "Under Construction",
    sqft: "600,000",
  }
];

export default function SupplyPipeline() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Supply Pipeline</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 hover:text-gray-700"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      {isExpanded && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeline</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Square Feet</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockData.map((development, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{development.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{development.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{development.timeline}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      development.status === 'Under Construction' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {development.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{development.sqft}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}