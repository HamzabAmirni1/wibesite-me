import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { AlertTriangle, Info, Shield, ExternalLink, Code, Globe, MessageSquare, RefreshCw, XCircle, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

const Disclaimer: React.FC = () => {
  const { language } = useLanguage();

  const sections = [
    { key: 'general', icon: <Info className="w-6 h-6 text-blue-500" /> },
    { key: 'technical', icon: <Code className="w-6 h-6 text-purple-500" /> },
    { key: 'external', icon: <Globe className="w-6 h-6 text-indigo-500" /> },
    { key: 'advertising', icon: <Shield className="w-6 h-6 text-green-500" /> },
    { key: 'professional', icon: <MessageSquare className="w-6 h-6 text-orange-500" /> },
    { key: 'contentUpdate', icon: <RefreshCw className="w-6 h-6 text-teal-500" /> },
    { key: 'errors', icon: <AlertTriangle className="w-6 h-6 text-red-500" /> },
    { key: 'availability', icon: <XCircle className="w-6 h-6 text-gray-500" /> },
  ];

  return (
    <motion.div
      className="space-y-8 pb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="text-center bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200">
        <div className="flex items-center justify-center mb-4">
          <AlertTriangle className="w-12 h-12 text-orange-500" />
        </div>
        <h1 className="text-4xl font-bold text-dark-color mb-4">⚠️ {t('disclaimerPageComprehensive.title', language)}</h1>
        <p className="text-lg text-dark-color/70 max-w-2xl mx-auto">
          {t('disclaimerPageComprehensive.description', language)}
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
            <Card className="hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 text-right">
                <div className="mt-1 flex-shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {t(`disclaimerPageComprehensive.${section.key}`, language)}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30">
        <div className="flex items-center gap-4 text-right">
          <Lock className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
          <p className="text-red-800 dark:text-red-300 text-sm leading-relaxed font-bold">
            {t('commonLabels.disclaimerNotice', language)}
          </p>
        </div>
      </Card>

      <Card className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-2 text-primary font-medium">
            <ExternalLink size={18} />
            <span>{t('commonLabels.contactUs', language)}</span>
          </div>
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

export default Disclaimer;
