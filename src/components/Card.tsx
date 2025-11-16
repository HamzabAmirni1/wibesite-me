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
        "bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg border border-border-color-light relative overflow-hidden w-full group transition-shadow duration-300",
        !disableHoverEffect && "hover:shadow-xl",
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
