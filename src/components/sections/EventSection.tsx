import React from 'react';
import { AnchorIcon, HandshakeIcon, UsersIcon } from 'lucide-react';

const EventSection: React.FC<{ onVideoPlay: () => void }> = ({ onVideoPlay }) => {
  return (
    <section id="event" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 reveal">The Event</h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6 reveal"></div>
            <p className="text-white/80 max-w-2xl mx-auto reveal">
              7FOUNDERS brings together the elite community of ex-submariners who have transformed their deep-sea expertise into entrepreneurial excellence. This launch event marks the beginning of a new chapter in our collective journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 text-center reveal">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy-light flex items-center justify-center">
                <UsersIcon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Elite Network</h3>
              <p className="text-white/70 text-sm">
                Connect with fellow submariners who have successfully navigated the transition to business leadership
              </p>
            </div>
            
            <div className="glass-card p-6 text-center reveal">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy-light flex items-center justify-center">
                <HandshakeIcon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Strategic Matchmaking</h3>
              <p className="text-white/70 text-sm">
                Our proprietary system pairs mentors with mentees based on expertise, needs, and goals
              </p>
            </div>
            
            <div className="glass-card p-6 text-center reveal">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy-light flex items-center justify-center">
                <AnchorIcon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Legacy of Excellence</h3>
              <p className="text-white/70 text-sm">
                Building on our shared history to create opportunities and foster innovation
              </p>
            </div>
          </div>
          
          <div className="glass-card p-6 md:p-8 reveal">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-serif text-white mb-3">A New Chapter Begins</h3>
                <p className="text-white/80 mb-4">
                  The 7FOUNDERS represents the next evolution of our community—a structured forum where the unique skills, discipline, and perspective forged beneath the waves can be channeled into entrepreneurial success.
                </p>
                <p className="text-white/80">
                  This isn't just an event; it's the launch of a movement that will redefine what's possible when submarine veterans apply their expertise to business challenges.
                </p>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000"
                    alt="Ocean depths" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={onVideoPlay}
                      className="w-16 h-16 rounded-full bg-gold/20 backdrop-blur-md border border-gold/40 flex items-center justify-center cursor-pointer hover:bg-gold/30 transition-colors transform hover:scale-110 duration-300"
                      aria-label="Play video"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
