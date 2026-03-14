import React from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TypewriterText: React.FC<TypewriterProps> = ({ text, className = '', delay = 0 }) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.04, duration: 0.2 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const WordReveal: React.FC<WordRevealProps> = ({ text, className = '', delay = 0, stagger = 0.1 }) => {
  const words = text.split(' ');
  return (
    <span className={`inline-flex flex-wrap gap-x-1 ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: delay + i * stagger,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

interface GradientTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const GradientText: React.FC<GradientTextProps> = ({ text, className = '', delay = 0 }) => {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] ${className}`}
      initial={{ backgroundPosition: '0% center', opacity: 0 }}
      animate={{ backgroundPosition: ['0% center', '200% center', '0% center'], opacity: 1 }}
      transition={{
        backgroundPosition: { duration: 4, repeat: Infinity, ease: 'linear', delay },
        opacity: { duration: 0.6, delay },
      }}
    >
      {text}
    </motion.span>
  );
};

export default TypewriterText;
