import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, Users, Building, MapPin } from 'lucide-react';

const Experience = () => {
  const pastSpeakers = [
    {
      name: "Elon Musk",
      image: "https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&q=80&w=300&h=300",
      topic: "Future of AI & Space Exploration"
    },
    {
      name: "Simon Sinek",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300",
      topic: "How Great Leaders Inspire Action"
    },
    {
      name: "Brené Brown",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=300",
      topic: "The Power of Vulnerability"
    },
    {
      name: "Tim Urban",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
      topic: "Inside the Mind of a Master Procrastinator"
    },
    {
      name: "Amy Cuddy",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
      topic: "Your Body Language Shapes Who You Are"
    },
    {
      name: "Gary Vaynerchuk",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300",
      topic: "Digital Transformation & Personal Branding"
    },
    {
      name: "Nick Vujicic",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
      topic: "Life Without Limits"
    },
    {
      name: "Tony Robbins",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=300&h=300",
      topic: "Personal Development & Success Psychology"
    },
    {
      name: "Mel Robbins",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
      topic: "The 5 Second Rule"
    },
    {
      name: "Jay Shetty",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300",
      topic: "Purpose & Mindfulness"
    },
    {
      name: "Luvvie Ajayi",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=300&h=300",
      topic: "Getting Comfortable with Being Uncomfortable"
    },
    {
      name: "Adam Grant",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300&h=300",
      topic: "Original Thinkers"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (pastSpeakers.length - (visibleSlides - 1))
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [pastSpeakers.length, visibleSlides, isDragging]);

  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = 100 / visibleSlides;
      carouselRef.current.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }
  }, [currentIndex, visibleSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? pastSpeakers.length - visibleSlides : prevIndex - 1;
      return newIndex;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % (pastSpeakers.length - (visibleSlides - 1) + 1);
      return newIndex;
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentIndex);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) / (carouselRef.current?.offsetWidth || 1) * visibleSlides * -1;
    
    const slideWidth = 100 / visibleSlides;
    const newPosition = scrollLeft + walk;
    
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${newPosition * slideWidth}%)`;
    }
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) / (carouselRef.current?.offsetWidth || 1) * visibleSlides * -1;
    
    let newIndex = Math.round(scrollLeft + walk);
    newIndex = Math.max(0, Math.min(newIndex, pastSpeakers.length - visibleSlides));
    
    setCurrentIndex(newIndex);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (carouselRef.current) {
        const slideWidth = 100 / visibleSlides;
        carouselRef.current.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
      }
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentIndex);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const x = e.touches[0].clientX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) / (carouselRef.current?.offsetWidth || 1) * visibleSlides * -1;
    
    const slideWidth = 100 / visibleSlides;
    const newPosition = scrollLeft + walk;
    
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${newPosition * slideWidth}%)`;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const currentTransform = carouselRef.current?.style.transform || '';
    const match = currentTransform.match(/-?[\d.]+/);
    
    if (match) {
      const currentTranslate = parseFloat(match[0]);
      const slideWidth = 100 / visibleSlides;
      let newIndex = Math.round(currentTranslate / slideWidth);
      
      newIndex = Math.max(0, Math.min(Math.abs(newIndex), pastSpeakers.length - visibleSlides));
      
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1920&h=1080')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-red-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-red-500/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">The Experience</h2>
        
        <div className="max-w-5xl mx-auto bg-black/50 p-10 rounded-xl shadow-lg border border-red-500/20 mb-20 backdrop-blur-sm">
          <p className="text-gray-300 leading-relaxed text-xl text-center">
            Fostered by the vision of serving the student community with the most innovative and inspiring ideas, TEDxNITKSurathkal is a university TEDx event that began at NITK in 2011. Having had many successful editions in 2011, 2012, 2016, 2018, 2019, 2020, 2021, 2022 and 2023. TEDxNITKSurathkal is striving for its upcoming annual colloque to explore beyond the conventions and allow people to rethink their notion of what is possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          <div className="p-8 bg-black/50 rounded-xl shadow-lg border border-red-500/20 transform hover:scale-105 transition-all backdrop-blur-sm h-full">
            <Lightbulb className="w-16 h-16 text-red-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-white">Impactful Ideas</h3>
            <p className="text-gray-300 text-lg">Transforming thoughts into action, our speakers bring revolutionary ideas that challenge conventional wisdom and inspire change.</p>
          </div>

          <div className="p-8 bg-black/50 rounded-xl shadow-lg border border-red-500/20 transform hover:scale-105 transition-all backdrop-blur-sm h-full">
            <Users className="w-16 h-16 text-red-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-white">Community Strength</h3>
            <p className="text-gray-300 text-lg">A vibrant community of 6000+ innovators, thinkers, and dreamers united by their passion for transformative ideas.</p>
          </div>

          <div className="p-8 bg-black/50 rounded-xl shadow-lg border border-red-500/20 transform hover:scale-105 transition-all backdrop-blur-sm h-full">
            <Building className="w-16 h-16 text-red-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-white">Legacy</h3>
            <p className="text-gray-300 text-lg">Built on a decade of excellence, our legacy continues to inspire and nurture the next generation of thought leaders.</p>
          </div>

          <div className="p-8 bg-black/50 rounded-xl shadow-lg border border-red-500/20 transform hover:scale-105 transition-all backdrop-blur-sm h-full">
            <MapPin className="w-16 h-16 text-red-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-white">Location</h3>
            <p className="text-gray-300 text-lg">Nestled along the Arabian Sea, our venue provides the perfect backdrop for meaningful conversations and connections.</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto bg-black/50 p-10 rounded-xl shadow-lg border border-red-500/20 mb-24 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center mb-10">
            <div className="md:w-3/4 mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-white text-center">What is TEDx</h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxNITKSurathkal, where x = independently organized TED event.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                At our TEDxNITKSurathkal event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                For more information, you can check out <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline transition-colors">TEDx Program Initiative</a>.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-black/40 p-8 rounded-lg border border-red-500/10 transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">Local Impact</h3>
              <p className="text-gray-300 text-lg">TEDx events are locally organized celebrations of short talks that foster learning, inspiration, and community building.</p>
            </div>
            
            <div className="bg-black/40 p-8 rounded-lg border border-red-500/10 transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">Global Reach</h3>
              <p className="text-gray-300 text-lg">While organized locally, TEDx talks can reach millions worldwide through the TED platform and social media.</p>
            </div>
            
            <div className="bg-black/40 p-8 rounded-lg border border-red-500/10 transform hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">Diverse Perspectives</h3>
              <p className="text-gray-300 text-lg">TEDx brings together thinkers, innovators, and creators from diverse backgrounds to share their unique insights.</p>
            </div>
          </div>
        </div>

        <div className="space-y-20">
          <div className="max-w-5xl mx-auto bg-black/50 p-10 rounded-xl shadow-lg border border-red-500/20 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">Our Speakers</h2>
            <p className="text-gray-300 text-center text-xl">
              Get ready to be inspired by our carefully curated lineup of visionary speakers. 
              Each speaker brings unique insights and groundbreaking ideas that will challenge 
              your perspective and ignite your imagination. Stay tuned as we reveal our 
              exceptional speakers for TEDxNITKSurathkal 2024.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-black/50 p-10 rounded-xl shadow-lg border border-red-500/20 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">Past Speakers</h2>
            <p className="text-gray-300 text-center text-xl mb-12">
              Over the years, TEDxNITKSurathkal has hosted remarkable individuals who have 
              shared their revolutionary ideas and inspiring stories. From technology innovators 
              to social entrepreneurs, our past speakers have left an indelible mark on our 
              community and continue to inspire change across the globe.
            </p>
            
            <div className="relative overflow-hidden">
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-red-500/70 text-white p-3 rounded-r-lg transition-all"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-red-500/70 text-white p-3 rounded-l-lg transition-all"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div 
                ref={carouselRef}
                className="flex transition-transform duration-700 ease-in-out"
                style={{ 
                  width: `${(100 / visibleSlides) * pastSpeakers.length}%`,
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {pastSpeakers.map((speaker, index) => (
                  <div 
                    key={index} 
                    className="px-3"
                    style={{ width: `${100 / pastSpeakers.length}%` }}
                  >
                    <div className="bg-black/70 rounded-xl overflow-hidden border border-red-500/20 transform hover:scale-105 transition-all hover:shadow-lg hover:shadow-red-500/20 h-full">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={speaker.image} 
                          alt={speaker.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          onError={(e) => {
                            e.target.src = `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300`;
                          }}
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">{speaker.name}</h3>
                        <p className="text-red-400 text-lg">{speaker.topic}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-8 space-x-2 flex-wrap">
                {Array.from({ length: pastSpeakers.length - (visibleSlides - 1) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-red-500 scale-125' : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;