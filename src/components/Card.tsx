import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  disableHoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, disableHoverEffect = false }) => {
  return (
    <motion.div
      className={cn(
        "bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-white/40 dark:border-white/10 relative overflow-hidden w-full group transition-all duration-500",
        !disableHoverEffect && "hover:shadow-[0_8px_30px_rgb(79,70,229,0.15)] hover:border-primary/30 dark:hover:border-primary/50",
        className
      )}
      whileHover={!disableHoverEffect ? { y: -8 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
      {children}
    </motion.div>
  );
};

export default Card;
