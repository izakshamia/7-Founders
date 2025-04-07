import React from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import GoldButton from '@/components/GoldButton';

const panelSpeakers = [
    "Amir Nechemia - ConnectTeam CEO",
    "Ido Almany - CEO Zoomd Technologies (ZOMD.TSXv) | Former CEO, American Express Israel | Executive Leadership | Tech | Investor",
    "Or Azarzar - Co-Founder & CTO at Lightspin (Acquired by Cisco), Director of Engineering at Cisco"
];

const agenda = [
    "18:00 - 19:00 Gathering & Dinner",
    "19:00 - 19:45: Entrepreneurs Panel",
    "19:45 - 20:00: Short Break",
    "20:00 - 21:10: Program Reveal, Matchmaking, and Remarks by the Dolphin Association CEO ",
    "21:10 - 21:30:  Networking, Gifts& Drinks"
];

const location = "Playground Restaurant - מסעדת פלייגראונד כתובת: דרך מנחם בגין 144 ז׳, שוכנת בלובי מלון פליי מידטאון144, תל אביב-יפו";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-deep-ocean opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 z-0"></div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute w-72 h-72 rounded-full bg-gold/5 blur-3xl top-1/4 left-1/4 animate-float"></div>
        <div className="absolute w-96 h-96 rounded-full bg-navy-light/30 blur-3xl bottom-1/4 right-1/4 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-block mb-3 reveal">
            <span className="px-3 py-1 rounded-full bg-gold/20 text-gold-light text-sm font-medium backdrop-blur-sm">
              May 21, 2025 • Exclusive Event
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 reveal">
            <span className="block">The <span className="text-gold-gradient">7FOUNDERS</span></span>
            <span className="block mt-2">Launch Event</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto reveal">
            A premier gathering for ex-submariners turned founders, builders, and leaders. Join us for an evening of connection, insight, and celebration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 reveal">
            <GoldButton href="#rsvp" size="lg">
              RSVP Now
            </GoldButton>
            <GoldButton href="#agenda" variant="outline" size="lg">
              View Agenda
            </GoldButton>
          </div>
          
          <div className="mt-12 reveal">
            <CountdownTimer />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#event" className="text-gold hover:text-gold-light transition-colors">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
