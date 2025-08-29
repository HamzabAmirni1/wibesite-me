import React from 'react';
import { motion } from 'framer-motion';
import ProfileSection from '../components/ProfileSection';
import SkillsCard from '../components/SkillsCard';
import Timeline from '../components/Timeline';
import CallToAction from '../components/CallToAction';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import GoogleAdSense from '../components/GoogleAdSense';
import Card from '../components/Card';
import AdContainer from '../components/ads/AdContainer';

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
        <AdContainer type="banner" size="medium" />
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
          <h3 className="text-2xl font-bold text-primary text-center mb-6">💡 أمثلة على مشاريع برمجية بسيطة</h3>
          <ul className="text-lg text-dark-color/80 list-disc list-inside space-y-3">
              <li>آلة حاسبة بسيطة باستخدام HTML وCSS وJavaScript</li>
              <li>موقع صفحة تعريفية شخصية (Portfolio)</li>
              <li>تطبيق قائمة مهام (To-Do List)</li>
              <li>برنامج لتحويل العملات</li>
              <li>لعبة XO (تيك تاك تو) على الويب</li>
          </ul>
        </Card>
      </motion.div>

      {/* Inline Ad */}
      <motion.div variants={itemVariants}>
        <AdContainer type="inline" variant="card" />
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
