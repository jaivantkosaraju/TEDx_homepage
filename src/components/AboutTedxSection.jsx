import React from 'react';

const AboutTedxSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What is TEDx?</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <p className="text-gray-700 leading-relaxed mb-6">
            TEDx is a grassroots initiative, created in the spirit of TED's overall mission to research and discover "ideas worth spreading." TEDx brings the spirit of TED to local communities around the globe through TEDx events.
          </p>
          <p className="text-gray-700 leading-relaxed">
            These events are organized by passionate individuals who seek to uncover new ideas and to share the latest research in their local areas that spark conversations in their communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTedxSection;