import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

interface IntroAnimationProps {
  onAnimationComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
  const { language } = useLanguage();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 4000); // Total duration of the intro animation: 4 seconds

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    },
  };

  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', damping: 12, stiffness: 100 }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 1.8 }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center text-white intro-gradient"
      variants={containerVariants}
      initial="initial"
      exit="exit"
      key="intro"
    >
      <motion.div 
        className="flex items-center justify-center"
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          variants={letterVariants} 
          className="text-8xl md:text-9xl font-black text-primary"
          style={{ filter: 'drop-shadow(0 0 15px rgba(124, 58, 237, 0.7))' }}
        >
          H
        </motion.span>
        <motion.span 
          variants={letterVariants} 
          className="text-8xl md:text-9xl font-black"
        >
          A
        </motion.span>
      </motion.div>
      <motion.div 
        className="text-center mt-4"
        initial="hidden"
        animate="visible"
        variants={subtitleVariants}
      >
        <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
          {t('heroContent.name', language)}
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-1">
          {t('heroContent.subtitle', language)}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default IntroAnimation;
