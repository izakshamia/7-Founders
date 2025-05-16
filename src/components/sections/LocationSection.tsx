import React from 'react';
import GoldButton from '@/components/GoldButton';
import { MapPinIcon } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 relative bg-navy-dark/50">
      <div className="absolute inset-0 bg-navy-texture opacity-30 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 reveal">Venue</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 reveal"></div>
          <p className="text-white/80 max-w-2xl mx-auto reveal">
            Join us at an exclusive venue that reflects the prestige and heritage of our community.
          </p>
        </div>
        
        <div className="glass-card overflow-hidden reveal">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <MapPinIcon className="w-6 h-6 text-gold mr-2" />
                <h3 className="text-xl font-serif text-white">The Playground Restaurant</h3>
              </div>
              
              <p className="text-white/80 mb-4">
                Playground Restaurant - 
                 כתובת: דרך מנחם בגין 144 ז׳, שוכנת בלובי מלון פליי מידטאון, תל אביב-יפו
              </p>
              
              <p className="text-white/80 mb-6">
                {/* An elegant waterfront venue with panoramic views of the Mediterranean, providing the perfect backdrop for our prestigious gathering. */}
              </p>
              
              <a
                href="https://www.google.com/maps/place/Playground+Restaurant+-+מסעדת+פלייגראונד%E2%80%AD/@32.0778045,34.7943252,17z/data=!3m1!4b1!4m6!3m5!1s0x151d4b1e09eff507:0xa466c318f978245e!8m2!3d32.0778045!4d34.7943252!16s%2Fg%2F11l24ff9hr?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-gold hover:text-gold-light transition-colors"
              >
                Get Directions
              </a>
            </div>
            
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://ichotels.co.il//octopus/upload/images/categories/playrest021.jpg" 
                alt="Event venue" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
