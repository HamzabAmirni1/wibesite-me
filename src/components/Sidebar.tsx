import React, { useRef } from 'react';
import { navLinks } from '../constants';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, isOpen }) => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();
  
  // Force re-render when language changes
  React.useEffect(() => {
    // This effect will run whenever the language changes
  }, [language]);

  return (
    <aside className={cn(
      "fixed top-0 left-0 h-screen bg-primary text-white shadow-xl transition-transform duration-300 ease-in-out z-40",
      "w-72 flex flex-col",
      "lg:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="text-center p-8 pb-6 flex-shrink-0">
        <div className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-white/30 shadow-lg bg-white flex items-center justify-center">
            <span className="text-3xl font-bold text-primary">HA</span>
        </div>
        <h1 className="text-xl font-bold">حمزة اعمرني</h1>
        <p className="text-sm text-white/80 mt-1">مبرمج وصانع محتوى تقني</p>
        <div className="mt-4 flex justify-center gap-2 text-xs">
          <button
            onClick={() => setLanguage('ar')}
            className={cn(
              'px-3 py-1 rounded-full border border-white/40',
              language === 'ar' ? 'bg-white text-primary' : 'bg-white/10 text-white/80'
            )}
          >
            AR
          </button>
          <button
            onClick={() => setLanguage('fr')}
            className={cn(
              'px-3 py-1 rounded-full border border-white/40',
              language === 'fr' ? 'bg-white text-primary' : 'bg-white/10 text-white/80'
            )}
          >
            FR
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={cn(
              'px-3 py-1 rounded-full border border-white/40',
              language === 'en' ? 'bg-white text-primary' : 'bg-white/10 text-white/80'
            )}
          >
            EN
          </button>
        </div>
        <div className="w-1/2 h-px bg-white/20 mx-auto mt-6"></div>
      </div>
      
      <div ref={navContainerRef} className="flex-1 overflow-y-auto custom-scrollbar">
        <nav className="p-6 pt-0 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveSection(link.id)}
              className={cn(
                "flex items-center gap-4 p-3 rounded-lg font-semibold text-base transition-all duration-200 flex-shrink-0",
                activeSection === link.id
                  ? "bg-white/90 text-primary shadow-lg scale-105"
                  : "text-white/90 hover:bg-white/20 hover:translate-x-1"
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <link.icon className="w-5 h-5" />
              {t(`navLabels.${link.id}`, language) || link.title}
            </motion.a>
          ))}
        </nav>
        
        {/* Footer Links */}
        <div className="p-6 pt-0 border-t border-white/20">
          <div className="text-xs text-white/60 space-y-2">
            <div className="flex flex-wrap gap-3 justify-center">
              <button 
                onClick={() => setActiveSection('privacy')}
                className="hover:text-white transition-colors"
              >
                {t('navLabels.privacy', language)}
              </button>
              <button 
                onClick={() => setActiveSection('terms')}
                className="hover:text-white transition-colors"
              >
                {t('navLabels.terms', language)}
              </button>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <button 
                onClick={() => setActiveSection('contact')}
                className="hover:text-white transition-colors"
              >
                {t('navLabels.contact', language)}
              </button>
              <button 
                onClick={() => setActiveSection('disclaimer')}
                className="hover:text-white transition-colors"
              >
                {t('navLabels.disclaimer', language)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
