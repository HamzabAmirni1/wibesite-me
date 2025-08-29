import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield, Settings } from 'lucide-react';

const CookieConsent: React.FC = () => {
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
                🍪 نحن نستخدم ملفات تعريف الارتباط
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك وعرض إعلانات مخصصة وتحليل حركة المرور. 
                من خلال الاستمرار في استخدام موقعنا، فإنك توافق على استخدام ملفات تعريف الارتباط وفقاً لـ
                <a href="#privacy" className="text-primary hover:underline mx-1">سياسة الخصوصية</a>
                الخاصة بنا.
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
                        <span className="font-medium">ملفات تعريف الارتباط الضرورية</span>
                      </div>
                      <span className="text-green-600 text-xs">مطلوبة</span>
                    </div>
                    <p className="text-gray-600 text-xs">
                      ضرورية لعمل الموقع الأساسي وحفظ تفضيلاتك
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Settings size={16} className="text-blue-600" />
                        <span className="font-medium">ملفات تعريف الارتباط التحليلية</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs">
                      تساعدنا في فهم كيفية استخدام الزوار للموقع لتحسين الأداء
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cookie size={16} className="text-purple-600" />
                        <span className="font-medium">ملفات تعريف الارتباط الإعلانية</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs">
                      تُستخدم لعرض إعلانات مخصصة وذات صلة بك من خلال Google AdSense
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="flex flex-wrap gap-3 items-center">
                <button
                  onClick={acceptAll}
                  className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  قبول جميع ملفات تعريف الارتباط
                </button>
                
                <button
                  onClick={acceptNecessary}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  الضرورية فقط
                </button>
                
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  {showDetails ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
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
