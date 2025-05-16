import React from 'react';
import SpeakerCard from '@/components/SpeakerCard';
import { SpeakerType } from '@/types/speaker';

interface SpeakersSectionProps {
  speakers: SpeakerType[];
  onSpeakerClick: (index: number) => void;
}

const SpeakersSection: React.FC<SpeakersSectionProps> = ({ speakers, onSpeakerClick }) => {
  return (
    <section id="speakers" className="py-20 relative bg-navy-dark/50">
      <div className="absolute inset-0 bg-navy-texture opacity-30 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 reveal">Distinguished Speakers</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 reveal"></div>
          <p className="text-white/80 max-w-2xl mx-auto reveal">
            Learn from industry leaders, successful entrepreneurs, and special guests who understand the unique perspective that submarine service provides.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className={`reveal ${speaker.featured ? 'md:col-span-3 lg:col-span-2' : ''}`}
              onClick={() => onSpeakerClick(index)}
            >
              <SpeakerCard {...speaker} interactive />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
