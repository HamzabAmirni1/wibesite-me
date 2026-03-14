import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  disableHoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  disableHoverEffect = false,
}) => {
  const reducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  // Only track mouse if not on mobile/reduced motion
  const [glareStyle, setGlareStyle] = useState({
    x: "50%",
    y: "50%",
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disableHoverEffect || reducedMotion) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlareStyle({ x: `${x}%`, y: `${y}%`, opacity: 0.05 });
  };

  const handleMouseLeave = () => {
    if (reducedMotion) return;
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 sm:p-8",
        "shadow-md border border-gray-100 dark:border-white/5",
        "overflow-hidden w-full group",
        !disableHoverEffect && "hover:shadow-xl cursor-default",
        className,
      )}
      style={{ willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={!disableHoverEffect ? { y: -4, scale: reducedMotion ? 1 : 1.01 } : {}}
      transition={{ duration: 0.25, ease: 'easeOut' }} // Plain tween is lighter than spring
    >
      {/* Top gradient bar */}
      <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-10" />

      {/* Bottom glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Mouse-follow glare spot - only on desktop */}
      {!disableHoverEffect && !reducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle 120px at ${glareStyle.x} ${glareStyle.y}, rgba(255,255,255,0.12), transparent 80%)`,
            opacity: glareStyle.opacity,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
};

export default Card;
