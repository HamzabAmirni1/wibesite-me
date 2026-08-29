import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DarkModeToggleProps {
  isDark?: boolean;
  onToggle?: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDark: propIsDark, onToggle }) => {
  const [localIsDark, setLocalIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  const isDark = propIsDark !== undefined ? propIsDark : localIsDark;

  useEffect(() => {
    if (propIsDark === undefined) {
      if (localIsDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', localIsDark.toString());
    }
  }, [localIsDark, propIsDark]);

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setLocalIsDark(!localIsDark);
    }
  };

  return (
    <motion.button
      onClick={handleToggle}
      aria-label="Toggle dark mode"
      whileTap={{ scale: 0.88, y: 2 }}
      whileHover={{ scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`
        relative flex items-center gap-2 px-4 py-2 rounded-full select-none cursor-pointer
        transition-colors duration-500
        ${isDark
          ? 'bg-[#0f172a] border border-indigo-500/30 shadow-[0_0_16px_rgba(99,102,241,0.35),0_4px_12px_rgba(0,0,0,0.6)] text-indigo-300'
          : 'bg-white border border-yellow-300/60 shadow-[0_0_16px_rgba(251,191,36,0.30),0_4px_12px_rgba(0,0,0,0.12)] text-yellow-500'
        }
      `}
      style={{
        perspective: '600px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* 3D bottom-edge depth layer */}
      <span
        className={`
          absolute inset-0 rounded-full -z-10 translate-y-[3px]
          ${isDark ? 'bg-indigo-900/60' : 'bg-yellow-200/80'}
        `}
        style={{ filter: 'blur(1px)' }}
      />

      {/* Animated icon */}
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center text-lg"
          >
            🌙
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center text-lg"
          >
            ☀️
          </motion.span>
        )}
      </AnimatePresence>

      {/* Label */}
      <span className="hidden md:block text-xs font-extrabold uppercase tracking-widest">
        {isDark ? 'Dark' : 'Light'}
      </span>

      {/* Glow pulse ring */}
      <motion.span
        className={`absolute inset-0 rounded-full pointer-events-none
          ${isDark ? 'bg-indigo-400/10' : 'bg-yellow-300/20'}
        `}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.button>
  );
};

export default DarkModeToggle;

