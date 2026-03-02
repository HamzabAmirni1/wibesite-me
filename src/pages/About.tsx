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
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10 dark:bg-gray-800/50 dark:border-white/10">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
          <div className="flex flex-col md:flex-row items-center gap-8 p-4">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-48 h-48 rounded-full bg-white dark:bg-gray-800 p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800">
                  <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">HA</span>
                  {/* يمكنك استبدال هذا بصورتك الشخصية */}
                  {/* <img src="/path/to/your/image.jpg" alt="Hamza" className="w-full h-full object-cover" /> */}
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              </div>
            </motion.div>

            <div className={cn(
              "flex-1 space-y-4",
              language === 'ar' ? 'text-center md:text-right' : 'text-center md:text-left'
            )}>
              <h1 className="text-4xl md:text-5xl font-bold text-dark-color dark:text-white">
                {t('aboutPage.welcome', language)}
                <span className="text-primary dark:text-blue-400">{t('aboutPage.name', language)}</span> 👋
              </h1>
              <h2 className="text-2xl text-gray-600 dark:text-blue-300 font-medium">
                🚀 {t('aboutPage.role', language)}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                {t('aboutPage.description', language)}
              </p>
              <div className={cn(
                "flex flex-wrap gap-4 pt-4",
                language === 'ar' ? 'justify-center md:justify-start' : 'justify-center md:justify-start'
              )}>
                <button
                  onClick={() => setActiveSection('contact')}
                  className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  {t('aboutPage.buttons.contact', language)}
                </button>
                <button
                  onClick={() => setActiveSection('projects')}
                  className="px-8 py-3 bg-white text-primary border-2 border-primary/20 rounded-xl font-bold hover:bg-primary/5 transition-all duration-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  {t('aboutPage.buttons.projects', language)}
                </button>
              </div>
              <div className={cn(
                "pt-6 flex",
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
