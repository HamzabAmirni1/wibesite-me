import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import { Download, Star, Users, Smartphone, Globe, Zap, ThumbsUp, ExternalLink, Sparkles, Search, Bot, X, Tablet } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../i18n';

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

const apps = [
  {
    id: 1,
    key: 'a1',
    icon: '🤲',
    downloads: '10K+',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=400&q=80',
    downloadUrl: 'https://www.mediafire.com/file/v5v8kofvmuczs4m/%25D9%2588%25D9%2584%25D9%2586%25D8%25A7_%25D9%2581%25D9%258A_%25D8%25A7%25D9%2584%25D9%2591%25D9%2585_%25D8%25B8%25D9%2586_%25D9%2584%25D8%25A7_%25D9%258A%25D8%25AE%25D9%2580%25D8%25A8_...__%25F0%259F%258F%25BB%25F0%259F%25A4%258D_1.0.apk/file',
    color: 'from-green-500 to-emerald-600',
    catKey: 'islamic'
  },
  {
    id: 2,
    key: 'a2',
    icon: '🎓',
    downloads: '15K+',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    downloadUrl: 'https://www.mediafire.com/file/kqc4zsmhg9stjyx/smart_education_BAC_1.0.apk/file',
    color: 'from-blue-500 to-cyan-600',
    catKey: 'educational'
  },
  {
    id: 3,
    key: 'a3',
    icon: '✅',
    downloads: '5K+',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80',
    downloadUrl: 'https://www.instagram.com/hamza_amirni_01',
    color: 'from-purple-500 to-pink-600',
    catKey: 'productivity'
  },
  {
    id: 4,
    key: 'a4',
    icon: '🛒',
    downloads: '8K+',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80',
    downloadUrl: 'https://www.instagram.com/hamza_amirni_01',
    color: 'from-orange-500 to-red-600',
    catKey: 'commerce'
  }
];

