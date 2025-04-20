"use client";

import { useState } from 'react';

interface LandSale {
  propertyName: string;
  tenant: string;
  size: string;
  pricePerSF: string;
  capRate: string;
  buyer: string;
  seller: string;
}

const mockData: LandSale[] = [
  {
    propertyName: "Industrial Park A",
    tenant: "Amazon",
    size: "750,000 SF",
    pricePerSF: "$165",
    capRate: "4.8%",
    buyer: "BlackRock Real Estate",
    seller: "Industrial Ventures LLC"
  },
  {
    propertyName: "Distribution Center B",
    tenant: "FedEx",
    size: "500,000 SF",
    pricePerSF: "$155",
    capRate: "5.2%",
    buyer: "Prologis",
    seller: "CBRE Investment Management"
  },
  {
    propertyName: "Logistics Hub C",
    tenant: "UPS",
    size: "600,000 SF",
    pricePerSF: "$170",
    capRate: "4.5%",
    buyer: "Blackstone",
    seller: "JLL Income Property Trust"
  }
];

export default function LandSaleComparables() {
  const [isExpanded, setIsExpanded] = useState(false); // Start collapsed to ensure consistent initial state

  return (
    <div className="p-6" suppressHydrationWarning>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Land Sale Comparables</h2>
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
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tenant</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price/SF</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cap Rate</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockData.map((sale, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sale.propertyName}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{sale.tenant}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{sale.size}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{sale.pricePerSF}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{sale.capRate}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{sale.buyer}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{sale.seller}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}