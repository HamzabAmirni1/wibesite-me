import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [glareStyle, setGlareStyle] = useState({
    x: "50%",
    y: "50%",
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disableHoverEffect) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlareStyle({ x: `${x}%`, y: `${y}%`, opacity: 0.07 });
  };

  const handleMouseLeave = () => {
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-8",
        "shadow-lg border border-border-color-light dark:border-white/10",
        "overflow-hidden w-full group",
        !disableHoverEffect && "hover:shadow-2xl cursor-default",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={!disableHoverEffect ? { y: -6, scale: 1.005 } : {}}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      {/* Top gradient bar */}
      <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

      {/* Bottom glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Shimmer sweep on hover */}
      {!disableHoverEffect && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="shimmer-sweep absolute inset-0" />
        </motion.div>
      )}

      {/* Mouse-follow glare spot */}
      {!disableHoverEffect && (
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 120px at ${glareStyle.x} ${glareStyle.y}, rgba(255,255,255,0.18), transparent 80%)`,
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
