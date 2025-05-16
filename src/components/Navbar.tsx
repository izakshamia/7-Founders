import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { AnchorIcon, MenuIcon, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Calculate scroll progress for the progress bar
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#event', label: 'Event' },
    { href: '/#speakers', label: 'Speakers' },
    { href: '/#agenda', label: 'Agenda' },
    { href: '/#location', label: 'Location' },
    { href: '/#rsvp', label: 'RSVP' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth-spring px-6 md:px-10 py-4",
        isScrolled ? "bg-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-white transition-transform duration-300 hover:scale-105"
        >
          <AnchorIcon className="h-6 w-6 text-gold animate-float" />
          <span className="font-serif text-xl md:text-2xl font-semibold">7FOUNDERS</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-white/80 hover:text-gold-light transition-colors duration-300 hover-underline",
                location.pathname === link.href && "text-gold-light"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/club"
            className="border border-gold text-gold hover:bg-gold/10 px-4 py-2 rounded-md font-medium transition-all duration-300"
          >
            Join Club
          </Link>
          <Link
            to="/#rsvp"
            className="bg-gold text-navy-dark hover:bg-gold-light px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            RSVP Now
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white/90 hover:text-gold-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gold-light" style={{ width: `${scrollProgress}%`, transition: 'width 0.2s ease-out' }}></div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-navy-dark/95 backdrop-blur-lg z-40 pt-20 px-6 transition-all duration-300 ease-smooth-spring md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"
        )}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-white/90 hover:text-gold-light text-xl font-medium transition-colors duration-300",
                location.pathname === link.href && "text-gold-light"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/club"
            className="border border-gold text-gold hover:bg-gold/10 px-4 py-3 rounded-md font-medium transition-all duration-300 text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Club
          </Link>
          <Link
            to="/#rsvp"
            className="bg-gold text-navy-dark hover:bg-gold-light px-4 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            RSVP Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
