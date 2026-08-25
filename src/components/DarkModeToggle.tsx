import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

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
      className={`
        relative p-2 sm:p-3 rounded-full transition-all duration-300 flex items-center gap-2
        ${isDark
          ? 'bg-zinc-900 text-yellow-400 border border-zinc-800'
          : 'bg-white text-gray-800 border border-gray-200'
        }
        hover:scale-105 shadow-xl group
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </motion.div>
      <span className="hidden md:block text-xs font-bold uppercase tracking-wider">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </motion.button>
  );
};

export default DarkModeToggle;
