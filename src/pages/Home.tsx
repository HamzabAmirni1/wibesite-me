import React from 'react';
import { motion } from 'framer-motion';
import ProfileSection from '../components/ProfileSection';
import SkillsCard from '../components/SkillsCard';
import Timeline from '../components/Timeline';
import CallToAction from '../components/CallToAction';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import Card from '../components/Card';
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
    transition: {
      type: 'spring'
    }
  }
};

const Home: React.FC = () => {
  const { language } = useLanguage();

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <ProfileSection />
      </motion.div>

      {/* Banner Ad */}
      <motion.div variants={itemVariants}>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl mx-auto rounded-2xl border-2 border-dashed border-primary/40 bg-white/70 shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="مساحة إعلانية"
              className="w-full h-32 sm:h-40 object-cover"
            />
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=400&q=80" alt="برمجة حديثة" className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"/>
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt="تطوير تطبيقات" className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"/>
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80" alt="تعلم تقني" className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"/>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <h3 className="text-2xl font-bold text-primary text-center mb-6">💡 {t('homePage.exampleProjects.title', language)}</h3>
          <ul className="text-lg text-dark-color/80 list-disc list-inside space-y-3">
              <li>{t('homePage.exampleProjects.projects.calculator', language)}</li>
              <li>{t('homePage.exampleProjects.projects.portfolio', language)}</li>
              <li>{t('homePage.exampleProjects.projects.todoList', language)}</li>
              <li>{t('homePage.exampleProjects.projects.currencyConverter', language)}</li>
              <li>{t('homePage.exampleProjects.projects.ticTacToe', language)}</li>
          </ul>
        </Card>
      </motion.div>

      {/* Inline Ad */}
      <motion.div variants={itemVariants}>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <CallToAction />
      </motion.div>

      <motion.div variants={itemVariants}>
        <WhatsappChannelLinks />
      </motion.div>
    </motion.div>
  );
};

export default Home;
