
import React from 'react';
import AgendaItem from '@/components/AgendaItem';
import { AgendaItemType } from '@/types/agenda';

interface AgendaSectionProps {
  agendaItems: AgendaItemType[];
}

const AgendaSection: React.FC<AgendaSectionProps> = ({ agendaItems }) => {
  return (
    <section id="agenda" className="py-20 relative overflow-hidden">
      {/* Submarine-themed decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        {/* Submarine window frames */}
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-gold/30 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 border-4 border-gold/30 rounded-full"></div>
        
        {/* Submarine control panel lines */}
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
        
        {/* Depth markings */}
        <div className="absolute right-5 top-0 bottom-0 flex flex-col justify-around">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="w-3 h-0.5 bg-gold/30"></div>
              <span className="text-gold/30 text-xs ml-1">{i * 10}m</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bubbles animation */}
      <div className="bubbles-animation">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Periscope scan effect */}
      <div className="periscope-scan"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 reveal">
            <span className="relative inline-block">
              Event Agenda
              <span className="absolute -top-5 -right-8 text-gold text-lg rotate-12">6m</span>
            </span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 reveal"></div>
          <p className="text-white/80 max-w-2xl mx-auto reveal">
            An evening carefully crafted to inspire connection, share knowledge, and celebrate our community's achievements.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Submarine radar ping effect */}
          <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gold/50 animate-ping"></div>
          
          {/* Stylized "submarine hull" container */}
          <div className="bg-navy-dark/50 backdrop-blur-sm rounded-lg p-6 border border-gold/10 mb-8">
            <div className="flex justify-between items-center border-b border-gold/20 pb-4 mb-6">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gold/70 text-sm">
                Submarine Mission Log
              </div>
            </div>
            
            {agendaItems.map((item, index) => (
              <div key={index} className="reveal">
                <AgendaItem
                  time={item.time}
                  title={item.title}
                  description={item.description}
                  highlight={item.highlight}
                  iconName={item.iconName}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Submarine interior grids */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-navy-dark to-transparent"></div>
    </section>
  );
};

export default AgendaSection;
