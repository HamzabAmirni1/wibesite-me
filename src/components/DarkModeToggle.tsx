import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
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
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`
        relative flex items-center gap-2 px-3 py-2 rounded-full select-none cursor-pointer
        transition-all duration-300 shadow-lg
        ${isDark
          ? 'bg-gray-800 border border-gray-700 text-gray-200'
          : 'bg-white border border-gray-200 text-gray-700'
        }
      `}
    >
      {/* Animated icon swap */}
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 30 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5 text-blue-300" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 30 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -30 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5 text-amber-400" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Label – desktop only */}
      <span className="hidden md:block text-xs font-bold uppercase tracking-widest">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </motion.button>
  );
};

export default DarkModeToggle;
