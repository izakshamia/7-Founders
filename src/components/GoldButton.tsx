import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRightIcon, AnchorIcon } from 'lucide-react';

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  children: React.ReactNode;
  href?: string;
  showArrow?: boolean;
  showAnchor?: boolean;
}

const GoldButton: React.FC<GoldButtonProps> = ({
  variant = 'default',
  size = 'default',
  className,
  children,
  href,
  showArrow = false,
  showAnchor = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";
  
  const variants = {
    default: "bg-gold hover:bg-gold-light text-navy-dark",
    outline: "border-2 border-gold text-gold hover:bg-gold/10"
  };
  
  const sizes = {
    default: "h-10 px-6 py-2",
    sm: "h-9 px-4",
    lg: "h-12 px-8 text-lg"
  };
  
  const Component = href ? 'a' : 'button';
  
  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {showAnchor && (
          <AnchorIcon
            size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16}
            className="transition-transform duration-300"
          />
        )}
        {children}
        {showArrow && (
          <ArrowRightIcon 
            size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} 
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      
      {/* Submarine-like sonar ripple effect */}
      <span className="absolute inset-0 rounded-md overflow-hidden">
        <span className="absolute -inset-[100%] rounded-full opacity-0 group-hover:opacity-100 bg-gold/10 transform scale-0 group-hover:scale-100 transition-all duration-1000"></span>
        <span className="absolute -inset-[100%] rounded-full opacity-0 group-hover:opacity-70 bg-gold/5 transform scale-0 group-hover:scale-100 transition-all duration-1500 delay-200"></span>
      </span>
    </>
  );
  
  return (
    <Component
      href={href}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {content}
    </Component>
  );
};

export default GoldButton;
