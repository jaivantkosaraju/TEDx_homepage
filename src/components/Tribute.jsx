import React from 'react';

const Tribute = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518818608552-195ed130cda4?auto=format&fit=crop&q=80&w=1920&h=1080')] bg-cover bg-center opacity-5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-red-500/5 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-red-500/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Red line accent */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">A Tribute</h2>
        <div className="max-w-5xl mx-auto space-y-6 bg-black/40 p-12 rounded-xl shadow-lg border border-red-500/20 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/3">
              <img 
                src="https://www.tedxnitksurathkal.in/assets/img/tribute/govind_tribute.jpg" 
                alt="Govind Jeevan" 
                className="rounded-xl shadow-lg border-2 border-red-500/20 w-full max-w-xs mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <p className="leading-relaxed text-gray-300 text-lg">
                The TEDxNITKSurathkal team takes this moment to grieve the demise of Govind Jeevan, a bright student of NITK and one of its long-time proponents. Our deepest condolences go to his family and friends for the loss of a dear one.
              </p>
              <p className="leading-relaxed text-gray-300 text-lg mt-4">
                Govind was an active member of the TEDxNITKSurathkal core team and community, with his impact spanning several editions of the event. He led the way in discovering and propagating ideas worth spreading.
              </p>
            </div>
          </div>
          
          <p className="leading-relaxed text-gray-300 text-lg">
            Our team fondly remembers him for his ability to spot the challenges faced by the NITK community and his drive to explore and highlight feasible solutions for them. We will greatly miss his presence and the unique perspectives he brought to the table.
          </p>
          <p className="leading-relaxed text-gray-300 text-lg">
            As has been seen with numerous events and initiatives on campus, Govind had an inspiring effect on the people he worked with, through his work and interactions with fellow students. At TEDxNITKSurathkal, his contributions ranged from Speaker Curation, Event Website Management, Merchandise, and Creative Design in the 2019 edition to leading an entire team for organising the 2020 edition themed 'Mirrors and Windows'.
          </p>
          <p className="leading-relaxed text-gray-300 text-lg">
            He saw worth in reflecting upon the events' impact on the NITK community and kept brainstorming ways in which we could derive more value for the community. In one such instance, he facilitated interactions of students with TEDx speakers beyond the ideas that were shared on-stage. This quality of going above and beyond to create better outcomes will continue to inspire our efforts. We greatly valued his guidance even during COVID times as he helped the 2021 team figure things out.
          </p>
          <p className="leading-relaxed text-gray-300 text-lg">
            We would like to express our sincerest thanks to Govind for all of his contributions to TEDxNITKSurathkal and the rest of NITK, and are mindful of the legacy he leaves behind.
          </p>
          <div className="pt-8 border-t border-red-500/20 mt-8">
            <p className="text-center font-light italic text-gray-300 text-lg">May he rest in peace.</p>
            <p className="text-center font-light text-gray-300 mt-2 text-lg">Team TEDxNITKSurathkal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tribute;