import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=300&h=300",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=300&h=300",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=300&h=300",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=300&h=300",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=300&h=300",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=300&h=300"
  ];

  return (
    <footer className="bg-black text-white py-16 border-t border-red-500/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Ro_EDKS3A5v-5ST7OtH4DJGT7srYlKtjSQ&s" 
              alt="TEDx Logo" 
              className="h-36 mb-6 hover:scale-105 transition-transform"
            />
            <p className="text-gray-400 text-lg">Fostered by the vision of serving the student community with the most innovative and inspiring ideas.</p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-6">Spread the LOVE</h4>
            <p className="text-gray-400 mb-4">We're on your favourite social media networks! Follow us on:</p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110">
                <Facebook className="w-10 h-10" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110">
                <Instagram className="w-10 h-10" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110">
                <Twitter className="w-10 h-10" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110">
                <Linkedin className="w-10 h-10" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110">
                <Youtube className="w-10 h-10" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-2xl font-bold mb-6 text-center md:text-left">Gallery</h4>
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((image, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
                  <img 
                    src={image} 
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">Copyright © 2025 All rights reserved | Made with <span className="text-red-500">♥</span> by TEDxNITKSurathkal & Colorlib | This independent TEDx event is operated under license from TED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;