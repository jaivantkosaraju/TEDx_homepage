import React from 'react';
import { Info } from 'lucide-react';

const WhatIsTedx = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1560523159-4a9692d222f9?auto=format&fit=crop&q=80&w=1920&h=1080')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-red-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-red-500/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-12">
          <div className="relative">
            <h2 className="text-4xl font-bold text-center text-white">What is TEDx</h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-500"></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-black/50 p-8 rounded-xl shadow-lg border border-red-500/20 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
              <Info className="w-24 h-24 text-red-500" />
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-300 leading-relaxed mb-6">
                In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxNITKSurathkal, where x = independently organized TED event.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                At our TEDxNITKSurathkal event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For more information, you can check out <a href="#" className="text-red-400 hover:text-red-300 underline transition-colors">TEDx Program Initiative</a>.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-black/40 p-6 rounded-lg border border-red-500/10 transform hover:scale-105 transition-all">
              <h3 className="text-xl font-bold mb-3 text-white">Local Impact</h3>
              <p className="text-gray-300">TEDx events are locally organized celebrations of short talks that foster learning, inspiration, and community building.</p>
            </div>
            
            <div className="bg-black/40 p-6 rounded-lg border border-red-500/10 transform hover:scale-105 transition-all">
              <h3 className="text-xl font-bold mb-3 text-white">Global Reach</h3>
              <p className="text-gray-300">While organized locally, TEDx talks can reach millions worldwide through the TED platform and social media.</p>
            </div>
            
            <div className="bg-black/40 p-6 rounded-lg border border-red-500/10 transform hover:scale-105 transition-all">
              <h3 className="text-xl font-bold mb-3 text-white">Diverse Perspectives</h3>
              <p className="text-gray-300">TEDx brings together thinkers, innovators, and creators from diverse backgrounds to share their unique insights.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsTedx;