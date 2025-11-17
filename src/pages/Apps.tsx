import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { myApps } from '../constants';
import { Download } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' }
  }
};

const AppCard: React.FC<typeof myApps[0] & { language: string }> = ({ IconComponent, title, description, url, buttonClass, language }) => (
    <Card className="text-center flex flex-col h-full">
        <div className="mb-6 flex justify-center items-center h-20">
            <IconComponent className="text-6xl text-dark-color/80" />
        </div>
        <h3 className="text-2xl font-bold text-dark-color mb-3">{title}</h3>
        <p className="text-dark-color/70 mb-6 flex-grow">{description}</p>
        <motion.a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`mt-auto inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full font-semibold shadow-lg ${buttonClass}`}
            whileHover={{ y: -3, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Download size={20} />
            {t('buttonLabels.download', language)}
        </motion.a>
    </Card>
);

const Apps: React.FC = () => {
  const { language } = useLanguage();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
        <motion.div variants={itemVariants}>
            <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
                <h1 className="text-4xl font-bold text-dark-color">📱 {t('appsPageComprehensive.title', language)}</h1>
                <p className="text-lg text-dark-color/70 mt-4">{t('appsPageComprehensive.description', language)}</p>
            </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {myApps.map((app, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <AppCard {...app} language={language} />
                </motion.div>
            ))}
        </div>

        <motion.div variants={itemVariants}>
            <CallToAction />
        </motion.div>
    </motion.div>
  );
};

export default Apps;
