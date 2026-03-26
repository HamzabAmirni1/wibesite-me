import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';
import { cn } from '../lib/utils';
import { Scale, FileText, ShieldCheck, UserCheck, AlertCircle, RefreshCw, XCircle, Globe, Info } from 'lucide-react';

const Terms: React.FC = () => {
  const { language } = useLanguage();

  const sections = [
    { key: 'acceptance', icon: <UserCheck className="w-6 h-6 text-blue-500" /> },
    { key: 'restrictions', icon: <XCircle className="w-6 h-6 text-red-500" /> },
    { key: 'intellectual', icon: <ShieldCheck className="w-6 h-6 text-purple-500" /> },
    { key: 'userContent', icon: <FileText className="w-6 h-6 text-green-500" /> },
    { key: 'liabilities', icon: <AlertCircle className="w-6 h-6 text-orange-500" /> },
    { key: 'updates', icon: <RefreshCw className="w-6 h-6 text-teal-500" /> },
    { key: 'termination', icon: <XCircle className="w-6 h-6 text-gray-500" /> },
    { key: 'governingLaw', icon: <Globe className="w-6 h-6 text-indigo-500" /> },
  ];

  return (
    <motion.div
      className="space-y-8 pb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10 dark:from-primary/10 dark:to-secondary/10 dark:border-primary/20">
        <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-dark-color dark:text-gray-100 mb-4">{t('termsPageComprehensive.title', language)}</h1>
        <p className="text-lg text-dark-color/70 dark:text-gray-300 max-w-2xl mx-auto">
          {t('termsPageComprehensive.description', language)}
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
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    {t(`termsPageComprehensive.${section.key}`, language)}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* AdSense specific clause for terms */}
      <Card className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30">
        <div className={cn("flex items-center gap-4", language === 'ar' ? 'text-right' : 'text-left')}>
          <Info className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <p className="text-blue-800 dark:text-blue-300 text-sm leading-relaxed">
            {t('commonLabels.adsenseNotice', language)}
          </p>
        </div>
      </Card>

      <Card className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10">
        <div className="text-center space-y-4">
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

export default Terms;
