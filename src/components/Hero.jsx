import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Sparkle animation
    const createSparkle = () => {
      if (!containerRef.current) return;
      
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      
      const x = Math.random() * containerRef.current.offsetWidth;
      const y = Math.random() * containerRef.current.offsetHeight;
      
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      
      containerRef.current.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 1500);
    };

    const sparkleInterval = setInterval(createSparkle, 100);
    
    // Title text animation
    let isAlchemy = true;
    const animateTitle = () => {
      if (!titleRef.current) return;
      
      // Fade out
      titleRef.current.classList.add('animate-fade-out');
      
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.textContent = isAlchemy ? '15 FEB' : 'ALCHEMY';
        }
        
        isAlchemy = !isAlchemy;
        
        // Fade in
        if (titleRef.current) {
          titleRef.current.classList.remove('animate-fade-out');
        }
        if (titleRef.current) {
          titleRef.current.classList.add('animate-fade-in');
        }
        
        setTimeout(() => {
          if (titleRef.current) {
            titleRef.current.classList.remove('animate-fade-in');
          }
        }, 1000);
      }, 1000);
    };
    
    // Initial text
    if (titleRef.current) {
      titleRef.current.textContent = 'ALCHEMY';
    }
    
    const titleInterval = setInterval(animateTitle, 4000);
    
    return () => {
      clearInterval(sparkleInterval);
      clearInterval(titleInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white pt-16 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/30 via-black to-black"></div>
      
      {/* Magnetic balls background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="magnetic-ball animate-magnetic-1" style={{ top: '10%', left: '10%' }}></div>
        <div className="magnetic-ball animate-magnetic-2" style={{ top: '60%', left: '80%' }}></div>
        <div className="magnetic-ball animate-magnetic-3" style={{ top: '80%', left: '20%' }}></div>
        <div className="magnetic-ball animate-magnetic-4" style={{ top: '20%', left: '70%' }}></div>
        <div className="magnetic-ball animate-magnetic-5" style={{ top: '40%', left: '30%' }}></div>
        <div className="magnetic-ball animate-magnetic-6" style={{ top: '70%', left: '50%' }}></div>
      </div>

      <div className="text-center relative z-10">
        <div className="relative inline-block">
          <h1 
            ref={titleRef}
            className="text-[12rem] font-bold mb-4 bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent relative z-10 tracking-wider leading-none transition-all duration-1000"
          ></h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-white to-red-500 opacity-50 blur-2xl -z-10 animate-glow rounded-full"></div>
        </div>
        
        <p className="text-3xl animate-slide-up mt-8 font-light tracking-wide">
          Where Ideas Transform Reality
        </p>
      </div>
    </div>
  );
};

export default Hero;