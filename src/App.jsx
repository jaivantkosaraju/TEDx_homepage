import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventInfo from './components/EventInfo';
import Countdown from './components/Countdown';
import Experience from './components/Experience';
import Tribute from './components/Tribute';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <EventInfo />
      <Countdown />
      <Experience />
      <Tribute />
      <Footer />
    </div>
  );
}

export default App;