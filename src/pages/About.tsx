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
import {
  Code, Database, Layout, Server, Smartphone, Star,
  Award, Users, Coffee, Target, Heart, Zap,
  ChevronRight, Sparkles, Rocket
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', damping: 20, stiffness: 100 }
  }
};

const About: React.FC = () => {
  const { setActiveSection } = useNavigation();
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  const stats = [
    { icon: Award, value: '+5', label: t('aboutPage.stats.0', language), color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { icon: Target, value: '+50', label: t('aboutPage.stats.1', language), color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { icon: Users, value: '+30', label: t('aboutPage.stats.2', language), color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
    { icon: Coffee, value: '+1000', label: t('aboutPage.stats.3', language), color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20' },
  ];

  const skills = [
    { name: t('aboutPage.skills.items.frontend', language), icon: Layout, level: 95, color: 'from-blue-400 to-blue-600' },
    { name: t('aboutPage.skills.items.backend', language), icon: Server, level: 90, color: 'from-indigo-400 to-indigo-600' },
    { name: t('aboutPage.skills.items.mobile', language), icon: Smartphone, level: 85, color: 'from-purple-400 to-purple-600' },
    { name: t('aboutPage.skills.items.databases', language), icon: Database, level: 88, color: 'from-cyan-400 to-cyan-600' },
    { name: t('aboutPage.skills.items.automation', language), icon: Zap, level: 94, color: 'from-amber-400 to-amber-600' },
    { name: t('aboutPage.skills.items.algorithms', language), icon: Code, level: 92, color: 'from-rose-400 to-rose-600' },
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto space-y-16 pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Premium Hero Section */}
      <motion.div variants={itemVariants} className="relative">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />

        <Card className="relative overflow-hidden border-none bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-2xl rounded-[2.5rem] p-4 md:p-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image/Avatar Section */}
            <div className="relative group shrink-0">
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative z-10 w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary via-indigo-500 to-secondary flex items-center justify-center">
                  <span className="text-7xl font-black text-white tracking-tighter">HA</span>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center z-20">
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-primary text-white rounded-xl shadow-lg z-20 font-bold text-sm">
                Engineering
              </div>
            </div>

            {/* Content Section */}
            <div className={cn(
              "flex-1 space-y-6 pt-4 lg:pt-0",
              isRtl ? "text-right" : "text-left"
            )}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide uppercase">
                <Rocket className="w-4 h-4" />
                {t('aboutPage.title', language)}
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-[1.1]">
                {t('aboutPage.welcome', language)}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-500 to-secondary">
                  {t('aboutPage.name', language)}
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl font-bold text-gray-600 dark:text-indigo-300 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary/30" />
                {t('aboutPage.role', language)}
              </h2>

              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                {t('aboutPage.description', language)}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSection('contact')}
                  className="px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {t('aboutPage.buttons.contact', language)}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSection('projects')}
                  className="px-10 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-100 dark:border-gray-700 rounded-2xl font-bold shadow-sm hover:border-primary/30 transition-all duration-300"
                >
                  {t('aboutPage.buttons.projects', language)}
                </motion.button>
              </div>

              <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                <SocialLinks />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Modern Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="group p-8 rounded-3xl border-none bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
            <div className={`absolute -right-4 -bottom-4 w-24 h-24 ${stat.bg} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
            <div className={cn("inline-flex p-4 rounded-2xl mb-6 relative z-10", stat.bg)}>
              <stat.icon className={cn("w-6 h-6", stat.color)} />
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight group-hover:translate-x-1 transition-transform">{stat.value}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-bold text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          </Card>
        ))}
      </motion.div>

      {/* Experience & Skills Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content - About Story */}
        <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8">
          <Card className="p-10 rounded-[2.5rem] border-none bg-white dark:bg-gray-800 shadow-xl overflow-hidden relative">
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center gap-4">
              <Award className="w-8 h-8 text-primary" />
              {t('aboutPage.story.title', language)}
            </h3>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full translate-x-[-24px] hidden md:block" />
              <p>{t('aboutPage.story.p1', language)}</p>
              <p>{t('aboutPage.story.p2', language)}</p>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 italic">
                {t('aboutPage.story.p3', language)}
              </div>
            </div>

            {/* Philosophy Pill Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-100 dark:border-gray-700">
              {[
                { icon: Rocket, label: t('aboutPage.values.0.title', language), desc: t('aboutPage.values.0.description', language) },
                { icon: Target, label: t('aboutPage.values.1.title', language), desc: t('aboutPage.values.1.description', language) },
                { icon: Zap, label: t('aboutPage.values.2.title', language), desc: t('aboutPage.values.2.description', language) }
              ].map((val, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <val.icon className="w-5 h-5 text-primary" />
                    <span className="font-bold text-gray-800 dark:text-white uppercase tracking-wider text-xs">{val.label}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">{val.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Sidebar Content - Skills */}
        <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
          <Card className="p-10 rounded-[2.5rem] border-none bg-gray-900 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-500">
              <Code className="w-24 h-24" />
            </div>

            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-indigo-400" />
              {t('aboutPage.skills.title', language)}
            </h3>

            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between text-sm font-bold tracking-widest uppercase">
                    <span className="flex items-center gap-2">
                      <skill.icon className="w-4 h-4 text-indigo-400" />
                      {skill.name}
                    </span>
                    <span className="text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-tighter">Precision Focus</p>
                <p className="text-xs text-white/50 lowercase">Engineering Excellence</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <CallToAction />
      </motion.div>

      <motion.div variants={itemVariants} className="pt-10">
        <WhatsappChannelLinks />
      </motion.div>
    </motion.div>
  );
};

export default About;

