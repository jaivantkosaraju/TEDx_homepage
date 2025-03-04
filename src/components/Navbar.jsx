import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 py-2' : 'bg-black py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Ro_EDKS3A5v-5ST7OtH4DJGT7srYlKtjSQ&s" 
              alt="TEDx Logo" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-32' : 'h-40'
              } hover:scale-105`}
            />
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Salon', 'Theme', 'Past Editions', 'Talk Archives', 'Team', 'Partners', 'Contact', 'Game'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-red-500 transition-colors duration-300 relative group text-lg"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </div>
          
          <button className="md:hidden text-white hover:text-red-500 transition-colors">
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;