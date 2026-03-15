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
import { Code, Database, Layout, Server, Smartphone, Star, Award, Users, Coffee, Target, Heart, Zap, MessageSquare } from 'lucide-react';

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
        <Card className="relative overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-2 border-primary/10 shadow-2xl">
          {/* Animated Background Element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
          
          <div className="flex flex-col md:flex-row items-center gap-10 p-6 md:p-10 relative z-10">
            <motion.div
              className="relative group shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-indigo-500 to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-56 h-56 rounded-3xl bg-white dark:bg-gray-800 p-1.5 shadow-2xl border border-white/20 overflow-hidden group">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden border-2 border-primary/5">
                   <div className="relative">
                      <Code className="w-24 h-24 text-primary/20 absolute -top-4 -left-4 rotate-12" />
                      <span className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-br from-primary via-indigo-600 to-secondary relative z-10">HA</span>
                   </div>
                </div>
                {/* Decorative overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-700 p-3 rounded-2xl shadow-xl border border-primary/10 flex items-center gap-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Available for work</span>
              </motion.div>
            </motion.div>

            <div className={cn(
              "flex-1 space-y-6",
              language === 'ar' ? 'text-center md:text-right' : 'text-center md:text-left'
            )}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:text-blue-400 text-sm font-bold tracking-wide uppercase mb-2">
                {t('aboutPage.welcome', language)}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                {language === 'ar' ? '' : "I'm "}<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{t('aboutPage.name', language)}</span> 👋
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-blue-200/80 font-medium flex items-center gap-3 justify-center md:justify-start">
                <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                {t('aboutPage.role', language)}
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-medium">
                {t('aboutPage.description', language)}
              </p>
              
              <div className={cn(
                "flex flex-wrap gap-4 pt-6",
                language === 'ar' ? 'justify-center md:justify-start flex-row-reverse' : 'justify-center md:justify-start'
              )}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(99 102 241 / 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection('contact')}
                  className="px-10 py-4 bg-gradient-to-r from-primary to-indigo-600 text-white rounded-2xl font-black shadow-xl transition-all duration-300 flex items-center gap-2 group"
                >
                  <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  {t('aboutPage.buttons.contact', language)}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.05)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection('projects')}
                  className="px-10 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-primary dark:text-white border-2 border-primary/20 dark:border-white/10 rounded-2xl font-black transition-all duration-300 flex items-center gap-2"
                >
                  <Code className="w-5 h-5" />
                  {t('aboutPage.buttons.projects', language)}
                </motion.button>
              </div>
              
              <div className={cn(
                "pt-8 border-t border-gray-100 dark:border-white/5 flex items-center gap-6",
                language === 'ar' ? 'justify-center md:justify-start flex-row-reverse' : 'justify-center md:justify-start'
              )}>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{language === 'ar' ? 'تابعني:' : 'Follow My Journey:'}</span>
                <SocialLinks />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Stats Section */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="relative overflow-hidden group p-8 text-center bg-white dark:bg-gray-800 border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </p>
              </Card>
            </motion.div>
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
