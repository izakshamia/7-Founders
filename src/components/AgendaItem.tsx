
import React from 'react';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

interface AgendaItemProps {
  time: string;
  title: string;
  description: string;
  highlight?: boolean;
  iconName?: string;
}

const AgendaItem: React.FC<AgendaItemProps> = ({
  time,
  title,
  description,
  highlight = false,
  iconName
}) => {
  // Dynamically render the icon based on the iconName
  const renderIcon = () => {
    if (!iconName) return null;
    
    // Get the icon component from lucide-react
    const IconComponent = (LucideIcons as any)[`${iconName}Icon`];
    
    if (!IconComponent) return null;
    
    return (
      <div className="absolute right-4 top-4 text-gold/30 group-hover:text-gold/50 transition-colors duration-300">
        <IconComponent size={20} />
      </div>
    );
  };

  return (
    <div className={cn(
      "relative pl-8 pb-10 group",
      highlight ? "animate-fade-in" : ""
    )}>
      {/* Timeline dot - styled as a submarine porthole */}
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gold z-10 group-hover:scale-125 transition-transform duration-300">
        <div className="absolute inset-0.5 rounded-full bg-navy-light border border-gold/30"></div>
      </div>
      
      {/* Vertical line styled as submarine pipe */}
      <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-gradient-to-b from-gold/40 via-white/10 to-white/10"></div>
      
      <div className={cn(
        "glass-card p-5 transition-all duration-300 group-hover:translate-x-1",
        highlight ? "border-gold/30 bg-navy-light/60" : "",
        "overflow-hidden" // For the submarine interior effect
      )}>
        {/* Submarine-like interior details */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold/10 via-gold/30 to-gold/10"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold/10 via-gold/30 to-gold/10"></div>
        <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-gold/10 via-gold/30 to-gold/10"></div>
        <div className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-gold/10 via-gold/30 to-gold/10"></div>
        
        <div className="flex items-center mb-2 text-gold-light">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm font-mono">{time}</span>
        </div>
        
        <h3 className="text-lg md:text-xl font-serif text-white mb-2 group-hover:text-gold-light transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-white/70 text-sm">
          {description}
        </p>
        
        {renderIcon()}
      </div>
    </div>
  );
};

export default AgendaItem;
