import React from 'react';

interface SpecialTitleProps {
  title: string;
  className?: string;
}

const SpecialTitle: React.FC<SpecialTitleProps> = ({ title, className = '' }) => {
  // Logic: Check for keywords
  // 1. Fire / Burning
  const isFire = /Fire|Feu|燃烧|燃燒/i.test(title);
  
  // 2. Neon / City Lights / Jazz / Cyberpunk
  const isNeon = /La La Land|Blade Runner|Fleabag|爱乐|银翼|伦敦生活|乐来越爱你|燃燒女子的畫像/i.test(title);

  if (isFire) {
    return (
      <h3 className={`font-serif font-bold tracking-wide ${className} effect-burn`}>
        {title}
      </h3>
    );
  }

  if (isNeon) {
    return (
      <h3 className={`font-serif font-semibold tracking-wide ${className} effect-flicker`}>
        {title}
      </h3>
    );
  }

  // Default elegant style
  return (
    <h3 className={`font-serif text-slate-900 ${className}`}>
      {title}
    </h3>
  );
};

export default SpecialTitle;