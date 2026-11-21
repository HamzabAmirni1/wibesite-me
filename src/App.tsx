import React, { Suspense, lazy, useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import FloatingSocials from './components/FloatingSocials';
import IntroAnimation from './components/IntroAnimation';
import CookieConsent from './components/CookieConsent';
import NetworkStatus from './components/NetworkStatus';
import SearchModal from './components/SearchModal';
import { NavigationContext } from './contexts/NavigationContext';
import { usePerformance } from './hooks/usePerformance';
import { useLanguage } from './contexts/LanguageContext';
import { t } from './i18n';
import { Menu, Search, X, ArrowUp } from 'lucide-react';
import { cn } from './lib/utils';
import DarkModeToggle from './components/DarkModeToggle';
import Background3D from './components/Background3D';
import AmirniAI from './components/AmirniAI';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Apps = lazy(() => import('./pages/Apps'));
const About = lazy(() => import('./pages/About'));
const Videos = lazy(() => import('./pages/Videos'));
const Programming = lazy(() => import('./pages/Programming'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Bots = lazy(() => import('./pages/Bots'));
const Tools = lazy(() => import('./pages/Tools'));
const Articles = lazy(() => import('./pages/Articles'));
const Chat = lazy(() => import('./pages/Chat'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Contact = lazy(() => import('./pages/Contact'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const sectionComponents: { [key: string]: React.LazyExoticComponent<React.FC<{}>> } = {
  home: Home,
  about: About,
  projects: Projects,
  videos: Videos,
  programming: Programming,
  apps: Apps,
  services: Services,
  bots: Bots,
  tools: Tools,
  gaza: Articles, // 'gaza' id maps to Articles page
  chat: Contact,
  privacy: Privacy,
  terms: Terms,
  contact: Contact,
  disclaimer: Disclaimer,
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return sectionComponents[hash] ? hash : 'home';
  });
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const [isIntroFinished, setIntroFinished] = useState(sessionStorage.getItem('introShown') === 'true');
  const [showIntro, setShowIntro] = useState(!isIntroFinished);

  const mainContentRef = React.useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  // Initialize performance optimizations
  usePerformance();

  const [isDark, setIsDark] = useState(() => {
    // Only use user's explicit preference — NOT system preference
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDark.toString());
  }, [isDark]);

  const toggleDark = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (sectionComponents[hash]) {
        setActiveSection(hash);
      } else if (!hash) {
        setActiveSection('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setSidebarOpen(true);
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const mainContent = mainContentRef.current;
    if (!mainContent) return;

    const handleScroll = () => {
      if (mainContent.scrollTop > 300) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };

    mainContent.addEventListener('scroll', handleScroll);
    return () => mainContent.removeEventListener('scroll', handleScroll);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('introShown', 'true');
    setIntroFinished(true);
  };

  const handleSetSection = (section: string) => {
    setActiveSection(section);
    window.location.hash = section;
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
    mainContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    mainContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ActiveComponent = sectionComponents[activeSection] || Home;

  const navigationContextValue = {
    setActiveSection: handleSetSection
  };

  return (
    <NavigationContext.Provider value={navigationContextValue}>
      <Background3D />
      <AnimatePresence>
        {showIntro && <IntroAnimation onAnimationComplete={handleIntroComplete} />}
      </AnimatePresence>

      <div
        className={cn("flex min-h-screen bg-transparent", "dark:bg-transparent")}
      >
        <Sidebar
          activeSection={activeSection}
          setActiveSection={handleSetSection}
          isOpen={isSidebarOpen}
          onSearchClick={() => setSearchOpen(true)}
        />

        <main
          ref={mainContentRef}
          className={cn(
            "flex-1 h-screen overflow-y-auto transition-all duration-300 ease-in-out",
            "lg:ml-72" // Use ml for left margin to accommodate the left-fixed sidebar
          )}
        >
          <div className="p-4 sm:p-8 max-w-7xl mx-auto pb-28 lg:pb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Suspense fallback={<div className="flex justify-center items-center h-96 text-primary font-bold">{t('commonTexts.loading', language)}</div>}>
                  <ActiveComponent />
                </Suspense>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* Top Actions for Mobile & Desktop */}
        <div className="fixed top-4 right-4 z-50 flex gap-2 top-actions-container">
          <DarkModeToggle isDark={isDark} onToggle={toggleDark} />
          {/* Search Button – 3D glass style */}
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className={cn(
              "relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer select-none",
              "transition-all duration-300 active:scale-90 active:translate-y-[2px]",
              isDark
                ? "bg-slate-800 border border-white/10 shadow-[0_0_12px_rgba(59,130,246,0.2),0_4px_10px_rgba(0,0,0,0.5)] text-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                : "bg-white border border-blue-100 shadow-[0_0_12px_rgba(29,78,216,0.15),0_4px_10px_rgba(0,0,0,0.1)] text-primary hover:shadow-[0_0_20px_rgba(29,78,216,0.25)]"
            )}
          >
            {/* depth layer */}
            <span className={cn(
              "absolute inset-0 rounded-full -z-10 translate-y-[3px]",
              isDark ? "bg-blue-900/50" : "bg-blue-100/80"
            )} style={{ filter: 'blur(1px)' }} />
            <Search className="w-5 h-5" />
          </button>

          {/* Hamburger – 3D glass style (mobile only) */}
          <button
            className={cn(
              "lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer select-none",
              "transition-all duration-300 active:scale-90 active:translate-y-[2px]",
              isDark
                ? "bg-slate-800 border border-white/10 shadow-[0_0_12px_rgba(59,130,246,0.2),0_4px_10px_rgba(0,0,0,0.5)] text-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                : "bg-white border border-blue-100 shadow-[0_0_12px_rgba(29,78,216,0.15),0_4px_10px_rgba(0,0,0,0.1)] text-primary hover:shadow-[0_0_20px_rgba(29,78,216,0.25)]"
            )}
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <span className={cn(
              "absolute inset-0 rounded-full -z-10 translate-y-[3px]",
              isDark ? "bg-blue-900/50" : "bg-blue-100/80"
            )} style={{ filter: 'blur(1px)' }} />
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Floating Dark Mode Toggle – removed (handled by top bar) */}

        {/* Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setSearchOpen(false)}
          setActiveSection={handleSetSection}
        />

        {/* Bottom Navigation for Mobile */}
        <BottomNav
          activeSection={activeSection}
          setActiveSection={handleSetSection}
          onSearchClick={() => setSearchOpen(true)}
        />

        {/* Floating Social Icons */}
        <FloatingSocials />

        {/* Amirni AI Assistant */}
        <AmirniAI />

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showToTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-24 lg:bottom-6 left-6 z-50 bg-gradient-to-br from-primary to-secondary text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center scroll-to-top-button"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUp />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Cookie Consent */}
        <CookieConsent />

        {/* Network Status */}
        <NetworkStatus />
      </div>
    </NavigationContext.Provider>
  );
};

export default App;
