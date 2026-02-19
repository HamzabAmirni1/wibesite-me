import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';
import { Scale, FileText, ShieldCheck, UserCheck, AlertCircle, RefreshCw, XCircle, Globe } from 'lucide-react';

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
      <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10">
        <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-dark-color mb-4">{t('termsPageComprehensive.title', language)}</h1>
        <p className="text-lg text-dark-color/70 max-w-2xl mx-auto">
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
            <Card className="hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 text-right">
                <div className="mt-1 flex-shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {t(`termsPageComprehensive.${section.key}`, language)}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* AdSense specific clause for terms */}
      <Card className="bg-blue-50 border border-blue-100">
        <div className="flex items-center gap-4 text-right">
          <Info className="w-6 h-6 text-blue-600" />
          <p className="text-blue-800 text-sm leading-relaxed">
            {language === 'ar'
              ? 'نحن نستخدم شركاء إعلانات خارجيين لعرض الإعلانات عندما تزور موقعنا. قد تستخدم هذه الشركات معلومات حول زياراتك لهذا الموقع والمواقع الأخرى من أجل عرض إعلانات حول السلع والخدمات التي تهمك.'
              : 'We use third-party advertising companies to serve ads when you visit our website. These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.'}
          </p>
        </div>
      </Card>

      <Card className="bg-gray-50 border border-gray-200">
        <div className="text-center space-y-4">
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>تاريخ آخر تحديث:</strong> {new Date().toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

// Internal Info icon for the AdSense clause since I forgot to import it
const Info = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
  </svg>
);

export default Terms;
