import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';
import { Shield, Lock, Eye, Cookie, Info } from 'lucide-react';
import { cn } from '../lib/utils';

const Privacy: React.FC = () => {
  const { language } = useLanguage();

  const sections = [
    { key: 'intro', icon: <Info className="w-6 h-6 text-blue-500" /> },
    { key: 'dataCollection', icon: <Eye className="w-6 h-6 text-green-500" /> },
    { key: 'dataUsage', icon: <Shield className="w-6 h-6 text-purple-500" /> },
    { key: 'cookies', icon: <Cookie className="w-6 h-6 text-orange-500" /> },
    { key: 'googleAdSense', icon: <Lock className="w-6 h-6 text-red-500" /> },
    { key: 'optOut', icon: <Info className="w-6 h-6 text-blue-400" /> },
    { key: 'thirdParty', icon: <Shield className="w-6 h-6 text-indigo-500" /> },
    { key: 'dataSecurity', icon: <Lock className="w-6 h-6 text-teal-500" /> },
    { key: 'userRights', icon: <Shield className="w-6 h-6 text-pink-500" /> },
  ];

  return (
    <motion.div
      className="space-y-8 pb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10 dark:from-primary/10 dark:to-secondary/10 dark:border-primary/20">
        <h1 className="text-4xl font-bold text-dark-color dark:text-gray-100 mb-4">🔒 {t('privacyPageComprehensive.title', language)}</h1>
        <p className="text-lg text-dark-color/70 dark:text-gray-300 max-w-2xl mx-auto">
          {t('privacyPageComprehensive.description', language)}
        </p>
      </Card>

      <div className="grid grid-cols-1 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-white/10">
              <div className={cn("flex items-start gap-4", language === 'ar' ? 'text-right' : 'text-left')}>
                <div className="mt-1 flex-shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t(`privacyPageComprehensive.${section.key}`, language)}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10">
        <div className="text-center space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            {t('privacyPageComprehensive.contact', language)}
          </p>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>{t('commonLabels.lastUpdate', language)}:</strong> {new Date().toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Privacy;

