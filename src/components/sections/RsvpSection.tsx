import React, { useEffect } from 'react';
import GoldButton from '@/components/GoldButton';

const RsvpSection: React.FC = () => {
  useEffect(() => {
    // Load Luma script
    const script = document.createElement('script');
    script.id = 'luma-checkout';
    script.src = 'https://embed.lu.ma/checkout-button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.getElementById('luma-checkout');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor behavior
    // Luma script should handle the popup
  };

  return (
    <section id="rsvp" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 reveal">RSVP</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 reveal"></div>
          <p className="text-white/80 max-w-2xl mx-auto reveal">
            Secure your place at this exclusive gathering. Limited spots available.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto text-center reveal">
          <GoldButton
            href="https://lu.ma/event/evt-icolKpkYicCgNmk"
            size="lg"
            data-luma-action="checkout"
            data-luma-event-id="evt-icolKpkYicCgNmk"
            onClick={handleButtonClick}
          >
            RSVP Now
          </GoldButton>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