// ---- Recommended external apps data ----
const recommendedApps = [
  {
    id: 'pocketpal',
    name: 'PocketPal AI',
    developer: 'LLM Ventures',
    rating: 3.3,
    downloads: '1M+',
    // Official icon hosted locally
    logo: '/pocketpal-logo.jpg',
    playUrl: 'https://play.google.com/store/apps/details?id=com.pocketpalai',
    appStoreUrl: 'https://apps.apple.com/us/app/pocketpal-ai/id6502579498',
    accentColor: 'amber',
    gradientBar: 'from-yellow-400 via-amber-500 to-orange-500',
    btnGradient: 'from-yellow-500 to-amber-600',
    shadowColor: 'shadow-amber-500/30',
    borderColor: 'border-amber-200/60 dark:border-amber-700/40 hover:border-amber-400 dark:hover:border-amber-500',
    badgeBg: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-600',
    zapColor: 'text-amber-500',
    // Search keywords for smart filter
    keywords: ['pocketpal', 'pocket', 'pal', 'llm', 'offline', 'ai', 'local', 'llama', 'phi', 'gemma', 'chatbot', 'chat', 'بوكيت', 'اوفلاين', 'ذكاء', 'دردشة'],
    desc: {
      ar: 'تطبيق ذكاء اصطناعي يشتغل مباشرة على هاتفك بدون إنترنت — تقدر تحمّل نماذج LLM مختلفة وتدردش معاهم offline. مزيان بزاف للي بغا يجرّب AI على الموبايل.',
      fr: "Une app IA qui tourne entièrement sur votre téléphone SANS Internet. Téléchargez différents modèles LLM et discutez avec eux en mode offline. Idéal pour explorer l'IA locale sur mobile.",
      en: 'An AI app that runs entirely on your phone with NO Internet. Download various LLM models and chat with them fully offline. Great for exploring local AI on mobile.'
    },
    features: {
      ar: ['يشتغل بدون إنترنت 100%', 'نماذج متعددة: Llama, Phi, Gemma...', 'خاص وآمن — بياناتك فهاتفك فقط', 'مجاني بالكامل'],
      fr: ['Fonctionne 100% sans Internet', 'Modèles variés : Llama, Phi, Gemma...', 'Privé et sécurisé — données sur votre téléphone', 'Entièrement gratuit'],
      en: ['Works 100% offline', 'Multiple models: Llama, Phi, Gemma...', 'Private & secure — data stays on device', 'Completely free']
    }
  },
  {
    id: 'googleedge',
    name: 'Google AI Edge Gallery',
    developer: 'Google',
    rating: null,
    ratingLabel: { ar: 'وصول مبكر', fr: 'Accès anticipé', en: 'Early Access' },
    downloads: '1M+',
    // Official icon hosted locally
    logo: '/googleedge-logo.jpg',
    playUrl: 'https://play.google.com/store/apps/details?id=com.google.ai.edge.gallery&hl=fr&pli=1',
    appStoreUrl: 'https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337',
    accentColor: 'blue',
    gradientBar: 'from-blue-400 via-indigo-500 to-purple-600',
    btnGradient: 'from-blue-500 to-indigo-600',
    shadowColor: 'shadow-blue-500/30',
    borderColor: 'border-blue-200/60 dark:border-blue-700/40 hover:border-blue-400 dark:hover:border-blue-500',
    badgeBg: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-600',
    zapColor: 'text-blue-500',
    keywords: ['google', 'edge', 'gallery', 'gemma', 'ai', 'on-device', 'experimental', 'mcp', 'جوجل', 'غاليري', 'ذكاء', 'تجريبي'],
    desc: {
      ar: 'تطبيق تجريبي من Google — تقدر تجرّب نماذج Gemma وغيرها مباشرة على جهازك بدون إنترنت. مثالي للمطورين ولكل من يبغا يكشف على مستقبل AI على الحافة.',
      fr: "Une app expérimentale de Google — explorez Gemma et d'autres modèles directement sur votre appareil, sans Internet. Idéale pour les développeurs et les curieux de l'IA embarquée.",
      en: 'An experimental app by Google — explore Gemma and other models directly on your device, no Internet needed. Perfect for developers curious about on-device AI.'
    },
    features: {
      ar: ['نماذج Google Gemma على جهازك', 'وصول مبكر — ميزات جديدة باستمرار', 'اتصالات MCP تجريبية', 'من Google مباشرة — موثوق 100%'],
      fr: ['Modèles Google Gemma sur votre appareil', 'Accès anticipé — nouvelles fonctionnalités régulières', 'Connexions MCP expérimentales', 'Directement de Google — 100% fiable'],
      en: ['Google Gemma models on your device', 'Early access — new features regularly', 'Experimental MCP connections', 'Directly from Google — 100% trusted']
    }
  }
];

