import React, { Suspense, lazy, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";
import FloatingSocials from "./components/FloatingSocials";
import IntroAnimation from "./components/IntroAnimation";
import CookieConsent from "./components/CookieConsent";
import NetworkStatus from "./components/NetworkStatus";
import SearchModal from "./components/SearchModal";
import ScrollProgress from "./components/ScrollProgress";
import ParticleBackground from "./components/ParticleBackground";
import { NavigationContext } from "./contexts/NavigationContext";
import { usePerformance } from "./hooks/usePerformance";
import { useLanguage } from "./contexts/LanguageContext";
import { t } from "./i18n";
import { Menu, X, ArrowUp, Search } from "lucide-react";
import { cn } from "./lib/utils";
import DarkModeToggle from "./components/DarkModeToggle";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Apps = lazy(() => import("./pages/Apps"));
const About = lazy(() => import("./pages/About"));
const Videos = lazy(() => import("./pages/Videos"));
const Programming = lazy(() => import("./pages/Programming"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Bots = lazy(() => import("./pages/Bots"));
const Tools = lazy(() => import("./pages/Tools"));
const Articles = lazy(() => import("./pages/Articles"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));

const sectionComponents: {
  [key: string]: React.LazyExoticComponent<React.FC<object>>;
} = {
  home: Home,
  about: About,
  projects: Projects,
  videos: Videos,
  programming: Programming,
  apps: Apps,
  services: Services,
  bots: Bots,
  tools: Tools,
  gaza: Articles,
  chat: Contact,
  privacy: Privacy,
  terms: Terms,
  contact: Contact,
  disclaimer: Disclaimer,
};

// Page transition variants
const pageVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 40 : -40,
    scale: 0.98,
    filter: "blur(4px)",
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -40 : 40,
    scale: 0.98,
    filter: "blur(4px)",
    transition: {
      duration: 0.25,
      ease: [0.55, 0, 1, 0.45],
    },
  }),
};

// Loading fallback
const PageLoader: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex flex-col items-center justify-center h-96 gap-4">
    <motion.div
      className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary"
      animate={{ rotate: 360 }}
      transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
    />
    <motion.p
      className="text-primary font-semibold text-sm"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {label}
    </motion.p>
  </div>
);

const sectionOrder = [
  "home",
  "projects",
  "apps",
  "services",
  "bots",
  "about",
  "gaza",
  "tools",
  "programming",
  "videos",
  "contact",
  "chat",
  "privacy",
  "terms",
  "disclaimer",
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [prevSection, setPrevSection] = useState("home");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const [isIntroFinished, setIntroFinished] = useState(
    sessionStorage.getItem("introShown") === "true",
  );
  const [showIntro, setShowIntro] = useState(!isIntroFinished);

  const mainContentRef = React.useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  usePerformance();

  // Determine animation direction from section order
  const direction =
    sectionOrder.indexOf(activeSection) >= sectionOrder.indexOf(prevSection)
      ? 1
      : -1;

  useEffect(() => {
    if (window.innerWidth >= 1024) setSidebarOpen(true);
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const el = mainContentRef.current;
    if (!el) return;
    const handleScroll = () => setShowToTop(el.scrollTop > 300);
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem("introShown", "true");
    setIntroFinished(true);
  };

  const handleSetSection = (section: string) => {
    setPrevSection(activeSection);
    setActiveSection(section);
    if (window.innerWidth < 1024) setSidebarOpen(false);
    mainContentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    mainContentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ActiveComponent = sectionComponents[activeSection] || Home;

  return (
    <NavigationContext.Provider value={{ setActiveSection: handleSetSection }}>
      {/* Intro animation */}
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onAnimationComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Particle background — decorative floating dots */}
      <ParticleBackground />

      {/* Scroll progress bar */}
      <ScrollProgress
        scrollContainerRef={mainContentRef as React.RefObject<HTMLDivElement>}
      />

      <motion.div
        className={cn(
          "flex min-h-screen bg-light-color-dark/30 dark:bg-black relative z-10",
        )}
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
            "lg:ml-72",
          )}
        >
          <div className="p-4 sm:p-8 max-w-7xl mx-auto pb-28 lg:pb-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeSection}
                custom={direction}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Suspense
                  fallback={
                    <PageLoader label={t("commonTexts.loading", language)} />
                  }
                >
                  <ActiveComponent />
                </Suspense>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* Top-right action buttons */}
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <DarkModeToggle />

          <motion.button
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
          >
            <Search className="w-6 h-6" />
          </motion.button>

          <motion.button
            className="lg:hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait">
              {isSidebarOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
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
              className="fixed bottom-24 lg:bottom-6 left-6 z-50 bg-gradient-to-br from-primary to-secondary text-white w-14 h-14 rounded-full shadow-xl shadow-primary/30 flex items-center justify-center overflow-hidden group"
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              whileHover={{
                scale: 1.12,
                boxShadow: "0 12px 28px rgba(99,102,241,0.45)",
              }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              aria-label="Scroll to top"
            >
              {/* Shimmer */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowUp className="w-6 h-6 relative z-10" />
              </motion.span>
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
