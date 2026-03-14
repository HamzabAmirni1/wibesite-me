import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
  const { language } = useLanguage();

  // ← reduced from 4000 → 2500 ms so the site feels snappy
  useEffect(() => {
    const timer = setTimeout(onAnimationComplete, 2500);
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center text-white intro-gradient"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      key="intro"
    >
      {/* HA logo letters */}
      <motion.div className="flex items-center justify-center gap-1">
        <motion.span
          className="text-7xl sm:text-8xl md:text-9xl font-black text-primary"
          style={{ filter: 'drop-shadow(0 0 12px rgba(124,58,237,0.65))' }}
          initial={{ opacity: 0, y: 32, scale: 0.6 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', damping: 14, stiffness: 120, delay: 0.2 }}
        >
          H
        </motion.span>
        <motion.span
          className="text-7xl sm:text-8xl md:text-9xl font-black text-white"
          initial={{ opacity: 0, y: 32, scale: 0.6 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', damping: 14, stiffness: 120, delay: 0.45 }}
        >
          A
        </motion.span>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider">
          {t('heroContent.name', language)}
        </h1>
        <p className="text-base sm:text-lg text-white/70 mt-1">
          {t('heroContent.subtitle', language)}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default IntroAnimation;
