import React from 'react';
import { useForm } from 'react-hook-form';

interface JoinClubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  error?: {
    message: string;
    code: string;
    details?: any;
  };
  details?: {
    name: boolean;
    phone: boolean;
    email: boolean;
  };
}

const JoinClubModal: React.FC<JoinClubModalProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setErrorMessage('');
      console.log('Submitting form data:', data);

      const response = await fetch('/api/join-club', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(errorText || 'Failed to submit form');
      }

      const result = await response.json();
      console.log('Response data:', result);

      if (result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-navy p-8 rounded-lg max-w-md w-full mx-4 glass-card">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-serif font-bold text-white mb-6">Join 7FOUNDERS</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white/80 mb-1">Name</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 bg-navy-light/30 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold"
            />
            {errors.name && (
              <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-white/80 mb-1">Phone</label>
            <input
              id="phone"
              type="tel"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9+\-\s()]*$/,
                  message: 'Please enter a valid phone number'
                }
              })}
              className="w-full px-4 py-2 bg-navy-light/30 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold"
            />
            {errors.phone && (
              <p className="mt-1 text-red-400 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-white/80 mb-1">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              className="w-full px-4 py-2 bg-navy-light/30 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold"
            />
            {errors.email && (
              <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-gold text-navy font-medium rounded-lg hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-400 text-center">Thank you for joining! We'll be in touch soon.</p>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-400 text-center space-y-2">
              <p>{errorMessage}</p>
              <p className="text-sm">Please try again or contact support if the problem persists.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default JoinClubModal; 