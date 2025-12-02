import React from 'react';
import { ViewState } from '../types';

interface BackgroundProps {
  view: ViewState;
}

const Background: React.FC<BackgroundProps> = ({ view }) => {
  const isPortal = view === 'portal';
  
  // Base gradients shift depending on the view/context (conceptually)
  // Using distinct blobs to create the "lava lamp" effect behind the glass
  // Updated for Light/Gray-White Theme: Using pastels and subtle grays
  
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-gray-50 transition-colors duration-1000">
      {/* Main Gradient Wash */}
      <div className={`absolute inset-0 opacity-60 transition-opacity duration-1000 ${isPortal ? 'opacity-80' : 'opacity-40'}`}>
        {/* Cool/Neutral Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-slate-200/60 blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gray-200/60 blur-[120px] animate-float-delayed" />
        <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] rounded-full bg-blue-50/60 blur-[100px] animate-pulse" />
      </div>

      {/* Warm overlay for "Sanctuary" feel mixed in - Subtle warmth */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${view === 'sanctuary' || view === 'intersection' ? 'opacity-60' : 'opacity-0'}`}>
        <div className="absolute bottom-[10%] left-[10%] w-[50%] h-[50%] rounded-full bg-rose-100/50 blur-[130px]" />
        <div className="absolute top-[10%] right-[20%] w-[40%] h-[40%] rounded-full bg-amber-100/40 blur-[100px]" />
      </div>

      {/* Cool overlay for "Lab" feel mixed in */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${view === 'lab' ? 'opacity-60' : 'opacity-0'}`}>
        <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full bg-cyan-100/40 blur-[130px]" />
      </div>
      
      {/* Noise Texture Overlay for grit - kept subtle */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
};

export default Background;