import React, { useState } from 'react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: 'yes',
    dietary: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      toast.success("RSVP successfully submitted!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 animate-fade-in text-center">
        <h3 className="text-gold text-2xl font-serif mb-4">Thank You!</h3>
        <p className="text-white/80 mb-6">
          Your RSVP has been successfully submitted. We look forward to seeing you at the 7Founders launch event!
        </p>
        <div className="w-20 h-20 mx-auto relative">
          <div className="sonar-wrapper">
            <div className="sonar-emitter bg-gold/20 flex items-center justify-center">
              <span className="text-gold text-3xl">✓</span>
            </div>
            <div className="sonar-wave"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 md:p-8 animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white/90 mb-1 text-sm">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 bg-navy-dark border border-white/10 focus:border-gold/50 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all text-white"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-white/90 mb-1 text-sm">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 bg-navy-dark border border-white/10 focus:border-gold/50 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all text-white"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-white/90 mb-1 text-sm">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full px-4 py-2 bg-navy-dark border border-white/10 focus:border-gold/50 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all text-white"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="attending" className="block text-white/90 mb-1 text-sm">Will you attend?</label>
            <select
              id="attending"
              name="attending"
              required
              className="w-full px-4 py-2 bg-navy-dark border border-white/10 focus:border-gold/50 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all text-white"
              value={formData.attending}
              onChange={handleChange}
            >
              <option value="yes">Yes, I will attend</option>
              <option value="no">No, I cannot attend</option>
              <option value="maybe">Maybe, I'm not sure yet</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="dietary" className="block text-white/90 mb-1 text-sm">Dietary Restrictions</label>
            <input
              id="dietary"
              name="dietary"
              type="text"
              className="w-full px-4 py-2 bg-navy-dark border border-white/10 focus:border-gold/50 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all text-white"
              placeholder="Optional"
              value={formData.dietary}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-white/90 mb-1 text-sm">Additional Notes</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="w-full px-4 py-2 bg-navy-dark border border-white/10 focus:border-gold/50 rounded-md focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all text-white"
              placeholder="Optional"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full py-3 rounded-md font-medium transition-all duration-300 relative overflow-hidden group",
            isSubmitting ? "bg-navy-light cursor-not-allowed" : "bg-gold text-navy-dark hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          )}
        >
          <span className="relative z-10">
            {isSubmitting ? "Submitting..." : "Confirm RSVP"}
          </span>
          <span className="absolute inset-0 bg-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </button>
      </form>
    </div>
  );
};

export default RsvpForm;
