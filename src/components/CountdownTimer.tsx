import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Date: May 21, 2025
  const eventDate = new Date('2025-05-21T00:00:00');
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      } else {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
    };
    
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="glass-card py-6 px-4 backdrop-blur-lg">
        <h3 className="text-center text-gold-light mb-4 text-xl font-serif">The Launch Begins In</h3>
        <div className="grid grid-cols-4 gap-2 md:gap-6">
          {timeUnits.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className="relative">
                <div className="sonar-wrapper">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg bg-navy-light border border-gold/20 flex items-center justify-center animate-scale-in">
                    <span className="text-2xl md:text-4xl font-bold text-white">{unit.value.toString().padStart(2, '0')}</span>
                  </div>
                  <div className="sonar-wave"></div>
                </div>
              </div>
              <span className="text-xs md:text-sm text-white/70 mt-2">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
