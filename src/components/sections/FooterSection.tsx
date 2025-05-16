import React from 'react';
import { AnchorIcon } from 'lucide-react';

const FooterSection: React.FC = () => {
  return (
    <footer className="py-12 bg-navy-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center gap-2 text-white">
              <AnchorIcon className="h-6 w-6 text-gold" />
              <span className="font-serif text-xl font-semibold">7FOUNDERS</span>
            </a>
            <p className="text-white/60 mt-2 text-sm">
              Connecting depth with vision
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#event" className="text-white/70 hover:text-gold-light transition-colors">Event</a>
            <a href="#speakers" className="text-white/70 hover:text-gold-light transition-colors">Speakers</a>
            <a href="#agenda" className="text-white/70 hover:text-gold-light transition-colors">Agenda</a>
            <a href="#location" className="text-white/70 hover:text-gold-light transition-colors">Location</a>
            <a href="#rsvp" className="text-white/70 hover:text-gold-light transition-colors">RSVP</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2023 7FOUNDERS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
