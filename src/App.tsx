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
import { Menu, X, ArrowUp, Search } from 'lucide-react';
import { cn } from './lib/utils';
import DarkModeToggle from './components/DarkModeToggle';

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
      <AnimatePresence>
        {showIntro && <IntroAnimation onAnimationComplete={handleIntroComplete} />}
      </AnimatePresence>

      <motion.div
        className={cn("flex min-h-screen bg-light-color-dark/30", "dark:bg-black")}
        initial={{ opacity: isIntroFinished ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: isIntroFinished ? 0 : 3.8 }}
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
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <DarkModeToggle />
          <button
            className="bg-white/70 backdrop-blur-sm p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Search className="w-6 h-6" />
          </button>
          <button
            className="lg:hidden bg-white/70 backdrop-blur-sm p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </div>

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

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showToTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-24 lg:bottom-6 left-6 z-50 bg-gradient-to-br from-primary to-secondary text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center"
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
      </motion.div>
    </NavigationContext.Provider>
  );
};

export default App;
