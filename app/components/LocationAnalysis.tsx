"use client";

import SupplyPipeline from './SupplyPipeline';
import LandSaleComparables from './LandSaleComparables';
import DemographicTrends from './DemographicTrends';
import ProximityInsights from './ProximityInsights';
import ZoningOverlays from './ZoningOverlays';

export default function LocationAnalysis() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Location Analysis</h1>
        
        <div className="space-y-6">
          {/* Supply Pipeline Section */}
          <div className="bg-white shadow rounded-lg">
            <SupplyPipeline />
          </div>

          {/* Land Sale Comparables Section */}
          <div className="bg-white shadow rounded-lg">
            <LandSaleComparables />
          </div>

          {/* Demographic Trends Section */}
          <div className="bg-white shadow rounded-lg">
            <DemographicTrends />
          </div>

          {/* Proximity Insights Section */}
          <div className="bg-white shadow rounded-lg">
            <ProximityInsights />
          </div>

          {/* Zoning Overlays Section */}
          <div className="bg-white shadow rounded-lg">
            <ZoningOverlays />
          </div>
        </div>
      </div>
    </div>
  );
}