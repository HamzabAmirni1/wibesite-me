import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import CallToAction from '../components/CallToAction';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigation } from '../contexts/NavigationContext';
import { t } from '../i18n';
import { Code, Database, Layout, Server, Smartphone, Star, Award, Users, Target, Heart, Zap, ChevronRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUpVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 50, damping: 20 }
  }
};

const About: React.FC = () => {
  const { language } = useLanguage();
  const { setActiveSection } = useNavigation();

  const stats = [
    { icon: Award, value: '5+', label: language === 'ar' ? 'مشاريع متكاملة' : language === 'fr' ? 'Projets Complétés' : 'Projects Completed' },
    { icon: Target, value: '100%', label: language === 'ar' ? 'رضا العملاء' : language === 'fr' ? 'Satisfaction Client' : 'Client Satisfaction' },
    { icon: Zap, value: '24/7', label: language === 'ar' ? 'دعم مستمر' : language === 'fr' ? 'Support Continu' : 'Support & Comm.' },
    { icon: Users, value: '+30', label: t('aboutPage.stats.2', language) },
  ];

  const skills = [
    { name: t('aboutPage.skills.items.frontend', language), icon: Layout, level: 95 },
    { name: t('aboutPage.skills.items.backend', language), icon: Server, level: 90 },
    { name: t('aboutPage.skills.items.mobile', language), icon: Smartphone, level: 85 },
    { name: t('aboutPage.skills.items.databases', language), icon: Database, level: 88 },
    { name: t('aboutPage.skills.items.algorithms', language), icon: Code, level: 92 },
  ];

  const valuesData = [
    {
      icon: Star,
      title: t('aboutPage.values.0.title', language),
      description: t('aboutPage.values.0.description', language),
    },
    {
      icon: Zap,
      title: t('aboutPage.values.1.title', language),
      description: t('aboutPage.values.1.description', language),
    },
    {
      icon: Heart,
      title: t('aboutPage.values.2.title', language),
      description: t('aboutPage.values.2.description', language),
    }
  ];

  return (
    <motion.div
      className="space-y-24 pb-16 w-full max-w-5xl mx-auto px-4 sm:px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {/* 1. Centered Hero Section */}
      <motion.div variants={fadeUpVariants} className="text-center pt-16">
        <div className="relative inline-block mb-10 group">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
          <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl flex items-center justify-center overflow-hidden">
             <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">HA</span>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-900 rounded-full p-2 border border-gray-100 dark:border-gray-800 shadow-sm transition-transform group-hover:scale-110">
             <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
          {t('aboutPage.name', language)}
        </h1>
        
        <p className="text-xl md:text-2xl font-medium text-primary mb-8 px-4">
          {t('aboutPage.role', language)}
        </p>

        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 px-4">
          {t('aboutPage.description', language)}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setActiveSection('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-lg shadow-primary/30 transition-all hover:-translate-y-1"
          >
            {t('aboutPage.buttons.contact', language)}
          </button>
          <button 
            onClick={() => setActiveSection('projects')}
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-bold shadow-sm transition-all hover:-translate-y-1"
          >
            {t('aboutPage.buttons.projects', language)}
          </button>
        </div>

        <div className="mt-12 flex justify-center">
           <SocialLinks />
        </div>
      </motion.div>

      {/* 2. Floating Stats Bar */}
      <motion.div variants={fadeUpVariants} className="max-w-4xl mx-auto">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-100 dark:border-gray-800 shadow-2xl rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 divide-x divide-gray-100 dark:divide-gray-800 rtl:divide-x-reverse">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center px-4">
                <stat.icon className="w-8 h-8 text-primary mb-4 opacity-80" />
                <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 3. Story & Values Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={fadeUpVariants} className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
            <Star className="w-4 h-4" />
            {t('aboutPage.story.title', language)}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
            {language === 'ar' ? 'رحلتي في عالم التكنولوجيا' : 'My Journey in Tech'}
          </h2>
          <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="mb-4">{t('aboutPage.story.p1', language)}</p>
            <p className="mb-4">{t('aboutPage.story.p2', language)}</p>
            <p>{t('aboutPage.story.p3', language)}</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariants} className="space-y-6">
          {valuesData.map((val, i) => (
            <div key={i} className="group relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                  <val.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{val.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{val.description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 4. Elegant Skills Section */}
      <motion.div variants={fadeUpVariants} className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6">
           <Zap className="w-4 h-4" />
           {t('aboutPage.skills.title', language)}
        </div>
        
        <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-sm mt-8 space-y-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-3 text-sm font-bold">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                  <skill.icon className="w-5 h-5 text-gray-400" />
                  {skill.name}
                </div>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.1 * index, type: "spring", damping: 20 }}
                >
                  <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12 translate-x-[-100%]" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 5. Clean CTA Section */}
      <motion.div variants={fadeUpVariants}>
         <CallToAction />
      </motion.div>

      <motion.div variants={fadeUpVariants}>
         <WhatsappChannelLinks />
      </motion.div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}} />
    </motion.div>
  );
};

export default About;
