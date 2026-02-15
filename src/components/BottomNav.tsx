import React from 'react';
import { navLinks } from '../constants';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

interface BottomNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

// Show only the first 5 important links for mobile bottom nav
const bottomNavLinks = navLinks.slice(0, 5);

const BottomNav: React.FC<BottomNavProps> = ({ activeSection, setActiveSection }) => {
  const { language } = useLanguage();
  
  // Force re-render when language changes
  React.useEffect(() => {
    // This effect will run whenever the language changes
  }, [language]);
  
  return (
    <div className="lg:hidden fixed bottom-0 right-0 left-0 bg-white/80 backdrop-blur-lg shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] z-40">
      <nav className="flex justify-around items-center h-20">
        {bottomNavLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => setActiveSection(link.id)}
            className={cn(
              "flex flex-col items-center justify-center gap-1 text-gray-500 transition-colors duration-300 w-full h-full",
              activeSection === link.id && "text-primary"
            )}
          >
            <link.icon className="w-6 h-6" />
            <span className="text-xs font-semibold">{t(`navLabels.${link.id}`, language) || link.title}</span>
            {activeSection === link.id && (
              <motion.div 
                className="absolute bottom-2 w-6 h-1 bg-primary rounded-full"
                layoutId="bottom-nav-active"
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default BottomNav;
