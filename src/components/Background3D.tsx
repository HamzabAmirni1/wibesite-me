import React, { memo } from 'react';

export const Background3D: React.FC = memo(() => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Subtle modern dot grid - ultra lightweight CSS */}
      <div 
        className="absolute inset-0 z-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Gentle soft ambient gradient glows (hardware-accelerated, non-blocking) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl" />
    </div>
  );
});

export default Background3D;
