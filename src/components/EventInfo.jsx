import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const EventInfo = () => {
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto grid md:grid-cols-3 gap-10 px-4">
        <div className="flex flex-col items-center text-center p-8 bg-gray-900/50 rounded-xl shadow-lg border border-red-500/20">
          <Calendar className="w-16 h-16 text-red-500 mb-6" />
          <h3 className="text-2xl font-bold mb-3 text-white">Date</h3>
          <p className="text-gray-300 text-lg">February 15, 2024</p>
        </div>
        <div className="flex flex-col items-center text-center p-8 bg-gray-900/50 rounded-xl shadow-lg border border-red-500/20">
          <MapPin className="w-16 h-16 text-red-500 mb-6" />
          <h3 className="text-2xl font-bold mb-3 text-white">Location</h3>
          <p className="text-gray-300 text-lg">Grand Auditorium</p>
        </div>
        <div className="flex flex-col items-center text-center p-8 bg-gray-900/50 rounded-xl shadow-lg border border-red-500/20">
          <Users className="w-16 h-16 text-red-500 mb-6" />
          <h3 className="text-2xl font-bold mb-3 text-white">Speakers</h3>
          <p className="text-gray-300 text-lg">12 Visionaries</p>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;