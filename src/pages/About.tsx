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
import { Code, Database, Layout, Server, Smartphone, Star, Award, Users, Coffee, Target, Heart, Zap, Send, Sparkles } from 'lucide-react';

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
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 50, damping: 15 }
  }
};

const About: React.FC = () => {
  const { setActiveSection } = useNavigation();
  const { language } = useLanguage();

  const stats = [
    { icon: Award, value: '5+', label: language === 'ar' ? 'مشاريع متكاملة' : language === 'fr' ? 'Projets Complétés' : 'Projects Completed', color: 'from-amber-400 to-yellow-600', textColor: 'text-yellow-600 dark:text-yellow-400' },
    { icon: Target, value: '100%', label: language === 'ar' ? 'رضا العملاء' : language === 'fr' ? 'Satisfaction Client' : 'Client Satisfaction', color: 'from-emerald-400 to-green-600', textColor: 'text-green-600 dark:text-green-400' },
    { icon: Zap, value: '24/7', label: language === 'ar' ? 'دعم مستمر' : language === 'fr' ? 'Support Continu' : 'Support & Comm.', color: 'from-blue-400 to-indigo-600', textColor: 'text-blue-600 dark:text-blue-400' },
    { icon: Users, value: '+30', label: t('aboutPage.stats.2', language), color: 'from-purple-400 to-fuchsia-600', textColor: 'text-fuchsia-600 dark:text-fuchsia-400' },
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
      color: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800'
    },
    {
      icon: Zap,
      title: t('aboutPage.values.1.title', language),
      description: t('aboutPage.values.1.description', language),
      color: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800'
    },
    {
      icon: Heart,
      title: t('aboutPage.values.2.title', language),
      description: t('aboutPage.values.2.description', language),
      color: 'bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800'
    }
  ];

  return (
    <motion.div
      className="space-y-8 pb-12 w-full max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {/* Title Area */}
      <motion.div variants={itemVariants} className="text-center pt-8 pb-4">
        <h1 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-500 to-secondary drop-shadow-sm flex items-center justify-center gap-3">
          <Sparkles className="w-8 h-8 text-primary animate-pulse hidden md:block" />
          {t('aboutPage.welcome', language)}
          <Sparkles className="w-8 h-8 text-secondary animate-pulse hidden md:block" />
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto font-medium">
          {t('aboutPage.role', language)}
        </p>
      </motion.div>

      {/* BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">

        {/* 1. Main Hero Block (Spans 8 cols on desktop) */}
        <motion.div className="lg:col-span-8 md:col-span-4 col-span-1" variants={itemVariants}>
          <div className="h-full bg-gradient-to-br from-primary/90 via-blue-600/90 to-indigo-800/90 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-white/20 group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/40 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4 group-hover:scale-110 transition-transform duration-700 delay-100"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between gap-8 text-center md:text-start">
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-32 h-32 shrink-0 md:w-40 md:h-40 p-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/40 shadow-xl group-hover:rotate-6 transition-transform duration-500">
                  <div className="w-full h-full rounded-full bg-gray-900 border-4 border-white flex items-center justify-center overflow-hidden">
                    <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">HA</span>
                  </div>
                  <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-white animate-pulse shadow-lg" />
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-black leading-tight drop-shadow-md">
                    {t('aboutPage.name', language)} <span className="inline-block animate-bounce">👋</span>
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed max-w-lg">
                    {t('aboutPage.description', language)}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-auto pt-4 justify-center md:justify-start">
                <button
                  onClick={() => setActiveSection('projects')}
                  className="px-8 py-3.5 bg-white text-primary rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  <Code className="w-5 h-5" />
                  {t('aboutPage.buttons.projects', language)}
                </button>
                <button
                  onClick={() => setActiveSection('contact')}
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold text-lg shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t('aboutPage.buttons.contact', language)}
                </button>
              </div>

            </div>
          </div>
        </motion.div>

        {/* 2. Stats Grid Block (Spans 4 cols on desktop) */}
        <motion.div className="lg:col-span-4 md:col-span-4 col-span-1" variants={itemVariants}>
          <div className="grid grid-cols-2 gap-4 h-full">
            {stats.map((stat, index) => (
              <Card key={index} disableHoverEffect={false} className="flex flex-col items-center justify-center text-center p-6 bg-white/60 dark:bg-gray-800/80 border border-white/50 dark:border-gray-700/50 hover:scale-105 active:scale-95 transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-0.5 shadow-lg flex items-center justify-center mb-3`}>
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[10px] flex items-center justify-center">
                    <stat.icon className={`w-5 h-5 ${stat.textColor}`} />
                  </div>
                </div>
                <h3 className={`text-2xl md:text-3xl font-black mb-1 bg-clip-text text-transparent bg-gradient-to-br ${stat.color}`}>{stat.value}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">
                  {stat.label}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* 3. My Story Block (Spans 5 cols) */}
        <motion.div className="lg:col-span-5 md:col-span-4 col-span-1" variants={itemVariants}>
          <Card className="h-full bg-white/60 dark:bg-gray-800/80 border border-white/50 dark:border-gray-700/50 p-8">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-6 flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 pb-4">
              <span className="p-2 bg-primary/10 text-primary rounded-lg"><Code className="w-6 h-6" /></span>
              {t('aboutPage.story.title', language)}
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
              <p>
                {t('aboutPage.story.p1', language)}
              </p>
              <p>
                {t('aboutPage.story.p2', language)}
              </p>
              <p>
                {t('aboutPage.story.p3', language)}
              </p>
            </div>
          </Card>
        </motion.div>

        {/* 4. Skills Stack (Spans 4 cols) */}
        <motion.div className="lg:col-span-4 md:col-span-4 col-span-1" variants={itemVariants}>
          <Card className="h-full bg-white/60 dark:bg-gray-800/80 border border-white/50 dark:border-gray-700/50 p-8">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-6 flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 pb-4">
              <span className="p-2 bg-secondary/10 text-secondary rounded-lg"><Zap className="w-6 h-6" /></span>
              {t('aboutPage.skills.title', language)}
            </h3>
            <div className="flex flex-col justify-between h-[calc(100%-5rem)] gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="group cursor-default">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-md group-hover:scale-110 transition-transform">
                        <skill.icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      </div>
                      <span className="font-bold text-gray-700 dark:text-gray-300 text-sm">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-black text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      className={`h-full ${skill.color} relative`}
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

        {/* 5. Values & Philosophy Grid (Spans 3 cols) */}
        <motion.div className="lg:col-span-3 md:col-span-4 col-span-1 flex flex-col gap-4" variants={itemVariants}>
          {valuesData.map((val, index) => (
            <div key={index} className={`flex-1 rounded-3xl p-6 flex flex-col items-center justify-center text-center border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 ${val.color} bg-opacity-50 backdrop-blur-sm`}>
              <val.icon className="w-8 h-8 mb-3 opacity-90" />
              <h4 className="font-black text-lg mb-1">{val.title}</h4>
              <p className="text-xs font-semibold opacity-80 leading-snug">{val.description}</p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Social Links Callout */}
      <motion.div variants={itemVariants} className="pt-4 flex justify-center">
        <div className="inline-flex items-center p-2 pr-6 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden hover:scale-105 transition-transform">
          <SocialLinks />
          <div className="hidden sm:flex items-center gap-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-500 dark:text-gray-400">
            {language === 'ar' ? 'تواصل معي' : language === 'fr' ? 'Contactez-moi' : 'Connect with me'}  <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>

      {/* Existing CTAs */}
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
