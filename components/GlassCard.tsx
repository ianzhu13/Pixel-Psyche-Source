import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'heavy' | 'interactive';
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', variant = 'light', onClick }) => {
  const baseStyles = "backdrop-filter backdrop-blur-xl border rounded-2xl transition-all duration-300";
  
  // Updated variants for Light Theme
  const variants = {
    light: "bg-white/40 border-white/60 shadow-sm hover:bg-white/60",
    heavy: "bg-white/70 border-white/80 shadow-md",
    interactive: "bg-white/40 border-white/60 shadow-sm hover:bg-white/80 hover:scale-[1.02] hover:border-white/80 hover:shadow-md cursor-pointer active:scale-95"
  };

  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;