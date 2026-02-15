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
    name: 'تطبيق ولنا في الله ظن',
    icon: '🤲',
    description: 'تطبيق إسلامي شامل يحتوي على أدعية وأذكار ومحتوى ديني مفيد لتعزيز الروحانية',
    category: 'إسلامي',
    downloads: '10K+',
    rating: 4.8,
    features: [
      'أدعية وأذكار يومية',
      'محتوى ديني متجدد',
      'واجهة سهلة الاستخدام',
      'يعمل بدون إنترنت'
    ],
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=400&q=80',
    downloadUrl: 'https://www.mediafire.com/file/v5v8kofvmuczs4m/%25D9%2588%25D9%2584%25D9%2586%25D8%25A7_%25D9%2581%25D9%258A_%25D8%25A7%25D9%2584%25D9%2591%25D9%2585_%25D8%25B8%25D9%2586_%25D9%2584%25D8%25A7_%25D9%258A%25D8%25AE%25D9%2580%25D8%25A8_...__%25F0%259F%258F%25BB%25F0%259F%25A4%258D_1.0.apk/file',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 2,
    name: 'Smart Education BAC',
    icon: '🎓',
    description: 'تطبيق تعليمي شامل لطلاب البكالوريا يحتوي على دروس وملخصات وامتحانات سابقة',
    category: 'تعليمي',
    downloads: '15K+',
    rating: 4.9,
    features: [
      'دروس وملخصات شاملة',
      'امتحانات وطنية سابقة',
      'نصائح للتوجيه',
      'حساب المعدلات'
    ],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=400&q=80',
    downloadUrl: 'https://www.mediafire.com/file/kqc4zsmhg9stjyx/smart_education_BAC_1.0.apk/file',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 3,
    name: 'مدير المهام الذكي',
    icon: '✅',
    description: 'تطبيق لإدارة المهام اليومية والمشاريع مع تذكيرات ذكية وتتبع الإنتاجية',
    category: 'إنتاجية',
    downloads: '5K+',
    rating: 4.6,
    features: [
      'إنشاء مهام ومشاريع',
      'تذكيرات ذكية',
      'تتبع الإنتاجية',
      'مزامنة سحابية'
    ],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80',
    downloadUrl: '#',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 4,
    name: 'متجري الإلكتروني',
    icon: '🛒',
    description: 'تطبيق متجر إلكتروني متكامل لإدارة وبيع المنتجات أونلاين بسهولة',
    category: 'تجارة',
    downloads: '8K+',
    rating: 4.7,
    features: [
      'إدارة المنتجات',
      'نظام دفع آمن',
      'تتبع الطلبات',
      'تقارير مبيعات'
    ],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80',
    downloadUrl: '#',
    color: 'from-orange-500 to-red-600'
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
        <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10">
          <div className="space-y-4">
            <div className="inline-block p-4 bg-gradient-to-r from-primary to-secondary rounded-2xl">
              <Smartphone className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              تطبيقاتي المميزة
            </h1>
            <p className="text-lg text-dark-color/70 max-w-3xl mx-auto leading-relaxed">
              مجموعة من التطبيقات المفيدة التي طورتها لتسهيل حياتك اليومية.
              جميع التطبيقات مجانية ومتاحة للتحميل.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Stats Section */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <Smartphone className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-blue-700">4+</h3>
            <p className="text-blue-600 font-medium">تطبيقات متاحة</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
            <Users className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-green-700">38K+</h3>
            <p className="text-green-600 font-medium">مستخدم نشط</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 text-center">
            <Star className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-yellow-700">4.7</h3>
            <p className="text-yellow-600 font-medium">متوسط التقييم</p>
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
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* App Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${app.color} opacity-50 mix-blend-multiply z-10`} />
                <img
                  src={app.image}
                  alt={app.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm">
                  <span className="text-xs font-semibold text-gray-700">{app.category}</span>
                </div>
                <div className="absolute bottom-4 right-4 z-20 text-6xl">
                  {app.icon}
                </div>
              </div>

              {/* App Content */}
              <div className="p-6 flex-1 flex flex-col space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors mb-2">
                    {app.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 font-medium">{app.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-600 font-medium">{app.rating}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1 flex-1">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-500">
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
                  تحميل التطبيق
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 text-center">
          <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            المزيد قريباً!
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نعمل حالياً على تطوير المزيد من التطبيقات المفيدة.
            تابعنا على قنواتنا لتكون أول من يعرف عن الإصدارات الجديدة.
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
