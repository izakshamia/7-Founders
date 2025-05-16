import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import EventSection from '@/components/sections/EventSection';
import SpeakersSection from '@/components/sections/SpeakersSection';
import AgendaSection from '@/components/sections/AgendaSection';
import LocationSection from '@/components/sections/LocationSection';
import RsvpSection from '@/components/sections/RsvpSection';
import FooterSection from '@/components/sections/FooterSection';
import VideoModal from '@/components/modals/VideoModal';
import SpeakerModal from '@/components/modals/SpeakerModal';
import { speakers } from '@/data/speakersData';
import { agendaItems } from '@/data/agendaData';
import { SpeakerType } from '@/types/speaker';

const Index = () => {
  // Animation effect for sections
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  // Modal states
  const [activeVideoPreview, setActiveVideoPreview] = useState<boolean>(false);
  const [activeSpeaker, setActiveSpeaker] = useState<number | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<SpeakerType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Keyboard event for closing modals
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideoPreview(false);
        setActiveSpeaker(null);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleOpenModal = (speaker: SpeakerType) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedSpeaker(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-navy bg-navy-texture">
      <Navbar />
      
      <HeroSection />
      
      <EventSection onVideoPlay={() => setActiveVideoPreview(true)} />
      
      <SpeakersSection 
        speakers={speakers}
        onSpeakerClick={(index) => setActiveSpeaker(index)} 
      />
      
      <AgendaSection agendaItems={agendaItems} />
      
      <LocationSection />
      
      <RsvpSection />
      
      <FooterSection />
      
      {/* Modals */}
      <VideoModal 
        isOpen={activeVideoPreview} 
        onClose={() => setActiveVideoPreview(false)} 
      />
      
      <SpeakerModal 
        speaker={activeSpeaker !== null ? speakers[activeSpeaker] : null}
        onClose={() => setActiveSpeaker(null)}
      />
    </div>
  );
};

export default Index;
