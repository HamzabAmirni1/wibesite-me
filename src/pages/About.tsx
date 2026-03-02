import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import SocialLinks from '../components/SocialLinks';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import CallToAction from '../components/CallToAction';
import { useNavigation } from '../contexts/NavigationContext';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';
import { cn } from '../lib/utils';
import { Code, Database, Layout, Server, Smartphone, Star, Award, Users, Coffee, Target, Heart, Zap } from 'lucide-react';

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
    transition: { type: 'spring', stiffness: 50 }
  }
};

const About: React.FC = () => {
  const { setActiveSection } = useNavigation();
  const { language } = useLanguage();

  const stats = [
    { icon: Award, value: '+5', label: t('aboutPage.stats.0', language), color: 'text-yellow-500' },
    { icon: Target, value: '+50', label: t('aboutPage.stats.1', language), color: 'text-green-500' },
    { icon: Users, value: '+30', label: t('aboutPage.stats.2', language), color: 'text-blue-500' },
    { icon: Coffee, value: '+1000', label: t('aboutPage.stats.3', language), color: 'text-amber-700' },
  ];

  const skills = [
    { name: t('aboutPage.skills.items.frontend', language), icon: Layout, level: 95, color: 'bg-blue-500' },
    { name: t('aboutPage.skills.items.backend', language), icon: Server, level: 90, color: 'bg-green-500' },
    { name: t('aboutPage.skills.items.mobile', language), icon: Smartphone, level: 85, color: 'bg-purple-500' },
    { name: t('aboutPage.skills.items.databases', language), icon: Database, level: 88, color: 'bg-orange-500' },
    { name: t('aboutPage.skills.items.algorithms', language), icon: Code, level: 92, color: 'bg-red-500' },
  ];

  const valuesData = [
    {
      icon: Star,
      title: t('aboutPage.values.0.title', language),
      description: t('aboutPage.values.0.description', language),
      color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
    },
    {
      icon: Zap,
      title: t('aboutPage.values.1.title', language),
      description: t('aboutPage.values.1.description', language),
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      icon: Heart,
      title: t('aboutPage.values.2.title', language),
      description: t('aboutPage.values.2.description', language),
      color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
    }
  ];

  return (
    <motion.div
      className="space-y-12 pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section - Polished Top */}
      <motion.div variants={itemVariants}>
        <Card className="relative overflow-hidden border-none bg-white/40 dark:bg-gray-800/40 backdrop-blur-md shadow-xl rounded-3xl p-6 md:p-10">
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-indigo-500 to-secondary opacity-80" />

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Avatar Section */}
            <motion.div
              className="relative shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full bg-white dark:bg-gray-800 p-1.5 shadow-2xl border border-white/20">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800 shadow-inner">
                  <span className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-500 to-secondary tracking-tighter">HA</span>
                </div>
                {/* Status Indicator */}
                <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg animate-pulse" />
              </div>
            </motion.div>

            {/* Content Section */}
            <div className={cn(
              "flex-1 space-y-5",
              language === 'ar' ? 'text-center md:text-right' : 'text-center md:text-left'
            )}>
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                  <span className="text-gray-500 dark:text-gray-400 font-medium text-2xl md:text-3xl block mb-2">{t('aboutPage.welcome', language)}</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{t('aboutPage.name', language)}</span> 👋
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-gray-600 dark:text-indigo-300 flex items-center justify-center md:justify-start gap-3">
                  <span className="w-6 h-[2px] bg-primary/30 hidden md:block" />
                  {t('aboutPage.role', language)}
                </h2>
              </div>

              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl font-medium">
                {t('aboutPage.description', language)}
              </p>

              <div className={cn(
                "flex flex-wrap gap-4 pt-2",
                language === 'ar' ? 'justify-center md:justify-start' : 'justify-center md:justify-start'
              )}>
                <button
                  onClick={() => setActiveSection('contact')}
                  className="px-10 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  {t('aboutPage.buttons.contact', language)}
                </button>
                <button
                  onClick={() => setActiveSection('projects')}
                  className="px-10 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-100 dark:border-gray-700 rounded-2xl font-bold hover:border-primary/30 transition-all duration-300 shadow-sm"
                >
                  {t('aboutPage.buttons.projects', language)}
                </button>
              </div>

              <div className={cn(
                "pt-6 border-t border-gray-50 dark:border-gray-700/50 flex",
                language === 'ar' ? 'justify-center md:justify-start' : 'justify-center md:justify-start'
              )}>
                <SocialLinks />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Stats Section */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
              <div className={`w-12 h-12 mx-auto rounded-xl bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center mb-4 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Story & Philosophy */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-dark-color dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full" />
                {t('aboutPage.story.title', language)}
              </h3>
              <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p className="mb-4">
                  {t('aboutPage.story.p1', language)}
                </p>
                <p className="mb-4">
                  {t('aboutPage.story.p2', language)}
                </p>
                <p>
                  {t('aboutPage.story.p3', language)}
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {valuesData.map((val, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${val.color}`}>
                    <val.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {val.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="lg:col-span-1">
          <motion.div variants={itemVariants} className="h-full">
            <Card className="h-full dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-dark-color dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-secondary rounded-full" />
                {t('aboutPage.skills.title', language)}
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <skill.icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-primary dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.div variants={itemVariants}>
        <CallToAction />
      </motion.div>

      <motion.div variants={itemVariants}>
        <WhatsappChannelLinks />
      </motion.div>
    </motion.div>
  );
};

export default About;
