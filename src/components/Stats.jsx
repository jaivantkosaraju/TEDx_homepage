import React from 'react';
import { Users, Building, MapPin, Lightbulb } from 'lucide-react';

const Stats = () => {
  return (
    <div className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-red-500/20">
            <Users className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Community Strength</h3>
            <p className="text-gray-300">Standing 6000+ strong, our community comprises of curious individuals with an ever increasing appetite for learning.</p>
          </div>
          
          <div className="p-6 bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-red-500/20">
            <Building className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Legacy</h3>
            <p className="text-gray-300">Ranking amongst the top educational institutes in India, our university adds a key ingredient in realising our vision.</p>
          </div>
          
          <div className="p-6 bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-red-500/20">
            <MapPin className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Location</h3>
            <p className="text-gray-300">Hugging the Arabian sea along its length, our venue is a welcoming retreat for sparking up conversations about things that matter.</p>
          </div>
          
          <div className="p-6 bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-red-500/20">
            <Lightbulb className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-white">Impactful Ideas</h3>
            <p className="text-gray-300">We strive to bring forward powerful ideas that challenge the norms and carry the potential to transform lives.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;