const Apps: React.FC = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  // AI-powered smart search — filters by name, developer, keywords, description
  const filteredRecommended = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return recommendedApps;
    return recommendedApps.filter(app => {
      const haystack = [
        app.name,
        app.developer,
        ...app.keywords,
        app.desc[language as 'ar' | 'fr' | 'en'],
        ...app.features[language as 'ar' | 'fr' | 'en']
      ].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }, [searchQuery, language]);

  const handleImgError = (id: string) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const placeholderIcon: Record<string, string> = {
    pocketpal: '🤖',
    googleedge: '🧠'
  };

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
              <Smartphone className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {t('appsPage.hero.title', language)}
            </h1>
            <p className="text-lg text-dark-color/70 max-w-3xl mx-auto leading-relaxed dark:text-gray-300">
              {t('appsPage.hero.description', language)}
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Stats Section */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center dark:from-blue-900/30 dark:to-blue-800/20">
            <Smartphone className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-400">4+</h3>
            <p className="text-blue-600 font-medium dark:text-blue-300">{t('appsPage.stats.available', language)}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center dark:from-green-900/30 dark:to-green-800/20">
            <Users className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-green-700 dark:text-green-400">38K+</h3>
            <p className="text-green-600 font-medium dark:text-green-300">{t('appsPage.stats.users', language)}</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 text-center dark:from-yellow-900/30 dark:to-yellow-800/20">
            <Star className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-yellow-700 dark:text-yellow-400">4.7</h3>
            <p className="text-yellow-600 font-medium dark:text-yellow-300">{t('appsPage.stats.rating', language)}</p>
          </div>
        </div>
      </motion.div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {apps.map((app) => (
          <motion.div
            key={app.id}
            variants={itemVariants}
            className="group"
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
              {/* App Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${app.color} opacity-50 mix-blend-multiply z-10`} />
                <img
                  src={app.image}
                  alt={t(`appsPage.items.${app.key}.name`, language)}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 dark:opacity-80"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full backdrop-blur-sm">
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                    {t(`appsPage.categories.${app.catKey}`, language)}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 z-20 text-6xl">
                  {app.icon}
                </div>
              </div>

              {/* App Content */}
              <div className="p-6 flex-1 flex flex-col space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors mb-2 dark:text-gray-100">
                    {t(`appsPage.items.${app.key}.name`, language)}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed dark:text-gray-300">
                    {t(`appsPage.items.${app.key}.desc`, language)}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{app.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{app.rating}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1 flex-1">
                  {(t(`appsPage.items.${app.key}.features`, language) as string[]).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <Zap className="w-3 h-3 text-primary ml-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Download Button */}
                <a
                  href={app.downloadUrl}
                  className={`w-full py-3 rounded-xl bg-gradient-to-r ${app.color} text-white font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                >
                  <Download className="w-5 h-5" />
                  {t('appsPage.download', language)}
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* ===== Recommended External Apps Section ===== */}
      <motion.div variants={itemVariants}>
        {/* Section Header */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-dashed border-amber-300/50 dark:border-amber-500/30" />
          </div>
          <div className="relative flex justify-center">
            <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 rounded-2xl shadow-lg shadow-amber-500/30">
              <ThumbsUp className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-lg">
                {language === 'ar' ? 'تطبيقات أنصح بها 🤝' : language === 'fr' ? 'Apps que je recommande 🤝' : 'Apps I Recommend 🤝'}
              </span>
              <Sparkles className="w-5 h-5 text-white/80" />
            </div>
          </div>
        </div>

        {/* Disclaimer banner */}
        <div className="mb-5 flex items-start gap-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 rounded-xl p-4">
          <span className="text-2xl flex-shrink-0">⚠️</span>
          <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
            {language === 'ar'
              ? 'هذه التطبيقات ليست من تطويري — هي تطبيقات خارجية أرشحها للفائدة فقط. لم أقم ببرمجتها ولا تربطني أي علاقة بمطوريها.'
              : language === 'fr'
              ? "Ces apps ne sont PAS les miennes — ce sont des applications externes que je recommande personnellement. Je ne les ai pas créées et je n'ai aucun lien avec leurs développeurs."
              : 'These apps are NOT mine — they are external apps I personally recommend. I did not create them and have no affiliation with their developers.'}
          </p>
        </div>

        {/* ---- AI Smart Search Bar ---- */}
        <div className="mb-6">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-orange-400 to-purple-500 rounded-2xl opacity-0 group-focus-within:opacity-60 blur transition-opacity duration-300" />
            <div className="relative flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl overflow-hidden shadow-sm group-focus-within:shadow-lg transition-all duration-300">
              {/* AI icon badge */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-r border-gray-200 dark:border-gray-600 flex-shrink-0">
                <Bot className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400 hidden sm:block">AI Search</span>
              </div>
              {/* Input */}
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'ar'
                    ? 'بحث بالاسم، الوصف، أو الميزة... (pocketpal، offline، gemma...)'
                    : language === 'fr'
                    ? 'Rechercher par nom, description, fonctionnalité... (pocketpal, offline, gemma...)'
                    : 'Search by name, description, feature... (pocketpal, offline, gemma...)'
                }
                className="flex-1 px-4 py-3 bg-transparent text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none"
              />
              {/* Search icon / clear button */}
              <div className="px-4 flex-shrink-0">
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                ) : (
                  <Search className="w-4 h-4 text-gray-400" />
                )}
              </div>
            </div>
          </div>
          {/* AI hint */}
          {searchQuery && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-xs text-gray-500 dark:text-gray-400 px-1 flex items-center gap-1"
            >
              <Bot className="w-3 h-3 text-amber-500" />
              {filteredRecommended.length === 0
                ? (language === 'ar' ? 'ما لقينا شي — جرب كلمة أخرى' : language === 'fr' ? 'Aucun résultat — essayez un autre mot' : 'No results — try another keyword')
                : (language === 'ar' ? `وجدنا ${filteredRecommended.length} تطبيق` : language === 'fr' ? `${filteredRecommended.length} app(s) trouvée(s)` : `${filteredRecommended.length} app(s) found`)}
            </motion.p>
          )}
        </div>

        {/* Recommended Apps Cards */}
        <AnimatePresence mode="popLayout">
          {filteredRecommended.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-16 text-gray-400 dark:text-gray-500"
            >
              <Search className="w-12 h-12 mx-auto mb-3 opacity-40" />
              <p className="text-sm">
                {language === 'ar' ? 'ما كاين شي نتيجة لـ "' + searchQuery + '"' : language === 'fr' ? `Aucune app pour "${searchQuery}"` : `No app matches "${searchQuery}"`}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredRecommended.map((app) => (
                <motion.div
                  key={app.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <Card className={`h-full flex flex-col overflow-hidden border-2 ${app.borderColor} hover:shadow-2xl transition-all duration-300 dark:bg-gray-800`}>
                    {/* Top gradient bar */}
                    <div className={`h-2 w-full bg-gradient-to-r ${app.gradientBar} rounded-t-xl`} />

                    <div className="p-6 flex flex-col gap-4 flex-1">
                      {/* App Header with real logo */}
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg ${app.shadowColor} flex-shrink-0 bg-white dark:bg-gray-700`}>
                          {imgErrors[app.id] ? (
                            <span className="text-3xl">{placeholderIcon[app.id]}</span>
                          ) : (
                            <img
                              src={app.logo}
                              alt={`${app.name} logo`}
                              className="w-full h-full object-cover"
                              onError={() => handleImgError(app.id)}
                              loading="lazy"
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{app.name}</h3>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${app.badgeBg}`}>
                              {app.developer}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-medium">
                                {app.rating
                                  ? app.rating
                                  : (app.ratingLabel as any)[language]}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>{app.downloads}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                        {(app.desc as any)[language]}
                      </p>

                      {/* Features */}
                      <ul className="space-y-1.5">
                        {((app.features as any)[language] as string[]).map((feat: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <Zap className={`w-3 h-3 ${app.zapColor} flex-shrink-0`} />
                            {feat}
                          </li>
                        ))}
                      </ul>

                      {/* Download Buttons — Google Play + App Store */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Google Play */}
                        <a
                          href={app.playUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-xl bg-gradient-to-br ${app.btnGradient} text-white font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 group/btn`}
                        >
                          <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3.18 23.76a2.5 2.5 0 0 1-1.18-2.19V2.43A2.5 2.5 0 0 1 3.18.24l12.4 11.76L3.18 23.76zm16.63-8.03L5.8 24l10.76-10.2 3.25 1.93zm0-7.46-3.25 1.93L5.8 0l14.01 8.27zM5.8 0l13.6 8.08-3.25 1.93L5.8 0zm0 24-3.62-2.14V2.14L5.8 0l10.35 9.81L5.8 24z"/>
                            </svg>
                            <span className="text-xs font-bold leading-tight">Google Play</span>
                          </div>
                          <span className="text-[10px] opacity-80">
                            {language === 'ar' ? 'أندرويد' : 'Android'}
                          </span>
                        </a>
                        {/* App Store */}
                        <a
                          href={(app as any).appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white font-semibold hover:shadow-lg hover:shadow-gray-800/30 hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                          <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.08.05c-.22.14-2.18 1.37-2.16 3.87.03 3.02 2.65 4 2.68 4.01l-.08.25zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <span className="text-xs font-bold leading-tight">App Store</span>
                          </div>
                          <span className="text-[10px] opacity-80">
                            {language === 'ar' ? 'آيفون' : 'iPhone'}
                          </span>
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Coming Soon Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 text-center dark:from-indigo-950/20 dark:to-purple-950/20 dark:border-white/10">
          <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2 dark:text-gray-100">
            {t('appsPage.comingSoon.title', language)}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            {t('appsPage.comingSoon.description', language)}
          </p>
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
export default Apps;
