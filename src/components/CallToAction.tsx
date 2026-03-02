import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { MessageSquare, ArrowLeft, Calendar } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

const CallToAction: React.FC = () => {
  const { setActiveSection } = useNavigation();
  const { language } = useLanguage();

  const handleNavigate = () => {
    setActiveSection('chat');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="bg-gradient-to-br from-primary to-secondary text-white overflow-hidden !p-0">
        <div className="relative z-10 text-center p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{t('callToAction.title', language)}</h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {t('callToAction.description', language)}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={handleNavigate}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-4 rounded-xl shadow-lg text-lg inline-flex items-center gap-3"
              whileHover={{ y: -3, scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>{t('callToAction.buttonText', language)}</span>
              <ArrowLeft size={22} className={language === 'ar' ? 'rotate-180' : ''} />
            </motion.button>

            <motion.a
              href="https://calendly.com/hamzaamirni"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-lg text-lg inline-flex items-center gap-3"
              whileHover={{ y: -3, scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>{t('callToAction.calendlyButton', language)}</span>
              <Calendar size={22} />
            </motion.a>
          </div>
        </div>
        <div className="absolute -bottom-12 -left-12 text-white/10">
          <MessageSquare size={150} strokeWidth={1} />
        </div>
        <div className="absolute -top-10 -right-10 text-white/10 transform rotate-12">
          <MessageSquare size={120} strokeWidth={1} />
        </div>
      </Card>
    </motion.div>
  );
};

export default CallToAction;
