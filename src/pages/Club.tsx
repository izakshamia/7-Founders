import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ClubSection from '@/components/sections/ClubSection';
import FooterSection from '@/components/sections/FooterSection';
import GoldButton from '@/components/GoldButton';
import JoinClubModal from '@/components/modals/JoinClubModal';

const Club = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-navy bg-navy-texture">
      <Navbar />
      <ClubSection onJoinClick={() => setIsJoinModalOpen(true)} />
      <FooterSection />
      
      <JoinClubModal 
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </div>
  );
};

export default Club; 