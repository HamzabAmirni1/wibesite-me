import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Download, Star, Users, Smartphone, Globe, Zap } from 'lucide-react';
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

const Apps: React.FC = () => {
  const { language } = useLanguage();

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
