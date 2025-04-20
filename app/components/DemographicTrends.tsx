"use client";

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const demographicData = [
  {
    year: '2020',
    population: 245000,
    medianIncome: 85000,
    employmentRate: 95
  },
  {
    year: '2021',
    population: 252000,
    medianIncome: 87500,
    employmentRate: 96
  },
  {
    year: '2022',
    population: 261000,
    medianIncome: 92000,
    employmentRate: 97
  },
  {
    year: '2023',
    population: 268000,
    medianIncome: 95000,
    employmentRate: 97
  },
  {
    year: '2024',
    population: 275000,
    medianIncome: 98000,
    employmentRate: 98
  }
];

const workforceData = [
  { sector: 'Technology', percentage: 35 },
  { sector: 'Healthcare', percentage: 25 },
  { sector: 'Finance', percentage: 20 },
  { sector: 'Retail', percentage: 12 },
  { sector: 'Other', percentage: 8 }
];

export default function DemographicTrends() {
  const [isExpanded, setIsExpanded] = useState(false); // Start collapsed to ensure consistent initial state

  return (
    <div className="p-6" suppressHydrationWarning>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Demographic Trends</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 hover:text-gray-700"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-8">
          {/* Population and Income Growth Chart */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Population & Income Growth</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={demographicData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="population" name="Population" fill="#8884d8" />
                  <Bar yAxisId="right" dataKey="medianIncome" name="Median Income ($)" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Population Growth</h3>
              <p className="text-3xl font-bold text-indigo-600">12.2%</p>
              <p className="text-sm text-gray-500">5-Year Growth Rate</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Median Income</h3>
              <p className="text-3xl font-bold text-green-600">$98,000</p>
              <p className="text-sm text-gray-500">Current Year</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Employment Rate</h3>
              <p className="text-3xl font-bold text-blue-600">98%</p>
              <p className="text-sm text-gray-500">Current Rate</p>
            </div>
          </div>

          {/* Workforce Composition */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Workforce Composition</h3>
            <div className="space-y-4">
              {workforceData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.sector}</span>
                    <span className="text-sm font-medium text-gray-700">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}