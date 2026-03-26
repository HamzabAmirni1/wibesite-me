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
import { Lightbulb, CheckCircle, Palette } from 'lucide-react';
import { aboutContent } from '../constants';
import { cn } from '../lib/utils';

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



      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=400&q=80" alt={t('homePage.services.imgAlt1', language)} className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:opacity-80" />
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt={t('homePage.services.imgAlt2', language)} className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:opacity-80" />
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80" alt={t('homePage.services.imgAlt3', language)} className="w-full h-64 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:opacity-80" />
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <SkillsCard skills={aboutContent.skills} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            {t('journeySection.title', language)}
          </h3>
          <Timeline items={Array.isArray(t('journeySection.items', language)) ? t('journeySection.items', language) : []} />
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            {t('philosophySection.title', language)}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Continuous Learning */}
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/20 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 mb-4 shadow-lg shadow-blue-500/30">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark-color dark:text-gray-100 mb-2">
                {t('philosophySection.continuousLearning.title', language)}
              </h4>
              <p className="text-dark-color/70 dark:text-gray-300">
                {t('philosophySection.continuousLearning.description', language)}
              </p>
            </motion.div>

            {/* Quality Delivery */}
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-800/20 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-4 shadow-lg shadow-green-500/30">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark-color dark:text-gray-100 mb-2">
                {t('philosophySection.qualityDelivery.title', language)}
              </h4>
              <p className="text-dark-color/70 dark:text-gray-300">
                {t('philosophySection.qualityDelivery.description', language)}
              </p>
            </motion.div>

            {/* Design & Creativity */}
            <motion.div
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/20 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 mb-4 shadow-lg shadow-purple-500/30">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark-color dark:text-gray-100 mb-2">
                {t('philosophySection.designCreativity.title', language)}
              </h4>
              <p className="text-dark-color/70 dark:text-gray-300">
                {t('philosophySection.designCreativity.description', language)}
              </p>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <div className="space-y-10">
            <section className="space-y-4 text-center">
              <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {t('homePage.services.header', language)}
              </h2>
              <p className="text-lg text-dark-color/80 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                {t('homePage.services.intro', language)}
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/20 px-6 py-3 rounded-full border border-blue-100/50 dark:border-blue-700/30">
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">✓ {t('homePage.services.chips.modern', language)}</span>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-800/20 px-6 py-3 rounded-full border border-green-100/50 dark:border-green-700/30">
                  <span className="text-sm font-semibold text-green-700 dark:text-green-300">✓ {t('homePage.services.chips.fast', language)}</span>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/20 px-6 py-3 rounded-full border border-purple-100/50 dark:border-purple-700/30">
                  <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">✓ {t('homePage.services.chips.support', language)}</span>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-primary border-r-4 border-primary pr-3 inline-block">
                {t('homePage.services.title', language)}
              </h3>
              <div className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-4",
                language === 'ar' ? 'text-right' : 'text-left'
              )} dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {[
                  'personal', 'company', 'ecommerce',
                  'payment', 'maintenance', 'seo', 'automation', 'consultation', 'custom'
                ].map((key) => (
                  <div key={key} className="space-y-2 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <h4 className="font-semibold text-lg text-dark-color dark:text-gray-100">
                      {t(`homePage.services.items.${key}.title`, language)}
                    </h4>
                    <p className="text-dark-color/80 dark:text-gray-300 text-sm leading-relaxed">
                      {t(`homePage.services.items.${key}.desc`, language)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-primary border-r-4 border-primary pr-3 inline-block">
                {t('homePage.services.whyUs.title', language)}
              </h3>
              <div className={cn(
                "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",
                language === 'ar' ? 'text-right' : 'text-left'
              )} dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {[
                  { key: 'professional', color: 'green' },
                  { key: 'speed', color: 'blue' },
                  { key: 'price', color: 'purple' },
                  { key: 'support', color: 'amber' }
                ].map(({ key, color }) => (
                  <div key={key} className={cn(
                    "border rounded-xl p-4 space-y-2 transition-all duration-300",
                    color === 'green' && "bg-green-50/70 border-green-100 dark:bg-green-900/20 dark:border-green-800/30",
                    color === 'blue' && "bg-blue-50/70 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800/30",
                    color === 'purple' && "bg-purple-50/70 border-purple-100 dark:bg-purple-900/20 dark:border-purple-800/30",
                    color === 'amber' && "bg-amber-50/70 border-amber-100 dark:bg-amber-900/20 dark:border-amber-800/30"
                  )}>
                    <h4 className="font-semibold text-dark-color dark:text-gray-100">
                      {t(`homePage.services.whyUs.${key}.title`, language)}
                    </h4>
                    <p className="text-dark-color/80 dark:text-gray-300">
                      {t(`homePage.services.whyUs.${key}.desc`, language)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-primary border-r-4 border-primary pr-3 inline-block">
                {t('homePage.services.plans.title', language)}
              </h3>
              <div className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
                language === 'ar' ? 'text-right' : 'text-left'
              )} dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {['basic', 'business', 'ecommerce'].map((key) => (
                  <div key={key} className="rounded-xl border border-primary/20 dark:border-primary/40 bg-white/70 dark:bg-gray-800/50 shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-primary dark:text-blue-400">
                        {t(`homePage.services.plans.${key}.title`, language)}
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-dark-color/80 dark:text-gray-300">
                        {Array.isArray(t(`homePage.services.plans.${key}.features`, language)) &&
                          t(`homePage.services.plans.${key}.features`, language).map((feature: string, i: number) => (
                            <li key={i}>{feature}</li>
                          ))
                        }
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t border-primary/10 dark:border-primary/20 space-y-1">
                      <p className="font-semibold text-dark-color dark:text-gray-100">
                        {t(`homePage.services.plans.${key}.price`, language)}
                      </p>
                      <p className="text-xs text-dark-color/70 dark:text-gray-400 italic">
                        {t(`homePage.services.plans.${key}.example`, language)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3 text-center">
              <h3 className="text-2xl font-bold text-primary dark:text-blue-400">
                {t('homePage.services.ready.title', language)}
              </h3>
              <p className="text-dark-color/80 dark:text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
                {t('homePage.services.ready.desc', language)}
              </p>
            </section>
          </div>
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
