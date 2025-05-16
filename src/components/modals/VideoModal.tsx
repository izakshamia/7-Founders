
import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-navy-dark/90 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full">
        <button 
          className="absolute -top-12 right-0 text-white hover:text-gold-light transition-colors"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <div className="aspect-video rounded-lg overflow-hidden shadow-2xl shadow-gold/10">
          <div className="w-full h-full bg-navy-light flex items-center justify-center">
            <p className="text-white text-center p-8">Video coming soon. Stay tuned!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
