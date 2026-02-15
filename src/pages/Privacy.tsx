import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

const Privacy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <h1 className="text-4xl font-bold text-dark-color mb-4">🔒 {t('privacyPage.title', language)}</h1>
        <p className="text-lg text-dark-color/70">
          {t('privacyPage.description', language)}
        </p>
      </Card>

      <Card>
        <div className="prose prose-lg max-w-none text-right">
          <h2 className="text-2xl font-bold text-primary mb-4">{t('privacyPageComprehensive.dataCollection', language)}</h2>
          <h2 className="text-2xl font-bold text-primary mb-4">{t('privacyPageComprehensive.dataUsage', language)}</h2>
          <h2 className="text-2xl font-bold text-primary mb-4">{t('privacyPageComprehensive.dataSecurity', language)}</h2>
          
          <div className="bg-gray-100 p-4 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              <strong>{t('contactFormLabels.messagePlaceholder', language)}</strong> {new Date().toLocaleDateString('ar-SA')}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Privacy;
