import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Bot, MessageSquare, Zap, Shield, Clock, Star, ExternalLink, Sparkles } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';
import { SiWhatsapp, SiOpenai, SiPerplexity, SiFacebook } from 'react-icons/si';

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 50 }
  }
};

const Bots: React.FC = () => {
  const { language } = useLanguage();

  const bots = [
    {
      id: 1,
      name: t('botsPageFull.items.b1.name', language),
      icon: <SiWhatsapp className="w-16 h-16 text-green-500" />,
      description: t('botsPageFull.items.b1.desc', language),
      platform: 'WhatsApp',
      features: (t('botsPageFull.items.b1.features', language) as unknown as string[]),
      users: t('botsPageFull.badges.direct', language),
      rating: 5.0,
      color: 'from-green-500 to-emerald-600',
      demoUrl: 'https://api.whatsapp.com/send/?phone=212708869993&text&type=phone_number&app_absent=0',
      featured: true
    },
    {
      id: 2,
      name: t('botsPageFull.items.b2.name', language),
      icon: <SiOpenai className="w-16 h-16 text-green-600" />,
      description: t('botsPageFull.items.b2.desc', language),
      platform: 'AI Assistant',
      features: (t('botsPageFull.items.b2.features', language) as unknown as string[]),
      users: '100M+',
      rating: 4.9,
      color: 'from-green-500 to-emerald-600',
      demoUrl: 'https://api.whatsapp.com/send/?phone=18002428478&text&type=phone_number&app_absent=0',
      isAI: true
    },
    {
      id: 4,
      name: t('botsPageFull.items.b4.name', language),
      icon: <SiPerplexity className="w-16 h-16 text-cyan-600" />,
      description: t('botsPageFull.items.b4.desc', language),
      platform: 'AI Search',
      features: (t('botsPageFull.items.b4.features', language) as unknown as string[]),
      users: '5M+',
      rating: 4.7,
      color: 'from-purple-500 to-pink-600',
      demoUrl: 'https://api.whatsapp.com/send/?phone=18334363285&text&type=phone_number&app_absent=0',
      isAI: true
    },
    {
      id: 5,
      name: t('botsPageFull.items.b5.name', language),
      icon: <SiFacebook className="w-16 h-16 text-blue-600" />,
      description: t('botsPageFull.items.b5.desc', language),
      platform: 'Facebook',
      features: (t('botsPageFull.items.b5.features', language) as unknown as string[]),
      users: 'New',
      rating: 4.9,
      color: 'from-blue-600 to-indigo-700',
      demoUrl: 'https://www.facebook.com/profile.php?id=61578860781418',
    },
    {
      id: 6,
      name: t('botsPageFull.items.b6.name', language),
      icon: <SiWhatsapp className="w-16 h-16 text-green-500" />,
      description: t('botsPageFull.items.b6.desc', language),
      platform: 'WhatsApp',
      features: (t('botsPageFull.items.b6.features', language) as unknown as string[]),
      users: 'New',
      rating: 4.9,
      color: 'from-green-400 to-green-600',
      demoUrl: 'https://wa.me/212631342792',
    },
    {
      id: 7,
      name: t('botsPageFull.items.b7.name', language),
      icon: <SiWhatsapp className="w-16 h-16 text-green-500" />,
      description: t('botsPageFull.items.b7.desc', language),
      platform: 'WhatsApp',
      features: (t('botsPageFull.items.b7.features', language) as unknown as string[]),
      users: 'New',
      rating: 4.9,
      color: 'from-green-400 to-green-600',
      demoUrl: 'https://wa.me/212649550748',
    },
    {
      id: 8,
      name: t('botsPageFull.items.b8.name', language),
      icon: <SiWhatsapp className="w-16 h-16 text-green-500" />,
      description: t('botsPageFull.items.b8.desc', language),
      platform: 'WhatsApp',
      features: (t('botsPageFull.items.b8.features', language) as unknown as string[]),
      users: 'New',
      rating: 4.9,
      color: 'from-green-400 to-green-600',
      demoUrl: 'https://wa.me/212656918407',
    },
    {
      id: 9,
      name: t('botsPageFull.items.t1.name', language),
      icon: <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-md transform group-hover:scale-110 transition-transform duration-300"><img src="/bots/2.jpeg" alt={t('botsPageFull.items.t1.name', language)} className="w-full h-full object-cover" /></div>,
      description: t('botsPageFull.items.t1.desc', language),
      platform: 'Telegram',
      features: (t('botsPageFull.items.t1.features', language) as unknown as string[]),
      users: '10K+',
      rating: 4.9,
      color: 'from-blue-400 to-blue-600',
      demoUrl: 'https://t.me/MegaDrivePdf_bot',
    },
    {
      id: 10,
      name: t('botsPageFull.items.t2.name', language),
      icon: <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-md transform group-hover:scale-110 transition-transform duration-300"><img src="/bots/4.jpeg" alt={t('botsPageFull.items.t2.name', language)} className="w-full h-full object-cover" /></div>,
      description: t('botsPageFull.items.t2.desc', language),
      platform: 'Telegram',
      features: (t('botsPageFull.items.t2.features', language) as unknown as string[]),
      users: '5K+',
      rating: 4.8,
      color: 'from-blue-400 to-blue-600',
      demoUrl: 'https://t.me/bacakubot',
    },
    {
      id: 11,
      name: t('botsPageFull.items.t3.name', language),
      icon: <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-md transform group-hover:scale-110 transition-transform duration-300"><img src="/bots/5.jpeg" alt={t('botsPageFull.items.t3.name', language)} className="w-full h-full object-cover" /></div>,
      description: t('botsPageFull.items.t3.desc', language),
      platform: 'Telegram',
      features: (t('botsPageFull.items.t3.features', language) as unknown as string[]),
      users: '12K+',
      rating: 4.9,
      color: 'from-blue-400 to-blue-600',
      demoUrl: 'https://t.me/wm_remove_bot',
    },
    {
      id: 12,
      name: t('botsPageFull.items.t4.name', language),
      icon: <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-md transform group-hover:scale-110 transition-transform duration-300"><img src="/bots/7.jpeg" alt={t('botsPageFull.items.t4.name', language)} className="w-full h-full object-cover" /></div>,
      description: t('botsPageFull.items.t4.desc', language),
      platform: 'Telegram',
      features: (t('botsPageFull.items.t4.features', language) as unknown as string[]),
      users: '8K+',
      rating: 4.7,
      color: 'from-blue-400 to-blue-600',
      demoUrl: 'https://t.me/hamzaamirni4BOT',
    },
    {
      id: 13,
      name: t('botsPageFull.items.t5.name', language),
      icon: <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-md transform group-hover:scale-110 transition-transform duration-300"><img src="/bots/8.jpeg" alt={t('botsPageFull.items.t5.name', language)} className="w-full h-full object-cover" /></div>,
      description: t('botsPageFull.items.t5.desc', language),
      platform: 'Telegram',
      features: (t('botsPageFull.items.t5.features', language) as unknown as string[]),
      users: '15K+',
      rating: 4.9,
      color: 'from-blue-400 to-blue-600',
      demoUrl: 'https://t.me/YtbDownBot',
    },
    {
      id: 14,
      name: t('botsPageFull.items.t6.name', language),
      icon: <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-md transform group-hover:scale-110 transition-transform duration-300"><img src="/bots/10.jpeg" alt={t('botsPageFull.items.t6.name', language)} className="w-full h-full object-cover" /></div>,
      description: t('botsPageFull.items.t6.desc', language),
      platform: 'Telegram',
      features: (t('botsPageFull.items.t6.features', language) as unknown as string[]),
      users: '7K+',
      rating: 4.8,
      color: 'from-blue-400 to-blue-600',
      demoUrl: 'https://t.me/CCDBot',
    },
    {
      id: 15,
      name: t('botsPageFull.items.t7.name', language),
      icon: <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-md transform group-hover:scale-110 transition-transform duration-300"><img src="/bots/WhatsApp Image 2026-02-27 at 14.16.42.jpeg" alt={t('botsPageFull.items.t7.name', language)} className="w-full h-full object-cover" /></div>,
      description: t('botsPageFull.items.t7.desc', language),
      platform: 'Telegram',
      features: (t('botsPageFull.items.t7.features', language) as unknown as string[]),
      users: '20K+',
      rating: 4.9,
      color: 'from-blue-400 to-blue-600',
      demoUrl: 'https://t.me/IslamicQuranBot',
    },
    {
      id: 16,
      name: t('botsPageFull.items.t8.name', language),
      icon: <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-md transform group-hover:scale-110 transition-transform duration-300"><img src="/bots/WhatsApp Image 2026-02-27 at 14.16.43.jpeg" alt={t('botsPageFull.items.t8.name', language)} className="w-full h-full object-cover" /></div>,
      description: t('botsPageFull.items.t8.desc', language),
      platform: 'Telegram',
      features: (t('botsPageFull.items.t8.features', language) as unknown as string[]),
      users: '25K+',
      rating: 5.0,
      color: 'from-blue-400 to-blue-600',
      demoUrl: 'https://t.me/ccwebot',
    }
  ];

  const botFeatures = [
    {
      icon: Zap,
      title: language === 'ar' ? 'سرعة فائقة' : language === 'fr' ? 'Ultra Rapide' : 'Ultra Fast',
      description: language === 'ar' ? 'استجابة فورية لجميع الطلبات والأوامر' : language === 'fr' ? 'Réponse instantanée à toutes les commandes' : 'Instant response to all commands'
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'أمان عالي' : language === 'fr' ? 'Haute Sécurité' : 'High Security',
      description: language === 'ar' ? 'حماية كاملة للبيانات والخصوصية' : language === 'fr' ? 'Protection complète des données' : 'Full data and privacy protection'
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'متاح 24/7' : language === 'fr' ? 'Disponible 24/7' : 'Available 24/7',
      description: language === 'ar' ? 'يعمل على مدار الساعة دون توقف' : language === 'fr' ? 'Fonctionne 24h/24 sans arrêt' : 'Works around the clock non-stop'
    },
    {
      icon: Sparkles,
      title: language === 'ar' ? 'ذكاء اصطناعي' : language === 'fr' ? 'Intelligence Artificielle' : 'Artificial Intelligence',
      description: language === 'ar' ? 'يتعلم ويتطور مع الاستخدام' : language === 'fr' ? 'Apprend et évolue avec l\'utilisation' : 'Learns and evolves with usage'
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12 pb-12"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants}>
        <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10 dark:from-primary/10 dark:to-secondary/10 dark:border-primary/20">
          <div className="space-y-4">
            <div className="inline-block p-4 bg-gradient-to-r from-primary to-secondary rounded-2xl">
              <Bot className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {t('botsPageFull.hero.title', language)}
            </h1>
            <p className="text-lg text-dark-color/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('botsPageFull.hero.description', language)}
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Features Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center text-dark-color dark:text-gray-100 mb-8">
          {t('botsPageFull.featuresTitle', language)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {botFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 dark:border-white/10"
            >
              <div className="inline-block p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bots Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center text-dark-color dark:text-gray-100 mb-8">
          {t('botsPageFull.availableTools', language)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bots.map((bot) => (
            <motion.div
              key={bot.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className={`h-full flex flex-col hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-white/10 ${bot.featured ? 'border-2 border-primary ring-2 ring-primary/20' : ''}`}>
                {bot.featured && (
                  <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2 -mt-6 -mx-6 mb-4 rounded-t-xl">
                    <span className="text-sm font-bold flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      {t('botsPageFull.badges.featured', language)}
                    </span>
                  </div>
                )}

                <div className="text-center mb-4">
                  <div className="text-6xl mb-4 flex justify-center">{bot.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-primary transition-colors mb-2">
                    {bot.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-sm mb-2">
                    <span className={`px-3 py-1 ${bot.isAI ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'} rounded-full font-medium`}>
                      {bot.platform}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-gray-600 dark:text-gray-400 font-bold text-lg">{bot.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-center px-2">
                  {bot.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <MessageSquare className="w-4 h-4" />
                    <span>{bot.users} {bot.users !== t('botsPageFull.badges.direct', language) && t('botsPageFull.badges.users', language)}</span>
                  </div>
                  <ul className="space-y-2">
                    {bot.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Zap className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={bot.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl bg-gradient-to-r ${bot.color} text-white font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    {bot.featured ? t('botsPageFull.buttons.contact', language) : bot.isAI ? t('botsPageFull.buttons.open', language) : t('botsPageFull.buttons.try', language)}
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How to Use Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-none">
          <h3 className="text-2xl font-bold text-center text-primary dark:text-blue-400 mb-6">
            {t('botsPageFull.howToUse', language)}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(t('botsPageFull.steps', language) as unknown as any[]).map((step: any, idx: number) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </Card>
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

export default Bots;
