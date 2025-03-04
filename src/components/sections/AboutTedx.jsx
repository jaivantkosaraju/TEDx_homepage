import React from 'react';
import { Info } from 'lucide-react';

const AboutTedx = () => {
  return (
    <div className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-white rounded-lg p-6">
          <Info className="w-16 h-16 text-red-500 mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-12" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900">ABOUT TEDx</h3>
          <p className="text-gray-600 leading-relaxed">
            Learn about the global movement of ideas worth spreading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTedx;