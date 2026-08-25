import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';
import Timeline from './Timeline';
import { Lightbulb, CheckCircle, Palette } from 'lucide-react';

const JourneyPhilosophy: React.FC = () => {
  const { language } = useLanguage();
  
  const journeyItems = t('journeySection.items', language) || [];
  
  return (
    <div className="space-y-8">
      {/* Journey Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            {t('journeySection.title', language)}
          </h3>
          <Timeline items={journeyItems} />
        </Card>
      </motion.div>

      {/* Philosophy Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            {t('philosophySection.title', language)}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Continuous Learning */}
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg"
              whileHover={{ y: -5, shadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark-color mb-2">
                {t('philosophySection.continuousLearning.title', language)}
              </h4>
              <p className="text-dark-color/70">
                {t('philosophySection.continuousLearning.description', language)}
              </p>
            </motion.div>

            {/* Quality Delivery */}
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg"
              whileHover={{ y: -5, shadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark-color mb-2">
                {t('philosophySection.qualityDelivery.title', language)}
              </h4>
              <p className="text-dark-color/70">
                {t('philosophySection.qualityDelivery.description', language)}
              </p>
            </motion.div>

            {/* Design & Creativity */}
            <motion.div 
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg"
              whileHover={{ y: -5, shadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark-color mb-2">
                {t('philosophySection.designCreativity.title', language)}
              </h4>
              <p className="text-dark-color/70">
                {t('philosophySection.designCreativity.description', language)}
              </p>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default JourneyPhilosophy;
