import React from 'react';
import Experience from './sections/Experience';
import OurSpeakers from './sections/OurSpeakers';
import PastSpeakers from './sections/PastSpeakers';
import AboutTedx from './sections/AboutTedx';

const Sections = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Experience />
          <OurSpeakers />
          <PastSpeakers />
          <AboutTedx />
        </div>
      </div>
    </div>
  );
};

export default Sections;