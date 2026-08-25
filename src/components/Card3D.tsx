import React from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export const Card3D: React.FC<Card3DProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(99,102,241,0.12)] ${className}`}
    >
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default Card3D;
