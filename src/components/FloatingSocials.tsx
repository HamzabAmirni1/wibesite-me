import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../constants';

// Show only three social buttons
const desiredOrder = ['إنستجرام', 'الفيسبوك', 'واتساب'];
const floatingSocials = desiredOrder
  .map(name => socialLinks.find(link => link.name === name))
  .filter(Boolean) as typeof socialLinks;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

const iconColors: { [key: string]: string } = {
  'الفيسبوك': 'hover:bg-blue-600',
  'اليوتيوب': 'hover:bg-red-600',
  'إنستجرام': 'hover:bg-pink-500',
  'واتساب': 'hover:bg-green-500',
  'تيليجرام': 'hover:bg-sky-500',
};

const FloatingSocials: React.FC = () => {
  return (
    <motion.div 
      className="fixed bottom-24 lg:bottom-6 right-6 z-50 flex flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {floatingSocials.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.name || ''}
          className={`bg-dark-color/80 backdrop-blur-sm text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-colors duration-300 ${iconColors[link.name] || 'hover:bg-primary'}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <link.IconComponent size={28} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FloatingSocials;
