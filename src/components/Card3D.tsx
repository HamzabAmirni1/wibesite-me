import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export const Card3D: React.FC<Card3DProps> = ({ children, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  // Motion values to track mouse position for the glare
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const normalizedX = (x / width) - 0.5;
    const normalizedY = (y / height) - 0.5;

    // Premium subtle rotation (max 5 degrees) to prevent overlapping and clipping
    setRotateX(-normalizedY * 5);
    setRotateY(normalizedX * 5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  // Dynamic background style for the moving glare (soft glassmorphic light shine)
  const glareBackground = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.08),
      transparent 80%
    )
  `;

  // Dynamic border glow highlight for extra premium feel (especially in dark mode)
  const borderBackground = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      rgba(99, 102, 241, 0.2),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY, y: isHovered ? -4 : 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      style={{ 
        transformStyle: 'preserve-3d', 
        perspective: 1000 
      }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-[0_20px_50px_rgba(99,102,241,0.15)]' : 'shadow-[0_8px_30px_rgb(0,0,0,0.02)]'} ${className}`}
    >
      {/* Interactive Border Glow for dark/light mode */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 transition-opacity duration-300"
        style={{ background: borderBackground }}
      />

      {/* Main card content container */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Moving Glare Overlay */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
        style={{ 
          background: glareBackground,
          opacity: isHovered ? 1 : 0
        }}
      />
    </motion.div>
  );
};

export default Card3D;
