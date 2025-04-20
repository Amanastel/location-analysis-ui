"use client";

import { useState, useCallback } from 'react';

interface ZoningInfo {
  category: string;
  code: string;
  description: string;
  restrictions: string[];
  links: Array<{
    title: string;
    url: string;
  }>;
}

const zoningData: ZoningInfo = {
  category: "Industrial",
  code: "I-2",
  description: "Heavy Industrial District with logistics and distribution focus",
  restrictions: [
    "Maximum building height: 60 feet",
    "Minimum lot size: 2 acres",
    "Floor Area Ratio (FAR): 0.5",
    "Setback requirements: 50 feet from residential zones",
    "Loading dock requirements: 1 per 10,000 sq ft"
  ],
  links: [
    {
      title: "Municipal Zoning Code",
      url: "https://example.com/zoning-code"
    },
    {
      title: "Land Use Regulations",
      url: "https://example.com/land-use"
    },
    {
      title: "Development Guidelines",
      url: "https://example.com/guidelines"
    }
  ]
};

export default function ZoningOverlays() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = useCallback(async () => {
    const element = document.getElementById('zoning-content');
    if (!element) {
      console.error("Element with id 'zoning-content' not found.");
      return;
    }

    setIsExporting(true);
    try {
      const clonedElement = element.cloneNode(true) as HTMLElement;
      
      // Updated styleElements function with forced dark colors
      const styleElements = (el: HTMLElement) => {
        const computedStyle = window.getComputedStyle(el);
        
        // Force all text to be dark
        el.style.color = '#000000'; // Pure black for maximum contrast
        
        // Special handling for specific elements
        if (el.tagName.toLowerCase() === 'h2' || 
            el.tagName.toLowerCase() === 'h3') {
          el.style.color = '#000000';
          el.style.fontWeight = '600';
        }
        
        if (el.classList.contains('text-blue-500') ||
            el.classList.contains('text-blue-600') ||
            el.classList.contains('text-blue-800')) {
          el.style.color = '#1e40af'; // Dark blue
        }

        // Keep layout styles
        el.style.backgroundColor = computedStyle.backgroundColor;
        el.style.padding = computedStyle.padding;
        el.style.margin = computedStyle.margin;
        el.style.borderRadius = computedStyle.borderRadius;
        el.style.display = computedStyle.display;
        el.style.gap = computedStyle.gap;
        el.style.fontWeight = computedStyle.fontWeight || '400';
        
        // Remove Tailwind classes
        el.className = '';
        
        // Process children recursively
        Array.from(el.children).forEach(child => {
          if (child instanceof HTMLElement) {
            styleElements(child);
          }
        });
      };

      styleElements(clonedElement);

      const html2pdf = (await import('html2pdf.js')).default;
      
      const options = {
        margin: 10,
        filename: 'zoning-information.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff'
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true
        }
      };

      await html2pdf().from(clonedElement).set(options).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Zoning Overlays</h2>
        <div className="flex space-x-4">
          <button
            onClick={exportToPDF}
            disabled={isExporting}
            className={`px-4 py-2 rounded transition-colors ${
              isExporting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
          >
            {isExporting ? 'Exporting...' : 'Export PDF'}
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div id="zoning-content" className="space-y-6">
          {/* Main Zoning Information */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                {zoningData.code}
              </div>
              <h3 className="text-lg font-medium text-gray-900">{zoningData.category}</h3>
            </div>
            <p className="text-gray-600 mb-4">{zoningData.description}</p>
          </div>

          {/* Restrictions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Development Restrictions</h3>
            <ul className="space-y-3">
              {zoningData.restrictions.map((restriction, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">{restriction}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* External References */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">External References</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {zoningData.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <span className="text-blue-600 font-medium">{link.title}</span>
                    <span className="ml-2 text-gray-400">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
