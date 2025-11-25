import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Bot, MessageSquare, Zap, Shield, Clock, Star, ExternalLink } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import WhatsappChannelLinks from '../components/WhatsappChannelLinks';

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

const bots = [
  {
    id: 1,
    name: 'بوت خدمة العملاء',
    icon: '🤖',
    description: 'بوت ذكي للرد على استفسارات العملاء على مدار الساعة بطريقة احترافية وسريعة',
    platform: 'WhatsApp & Telegram',
    features: [
      'ردود تلقائية ذكية',
      'دعم متعدد اللغات',
      'تكامل مع قواعد البيانات',
      'تحليلات وتقارير'
    ],
    users: '500+',
    rating: 4.9,
    color: 'from-green-500 to-emerald-600',
    demoUrl: '#'
  },
  {
    id: 2,
    name: 'بوت إدارة المجموعات',
    icon: '👥',
    description: 'بوت متقدم لإدارة مجموعات Telegram مع ميزات الإشراف والتحكم الكامل',
    platform: 'Telegram',
    features: [
      'إدارة الأعضاء',
      'فلترة الرسائل',
      'ترحيب تلقائي',
      'أوامر مخصصة'
    ],
    users: '1.2K+',
    rating: 4.8,
    color: 'from-blue-500 to-cyan-600',
    demoUrl: '#'
  },
  {
    id: 3,
    name: 'بوت التذكيرات',
    icon: '⏰',
    description: 'بوت للتذكير بالمهام والمواعيد المهمة مع إشعارات ذكية ومتكررة',
    platform: 'WhatsApp & Telegram',
    features: [
      'تذكيرات مجدولة',
      'تكرار تلقائي',
      'إشعارات مخصصة',
      'إدارة المهام'
    ],
    users: '800+',
    rating: 4.7,
    color: 'from-purple-500 to-pink-600',
    demoUrl: '#'
  },
  {
    id: 4,
    name: 'بوت الأخبار',
    icon: '📰',
    description: 'بوت لنشر الأخبار والتحديثات تلقائياً من مصادر متعددة',
    platform: 'Telegram',
    features: [
      'جلب أخبار تلقائي',
      'مصادر متعددة',
      'جدولة النشر',
      'تصنيف الأخبار'
    ],
    users: '2K+',
    rating: 4.6,
    color: 'from-orange-500 to-red-600',
    demoUrl: '#'
  }
];

const botFeatures = [
  {
    icon: Zap,
    title: 'سرعة فائقة',
    description: 'استجابة فورية لجميع الطلبات والأوامر'
  },
  {
    icon: Shield,
    title: 'أمان عالي',
    description: 'حماية كاملة للبيانات والخصوصية'
  },
  {
    icon: Clock,
    title: 'متاح 24/7',
    description: 'يعمل على مدار الساعة دون توقف'
  },
  {
    icon: MessageSquare,
    title: 'ذكاء اصطناعي',
    description: 'يتعلم ويتطور مع الاستخدام'
  }
];

const Bots: React.FC = () => {
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
              <Bot className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              البوتات الذكية
            </h1>
            <p className="text-lg text-dark-color/70 max-w-3xl mx-auto leading-relaxed">
              بوتات ذكية ومتطورة لأتمتة المهام وتحسين الإنتاجية. 
              جميع البوتات مجانية وسهلة الاستخدام.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Features Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center text-dark-color mb-8">
          لماذا تستخدم بوتاتنا؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {botFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
            >
              <div className="inline-block p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bots Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center text-dark-color mb-8">
          البوتات المتاحة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bots.map((bot) => (
            <motion.div
              key={bot.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{bot.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors mb-1">
                      {bot.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                        {bot.platform}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-gray-600 font-medium">{bot.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {bot.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <MessageSquare className="w-4 h-4" />
                    <span>{bot.users} مستخدم نشط</span>
                  </div>
                  <ul className="space-y-2">
                    {bot.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Zap className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a
                    href={bot.demoUrl}
                    className={`w-full py-3 rounded-xl bg-gradient-to-r ${bot.color} text-white font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    تجربة البوت
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How to Use Section */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
          <h3 className="text-2xl font-bold text-center text-primary mb-6">
            كيفية استخدام البوتات
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                1
              </div>
              <h4 className="font-bold text-gray-800 mb-2">اختر البوت</h4>
              <p className="text-sm text-gray-600">اختر البوت المناسب لاحتياجاتك</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                2
              </div>
              <h4 className="font-bold text-gray-800 mb-2">ابدأ المحادثة</h4>
              <p className="text-sm text-gray-600">افتح البوت وابدأ التفاعل معه</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                3
              </div>
              <h4 className="font-bold text-gray-800 mb-2">استمتع بالخدمة</h4>
              <p className="text-sm text-gray-600">استفد من جميع الميزات المتاحة</p>
            </div>
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
