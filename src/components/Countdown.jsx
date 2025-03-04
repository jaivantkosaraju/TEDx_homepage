import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2024-03-15T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Event Starts In</h2>
        <div className="grid grid-cols-4 gap-6 max-w-3xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-red-600 p-6 rounded-xl">
              <div className="text-5xl font-bold mb-3">{value}</div>
              <div className="text-lg uppercase">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;