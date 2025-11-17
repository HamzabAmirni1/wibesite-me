import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t, cookieConsent } from '../i18n';

const CookieConsent: React.FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: true,
      advertising: true
    }));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: false,
      advertising: false
    }));
    setIsVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', 'custom');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-primary shadow-2xl"
      >
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex items-start gap-4">
            <Cookie className="text-primary mt-1 flex-shrink-0" size={24} />
            
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {t('cookieConsent.title', language)}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('cookieConsent.description', language)}
                <a href="#privacy" className="text-primary hover:underline mx-1">{t('cookieConsent.privacyLink', language)}</a>
              </p>

              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="bg-gray-50 rounded-lg p-4 mb-4 text-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield size={16} className="text-green-600" />
                        <span className="font-medium">{t('cookieConsent.necessary', language)}</span>
                      </div>
                      <span className="text-green-600 text-xs">{t('cookieConsent.necessaryRequired', language)}</span>
                    </div>
                    <p className="text-gray-600 text-xs">
                      {t('cookieConsent.necessaryDesc', language)}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Settings size={16} className="text-blue-600" />
                        <span className="font-medium">{t('cookieConsent.analytics', language)}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs">
                      {t('cookieConsent.analyticsDesc', language)}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cookie size={16} className="text-purple-600" />
                        <span className="font-medium">{t('cookieConsent.advertising', language)}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs">
                      {t('cookieConsent.advertisingDesc', language)}
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="flex flex-wrap gap-3 items-center">
                <button
                  onClick={acceptAll}
                  className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  {t('cookieConsent.acceptAll', language)}
                </button>
                
                <button
                  onClick={acceptNecessary}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  {t('cookieConsent.necessaryOnly', language)}
                </button>
                
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  {showDetails ? t('cookieConsent.hideDetails', language) : t('cookieConsent.showDetails', language)}
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
