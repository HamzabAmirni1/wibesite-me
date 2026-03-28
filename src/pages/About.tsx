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
import { Code, Database, Layout, Server, Smartphone, Star, Award, Users, Coffee, Target, Heart, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    { icon: Award, value: '5+', label: language === 'ar' ? 'مشاريع متكاملة' : language === 'fr' ? 'Projets Complétés' : 'Projects Completed', color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/30' },
    { icon: Target, value: '100%', label: language === 'ar' ? 'رضا العملاء' : language === 'fr' ? 'Satisfaction Client' : 'Client Satisfaction', color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
    { icon: Zap, value: '24/7', label: language === 'ar' ? 'دعم مستمر' : language === 'fr' ? 'Support Continu' : 'Support & Comm.', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { icon: Users, value: '+30', label: t('aboutPage.stats.2', language), color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
  ];

  const skills = [
    { name: t('aboutPage.skills.items.frontend', language), icon: Layout, level: 95, color: 'bg-gradient-to-r from-blue-500 to-cyan-400' },
    { name: t('aboutPage.skills.items.backend', language), icon: Server, level: 90, color: 'bg-gradient-to-r from-green-500 to-emerald-400' },
    { name: t('aboutPage.skills.items.mobile', language), icon: Smartphone, level: 85, color: 'bg-gradient-to-r from-purple-500 to-pink-400' },
    { name: t('aboutPage.skills.items.databases', language), icon: Database, level: 88, color: 'bg-gradient-to-r from-orange-500 to-yellow-400' },
    { name: t('aboutPage.skills.items.algorithms', language), icon: Code, level: 92, color: 'bg-gradient-to-r from-red-500 to-rose-400' },
  ];

  const valuesData = [
    {
      icon: Star,
      title: t('aboutPage.values.0.title', language),
      description: t('aboutPage.values.0.description', language),
      color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800'
    },
    {
      icon: Zap,
      title: t('aboutPage.values.1.title', language),
      description: t('aboutPage.values.1.description', language),
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
    },
    {
      icon: Heart,
      title: t('aboutPage.values.2.title', language),
      description: t('aboutPage.values.2.description', language),
      color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800'
    }
  ];

  return (
    <motion.div
      className="space-y-16 pb-12 w-full max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Hero Section - Clean & Elegant */}
      <motion.div variants={itemVariants} className="pt-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Avatar Area */}
          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-2 bg-gradient-to-tr from-primary via-indigo-400 to-secondary shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden border-8 border-white dark:border-gray-800">
                <span className="text-7xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-br from-primary via-indigo-500 to-secondary tracking-tighter">HA</span>
              </div>
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-xl flex items-center justify-center">
                 <CheckCircle2 className="w-full h-full text-white" />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className={cn(
            "flex-1 space-y-6",
            language === 'ar' ? 'text-center lg:text-right' : 'text-center lg:text-left'
          )}>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.2]">
                <span className="text-lg md:text-xl font-bold text-primary block mb-3 uppercase tracking-[0.2em]">{t('aboutPage.welcome', language)}</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{t('aboutPage.name', language)}</span> 👋
              </h1>
              <div className={cn(
                "flex items-center gap-4 justify-center lg:justify-start pt-2",
                language === 'ar' && "flex-row-reverse"
              )}>
                <div className="h-[2px] w-12 bg-primary/50 hidden md:block rounded-full" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-300">
                  {t('aboutPage.role', language)}
                </h2>
              </div>
            </div>

            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              {t('aboutPage.description', language)}
            </p>

            <div className={cn(
              "flex flex-wrap gap-4 pt-4",
              language === 'ar' ? 'justify-center lg:justify-start' : 'justify-center lg:justify-start'
            )}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection('contact')}
                className="px-8 py-3.5 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                {t('aboutPage.buttons.contact', language)}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection('projects')}
                className="px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl font-bold text-lg hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-sm"
              >
                {t('aboutPage.buttons.projects', language)}
              </motion.button>
            </div>

            <div className={cn(
              "pt-6 flex",
              language === 'ar' ? 'justify-center lg:justify-start' : 'justify-center lg:justify-start'
            )}>
              <div className="inline-flex items-center p-2 bg-white dark:bg-gray-800 rounded-full border border-gray-100 dark:border-gray-700 shadow-md">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section - Clean & Balanced */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 sm:p-8 hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 group">
              <div className={`w-14 h-14 mx-auto rounded-2xl ${stat.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-gray-800 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Story & Philosophy */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full dark:bg-gray-800 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full" />
                {t('aboutPage.story.title', language)}
              </h3>
              <div className="prose prose-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                <p className="mb-4">{t('aboutPage.story.p1', language)}</p>
                <p className="mb-4">{t('aboutPage.story.p2', language)}</p>
                <p>{t('aboutPage.story.p3', language)}</p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {valuesData.map((val, index) => (
                <Card key={index} className={`text-center p-6 transition-all duration-300 ${val.color} bg-opacity-40 backdrop-blur-sm shadow-none hover:shadow-lg`}>
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 bg-white/50 dark:bg-gray-900/50`}>
                    <val.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs font-semibold opacity-80 leading-snug text-gray-700 dark:text-gray-300">
                    {val.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Column */}
        <div className="lg:col-span-1">
          <motion.div variants={itemVariants} className="h-full">
            <Card className="h-full dark:bg-gray-800 dark:border-gray-700 p-8">
              <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-secondary rounded-full" />
                {t('aboutPage.skills.title', language)}
              </h3>
              
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={index} className="group cursor-default">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg group-hover:scale-110 transition-transform">
                          <skill.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </div>
                        <span className="font-bold text-gray-700 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-black text-gray-400 dark:text-gray-500">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2.5 bg-gray-100 dark:bg-gray-700/50 rounded-full overflow-hidden shadow-inner relative">
                      <motion.div
                        className={`absolute top-0 left-0 h-full ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.1 * index, type: 'spring', damping: 20 }}
                      >
                         <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] -skew-x-12 translate-x-[-100%]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

      </div>

      {/* Call To Actions */}
      <motion.div variants={itemVariants} className="pt-8">
        <CallToAction />
      </motion.div>

      <motion.div variants={itemVariants}>
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
