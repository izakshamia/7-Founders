import React from 'react';
import { cn } from '@/lib/utils';
import { UserCircle2, Anchor } from 'lucide-react';

interface SpeakerProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  featured?: boolean;
  interactive?: boolean;
}

const SpeakerCard: React.FC<SpeakerProps> = ({
  name,
  title,
  description,
  imageSrc,
  featured = false,
  interactive = false
}) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden transition-all duration-500 hover:shadow-xl group relative",
        featured ? "md:col-span-2 bg-gradient-to-br from-navy-light to-navy via-navy-dark border-gold/20" : "border-white/10",
        interactive && "hover:border-gold/40 cursor-pointer transform hover:translate-y-[-4px]"
      )}
    >
      {/* Submarine-themed decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute -left-3 top-10 w-6 h-6 rounded-full border-2 border-gold/20 opacity-30"></div>
      <div className="absolute -right-3 bottom-10 w-6 h-6 rounded-full border-2 border-gold/20 opacity-30"></div>
      
      <div className={cn(
        "flex flex-col",
        featured ? "md:flex-row" : ""
      )}>
        <div className={cn(
          "relative overflow-hidden", 
          featured ? "md:w-1/2" : "w-full"
        )}>
          <div className="aspect-[4/3] relative">
            <img 
              src={imageSrc} 
              alt={name} 
              className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-smooth-spring"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
            
            {/* Submarine-themed overlay */}
            <div className="absolute inset-0 bg-navy/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-gold/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300"></div>
              </div>
            </div>
            
            {interactive && (
              <div className="absolute inset-0 bg-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-gold/20 backdrop-blur-sm rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  {featured ? (
                    <Anchor className="w-6 h-6 text-white" />
                  ) : (
                    <UserCircle2 className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className={cn(
          "p-6 flex flex-col justify-center",
          featured ? "md:w-1/2" : ""
        )}>
          <div className="mb-2">
            <span className="px-2 py-1 bg-gold-dark/20 text-gold-light text-xs rounded-full">
              {featured ? "Special Guest" : "Speaker"}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-white mb-1">
            {name}
          </h3>
          <p className="text-gold-light text-sm mb-3">{title}</p>
          <p className="text-white/70 text-sm md:text-base line-clamp-3 md:line-clamp-none">
            {description}
          </p>
          
          {interactive && (
            <div className="mt-4 text-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
              <span>View profile</span>
              <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
