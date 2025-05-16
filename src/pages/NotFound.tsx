
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnchorIcon } from "lucide-react";
import GoldButton from "@/components/GoldButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy bg-navy-texture">
      <div className="absolute inset-0 bg-deep-ocean opacity-80 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-72 h-72 rounded-full bg-gold/5 blur-3xl top-1/4 left-1/4 animate-float"></div>
        <div className="absolute w-96 h-96 rounded-full bg-navy-light/30 blur-3xl bottom-1/4 right-1/4 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="glass-card p-10 md:p-12 max-w-md w-full mx-auto text-center relative z-10 animate-fade-in">
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="sonar-wrapper">
            <div className="sonar-emitter flex items-center justify-center">
              <AnchorIcon className="h-10 w-10 text-gold" />
            </div>
            <div className="sonar-wave"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gold-light mb-2">Depth Warning</p>
        <p className="text-white/80 mb-8">
          The route you're looking for seems to have drifted into deeper waters.
        </p>
        
        <GoldButton href="/" size="lg" className="w-full">
          Return to Surface
        </GoldButton>
      </div>
    </div>
  );
};

export default NotFound;
